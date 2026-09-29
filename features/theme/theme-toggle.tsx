'use client';

import { useTheme } from 'next-themes';

import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';

import { useHydrated } from './hooks/useHydrated';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const hydrated = useHydrated();
  if (!hydrated) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <Button
      variant="outline"
      className="size-10 cursor-pointer p-0"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle theme"
    >
      <div className="relative flex h-full w-full items-center justify-center">
        <Moon
          className={cn(
            'absolute size-6 transition-all duration-300',
            isDark
              ? 'scale-100 rotate-0 opacity-100'
              : 'pointer-events-none scale-0 -rotate-90 opacity-0',
          )}
        />

        <Sun
          className={cn(
            'absolute size-6 transition-all duration-300',
            isDark
              ? 'pointer-events-none scale-0 rotate-90 opacity-0'
              : 'scale-100 rotate-0 opacity-100',
          )}
        />
      </div>
    </Button>
  );
}
