'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { redirect } from 'next/navigation';

import analyzeImage from '../../utils/analyzeImage';
import { imageStorage } from '../../utils/imageStorage';

export default function WardrobePage() {
  const { user, isLoaded } = useUser();

  const [images, setImages] = useState<
    Array<{ id: string; url: string; file: File }>
  >([]);
  const [analysisType, setAnalysisType] = useState<string>('style');
  const [results, setResults] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const { toast } = useToast();

  useEffect(() => {
    const loadStoredImages = async () => {
      try {
        const storedImages = await imageStorage.getImages();
        setImages(storedImages);
      } catch (error) {
        console.error('Error loading stored images:', error);
        toast({
          title: 'Error',
          description: 'Failed to load stored images',
          variant: 'destructive',
        });
      }
    };

    loadStoredImages();
  }, []);

  useEffect(() => {
    return () => {
      images.forEach((image) => {
        imageStorage.revokeImageUrl(image.url);
      });
    };
  }, [images]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!user) {
    redirect('/sign-in');
  }

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = Array.from(event.target.files || []);

    if (images.length + files.length > 3) {
      toast({
        title: 'Upload limit reached',
        description: 'You can only upload up to 3 images at a time.',
        variant: 'destructive',
      });
      return;
    }

    try {
      const newImages = await Promise.all(
        files.map((file) => imageStorage.storeImage(file))
      );
      setImages((prevImages) => [...prevImages, ...newImages]);

      // Reset the input value so the same file can be uploaded again if needed
      if (event.target.value) {
        event.target.value = '';
      }
    } catch (error) {
      console.error('Error storing images:', error);
      toast({
        title: 'Error',
        description: 'Failed to store images',
        variant: 'destructive',
      });
    }
  };

  const removeImage = async (id: string) => {
    try {
      await imageStorage.removeImage(id);
      setImages((prevImages) => {
        const imageToRemove = prevImages.find((img) => img.id === id);
        if (imageToRemove) {
          imageStorage.revokeImageUrl(imageToRemove.url);
        }
        return prevImages.filter((img) => img.id !== id);
      });
    } catch (error) {
      console.error('Error removing image:', error);
      toast({
        title: 'Error',
        description: 'Failed to remove image',
        variant: 'destructive',
      });
    }
  };

  const handleAnalysis = async () => {
    setIsAnalyzing(true);
    try {
      const analysisResults = await Promise.all(
        images.map((img) => analyzeImage(img.file, analysisType))
      );
      setResults(analysisResults);
    } catch (error) {
      console.error('Error during analysis:', error);
      toast({
        title: 'Error',
        description: 'Failed to analyze images',
        variant: 'destructive',
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <>
      <main className="container mx-auto flex h-[80vh] flex-col items-center justify-center p-4">
        <h1 className="mb-6 text-3xl font-bold text-primary">Your Wardrobe</h1>
        <div className="mb-6">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="hidden"
            id="image-upload"
          />
          <label htmlFor="image-upload">
            <Button variant="outline" className="cursor-pointer" asChild>
              <span>
                <Upload className="mr-2 h-4 w-4" /> Upload Images
              </span>
            </Button>
          </label>
          <p className="mt-2 text-sm text-gray-500">
            Upload up to 3 images at once
          </p>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <AnimatePresence>
            {images.map((image) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardContent className="relative p-2">
                    <img
                      src={image.url}
                      alt="Uploaded"
                      className="h-48 w-full rounded object-cover"
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute right-4 top-4"
                      onClick={() => removeImage(image.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mb-6 flex items-center gap-4">
          <Select value={analysisType} onValueChange={setAnalysisType}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select analysis type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="style">Style Analysis</SelectItem>
              <SelectItem value="weather">Weather Appropriateness</SelectItem>
              <SelectItem value="color">Color Matching</SelectItem>
              <SelectItem value="occasion">Occasion Matching</SelectItem>
              <SelectItem value="trend">Trend Analysis</SelectItem>
            </SelectContent>
          </Select>
          <Button
            onClick={handleAnalysis}
            disabled={images.length === 0 || isAnalyzing}
            variant="default"
            className="text-secondary hover:bg-secondary-hover"
          >
            {isAnalyzing ? (
              <>Analyzing...</>
            ) : (
              <>
                <Search className="mr-2 h-4 w-4" /> Analyze Wardrobe
              </>
            )}
          </Button>
        </div>

        {results.length > 0 && (
          <div className="mt-6">
            <h2 className="mb-4 text-2xl font-semibold">Analysis Results</h2>
            <ul className="space-y-2">
              {results.map((result, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-lg bg-gray-100 p-4"
                >
                  {result}
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </main>
      <Toaster />
    </>
  );
}
