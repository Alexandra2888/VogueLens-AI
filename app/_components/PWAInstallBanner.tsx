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
          className="fixed right-4 bottom-4 left-4 z-50 mx-auto max-w-lg overflow-hidden rounded-2xl border border-border/50 bg-background/80 p-5 shadow-2xl shadow-black/10 backdrop-blur-2xl dark:shadow-black/30 md:right-6 md:bottom-6 md:left-auto"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-red/10">
              <Download className="h-5 w-5 text-brand-red" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-foreground">
                Install VogueLens AI
              </h3>
              <p className="mt-1 text-xs text-foreground/50">
                Get faster loading, offline access, and an app-like experience
              </p>
              <div className="mt-4 flex items-center gap-3">
                <button
                  onClick={handleInstall}
                  className="rounded-lg bg-brand-red px-4 py-2 text-xs font-medium text-white shadow-sm shadow-brand-red/20 transition-all hover:bg-brand-red-dark disabled:opacity-50"
                  disabled={!installPrompt}
                >
                  Install
                </button>
                <button
                  onClick={handleDismiss}
                  className="rounded-lg px-4 py-2 text-xs font-medium text-foreground/50 transition-colors hover:text-foreground"
                >
                  Not now
                </button>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 rounded-lg p-1 text-foreground/30 transition-colors hover:text-foreground"
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
