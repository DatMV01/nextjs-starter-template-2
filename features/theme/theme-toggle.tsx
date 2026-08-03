"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useHydrated } from "./hooks/useHydrated";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const hydrated = useHydrated();
  if (!hydrated) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="outline"
      className="cursor-pointer h-12 w-12 p-0"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <div className="relative flex h-full w-full items-center justify-center">
        <Moon
          className={cn(
            "absolute size-6 transition-all duration-300",
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0 pointer-events-none"
          )}
        />

        <Sun
          className={cn(
            "absolute size-6 transition-all duration-300",
            isDark
              ? "rotate-90 scale-0 opacity-0 pointer-events-none"
              : "rotate-0 scale-100 opacity-100"
          )}
        />
      </div>
    </Button>
  );
}
