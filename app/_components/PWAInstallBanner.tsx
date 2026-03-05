'use client';

import React, { useEffect, useState, useSyncExternalStore } from 'react';
import { X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const emptySubscribe = () => () => {};

function getIsStandalone() {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as Navigator & { standalone?: boolean }).standalone ||
    document.referrer.includes('android-app://')
  );
}

const PWAInstallBanner = () => {
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [dismissed, setDismissed] = useState(false);
  const isStandalone = useSyncExternalStore(
    emptySubscribe,
    getIsStandalone,
    () => true
  );

  useEffect(() => {
    localStorage.removeItem('pwaBannerDismissed');

    const handleInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleInstallPrompt);
    window.addEventListener('appinstalled', () => setDismissed(true));

    return () => {
      window.removeEventListener('beforeinstallprompt', handleInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) return;

    try {
      await installPrompt.prompt();
      const result = await installPrompt.userChoice;
      if (result.outcome === 'accepted') {
        setDismissed(true);
        setInstallPrompt(null);
      }
    } catch (error) {
      console.error('Installation failed:', error);
    }
  };

  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem('pwaBannerDismissed', 'true');
  };

  if (isStandalone || dismissed) return null;

  return (
    <div className="bg-background fixed right-0 bottom-0 left-0 z-50 border-t p-4 pb-36 shadow-lg md:pb-0">
      <div className="container mx-auto flex max-w-5xl items-center justify-around py-6">
        <div className="mr-4 flex-1">
          <h3 className="text-lg font-semibold">Install VogueLens AI</h3>
          <p className="text-muted-foreground text-sm">
            Get quick access to your AI fashion stylist with our app-like
            experience
          </p>
          <ul className="text-muted-foreground mt-2 text-sm">
            <li>✨ Faster loading times</li>
            <li>📱 Works offline</li>
            <li>🔄 Regular style updates</li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <Button
            onClick={handleInstall}
            className="text-secondary hover:bg-secondary-hover flex items-center gap-2"
            disabled={!installPrompt}
          >
            <Download className="h-4 w-4" />
            Install App
          </Button>
          <button
            onClick={handleDismiss}
            className="hover:bg-accent rounded-full p-2"
            aria-label="Dismiss banner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallBanner;
