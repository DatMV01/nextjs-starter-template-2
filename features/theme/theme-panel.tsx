'use client';

import { useTheme } from 'next-themes';

import { MoonStar, Sparkles, SunMedium } from 'lucide-react';

import { Button } from '@/components/ui/button';

import ThemeToggle from './theme-toggle';

export default function ThemePanel() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="m-4 flex w-200 flex-col gap-4 rounded-sm border p-4">
      <div className="flex items-center justify-center gap-4">
        <div className="rounded-full border border-zinc-200 bg-zinc-100 p-2 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
          <Sparkles className="h-4 w-4" />
        </div>
        <div>
          <p className="text-sm font-medium tracking-[0.24em] text-zinc-500 uppercase dark:text-zinc-400">
            Theme switcher
          </p>
          <h1 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
            Dark and light mode, wired up cleanly.
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 rounded-sm border p-4">
        <Button
          variant="default"
          className="gap-2"
          onClick={() => setTheme('light')}
        >
          <SunMedium className="h-4 w-4" />
          Light mode
        </Button>
        <Button
          variant="outline"
          className="gap-2"
          onClick={() => setTheme('dark')}
        >
          <MoonStar className="h-4 w-4" />
          Dark mode
        </Button>

        <ThemeToggle />
      </div>
    </div>
  );
}
