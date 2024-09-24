"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import type { ComponentProps } from "react";
import { Button } from "./ui/button";

export const ThemeToggle = (props: ComponentProps<typeof Button>) => {
  const { setTheme, resolvedTheme } = useTheme();

  const toggledTheme = resolvedTheme === "light" ? "dark" : "light";

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(toggledTheme)}
      {...props}
    >
      <Sun className="size-4 dark:hidden" />
      <Moon className="absolute hidden size-4 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
