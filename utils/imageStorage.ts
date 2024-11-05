// utils/imageStorage.ts

interface StoredImage {
  id: string;
  file: Blob; // Store as Blob instead of File
  fileName: string;
  fileType: string;
  timestamp: number;
}

interface DisplayImage {
  id: string;
  url: string;
  file: File;
}

class ImageStorage {
  private dbName = 'wardrobeImages';
  private storeName = 'images';
  private maxImages = 3;
  private expirationTime = 24 * 60 * 60 * 1000; // 24 hours

  async initDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName, { keyPath: 'id' });
        }
      };
    });
  }

  private async performTransaction(
    mode: IDBTransactionMode,
    callback: (store: IDBObjectStore) => void
  ): Promise<void> {
    const db = await this.initDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(this.storeName, mode);
      const store = transaction.objectStore(this.storeName);

      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error);

      callback(store);
    });
  }

  async storeImage(file: File): Promise<DisplayImage> {
    const images = await this.getImages();

    if (images.length >= this.maxImages) {
      throw new Error(`Maximum of ${this.maxImages} images allowed`);
    }

    // Store file metadata and blob
    const imageData: StoredImage = {
      id: crypto.randomUUID(),
      file: file,
      fileName: file.name,
      fileType: file.type,
      timestamp: Date.now(),
    };

    await this.performTransaction('readwrite', (store) => {
      store.add(imageData);
    });

    // Return display-ready image object
    return {
      id: imageData.id,
      url: URL.createObjectURL(file),
      file: file,
    };
  }

  async getImages(): Promise<DisplayImage[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await this.initDB();
        const transaction = db.transaction(this.storeName, 'readonly');
        const store = transaction.objectStore(this.storeName);
        const request = store.getAll();

        request.onsuccess = () => {
          const storedImages = request.result as StoredImage[];
          // Filter out expired images
          const validImages = storedImages.filter(
            (img) => Date.now() - img.timestamp < this.expirationTime
          );

          // If we found and removed expired images, clean them up
          if (validImages.length < storedImages.length) {
            this.cleanupExpiredImages(storedImages, validImages);
          }

          // Convert stored images to display images with new object URLs
          const displayImages = validImages.map((img) => ({
            id: img.id,
            url: URL.createObjectURL(img.file),
            file: new File([img.file], img.fileName, { type: img.fileType }),
          }));

          resolve(displayImages);
        };
        request.onerror = () => reject(request.error);
      } catch (error) {
        reject(error);
      }
    });
  }

  private async cleanupExpiredImages(
    allImages: StoredImage[],
    validImages: StoredImage[]
  ): Promise<void> {
    const expiredIds = allImages
      .filter((img) => !validImages.find((valid) => valid.id === img.id))
      .map((img) => img.id);

    await this.performTransaction('readwrite', (store) => {
      expiredIds.forEach((id) => {
        store.delete(id);
      });
    });
  }

  async removeImage(id: string): Promise<void> {
    await this.performTransaction('readwrite', (store) => {
      store.delete(id);
    });
  }

  async clearImages(): Promise<void> {
    await this.performTransaction('readwrite', (store) => {
      store.clear();
    });
  }

  // Clean up URLs when no longer needed
  revokeImageUrl(url: string): void {
    if (url) {
      URL.revokeObjectURL(url);
    }
  }
}

export const imageStorage = new ImageStorage();
