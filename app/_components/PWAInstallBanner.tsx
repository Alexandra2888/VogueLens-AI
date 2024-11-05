'use client';

import React, { useEffect, useState } from 'react';
import { X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const PWAInstallBanner = () => {
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Reset localStorage to allow banner to show again
    localStorage.removeItem('pwaBannerDismissed');

    const handleInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
      setIsVisible(true);
    };

    // Check if running as standalone
    const checkStandalone = () => {
      const isStandalone =
        window.matchMedia('(display-mode: standalone)').matches ||
        (window.navigator as any).standalone ||
        document.referrer.includes('android-app://');

      setIsVisible(!isStandalone);
    };

    // Add listeners
    window.addEventListener('beforeinstallprompt', handleInstallPrompt);
    window.addEventListener('appinstalled', () => setIsVisible(false));

    // Initial check
    checkStandalone();

    // Cleanup
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
        setIsVisible(false);
        setInstallPrompt(null);
      }
    } catch (error) {
      console.error('Installation failed:', error);
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('pwaBannerDismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="mr-4 flex-1">
          <h3 className="text-lg font-semibold">Install VogueLens AI</h3>
          <p className="text-sm text-muted-foreground">
            Get quick access to your AI fashion stylist with our app-like
            experience
          </p>
          <ul className="mt-2 text-sm text-muted-foreground">
            <li>✨ Faster loading times</li>
            <li>📱 Works offline</li>
            <li>🔄 Regular style updates</li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <Button
            onClick={handleInstall}
            className="flex items-center gap-2 text-secondary hover:bg-secondary-hover"
            disabled={!installPrompt}
          >
            <Download className="h-4 w-4" />
            Install App
          </Button>
          <button
            onClick={handleDismiss}
            className="rounded-full p-2 hover:bg-accent"
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
