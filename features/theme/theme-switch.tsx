"use client";

import { Moon, Sun } from "lucide-react";
import { Switch } from "@base-ui/react/switch";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useHydrated } from "./hooks/useHydrated";

const ThemeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const hydrated = useHydrated();
  if (!hydrated) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <Switch.Root
      checked={isDark}
      onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      className={`
        relative flex h-8 w-16 cursor-pointer items-center rounded-full
        transition-colors duration-300
        ${isDark ? "bg-zinc-700" : "bg-zinc-300"}
      `}
    >
      <Switch.Thumb
        className={`
          flex h-8 w-8 items-center justify-center rounded-full
          bg-white text-zinc-900 shadow transition-transform duration-300
          data-checked:translate-x-8
          data-unchecked:translate-x-1
        `}
      >
        <div className="relative size-5">
          <Moon
            className={cn(
              "absolute size-5",
              "transition-all duration-300",
              isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0",
            )}
          />

          <Sun
            className={cn(
              "absolute size-5",
              "transition-all duration-300",
              isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100",
            )}
          />
        </div>
      </Switch.Thumb>
    </Switch.Root>
  );
};

export default ThemeSwitch;
