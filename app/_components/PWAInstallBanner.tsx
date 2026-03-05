'use client';

import React, { useEffect, useState, useSyncExternalStore } from 'react';
import { X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

function subscribeToDisplayMode(callback: () => void) {
  const mediaQuery = window.matchMedia('(display-mode: standalone)');
  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
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
  const wasPreviouslyDismissed = useSyncExternalStore(
    emptySubscribe,
    () => localStorage.getItem('pwaBannerDismissed') === 'true',
    () => false
  );
  const isStandalone = useSyncExternalStore(
    subscribeToDisplayMode,
    getIsStandalone,
    () => true
  );

  useEffect(() => {
    const handleInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => setDismissed(true);

    window.addEventListener('beforeinstallprompt', handleInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
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

  const visible = !isStandalone && !dismissed && !wasPreviouslyDismissed;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0, 1] }}
          className="border-border/50 bg-background/80 fixed right-4 bottom-4 left-4 z-50 mx-auto max-w-lg overflow-hidden rounded-2xl border p-5 shadow-2xl shadow-black/10 backdrop-blur-2xl md:right-6 md:bottom-6 md:left-auto dark:shadow-black/30"
        >
          <div className="flex items-start gap-4">
            <div className="bg-brand-red/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl">
              <Download className="text-brand-red h-5 w-5" />
            </div>
            <div className="flex-1">
              <h3 className="text-foreground text-sm font-semibold">
                Install VogueLens AI
              </h3>
              <p className="text-foreground/50 mt-1 text-xs">
                Get faster loading, offline access, and an app-like experience
              </p>
              <div className="mt-4 flex items-center gap-3">
                <button
                  onClick={handleInstall}
                  className="bg-brand-red shadow-brand-red/20 hover:bg-brand-red-dark rounded-lg px-4 py-2 text-xs font-medium text-white shadow-sm transition-all disabled:opacity-50"
                  disabled={!installPrompt}
                >
                  Install
                </button>
                <button
                  onClick={handleDismiss}
                  className="text-foreground/50 hover:text-foreground rounded-lg px-4 py-2 text-xs font-medium transition-colors"
                >
                  Not now
                </button>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="text-foreground/30 hover:text-foreground flex-shrink-0 rounded-lg p-1 transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PWAInstallBanner;
