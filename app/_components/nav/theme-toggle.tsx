'use client';

import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useSyncExternalStore } from 'react';

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) return null;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="text-foreground relative h-12 w-12"
      data-testid="theme-toggle"
    >
      {theme === 'dark' ? (
        <Sun
          className="h-8 w-8 transition-transform duration-200"
          data-testid="sun-icon"
        />
      ) : (
        <Moon
          className="h-8 w-8 transition-transform duration-200"
          data-testid="moon-icon"
        />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
