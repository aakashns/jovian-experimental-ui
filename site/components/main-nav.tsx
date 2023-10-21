"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { useTheme } from "next-themes";

export function MainNav() {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const Logo = resolvedTheme === "dark" ? Icons.darkLogo : Icons.logo;

  return (
    <div className="hidden md:flex flex-1 mr-2">
      <Link href="/" className="mr-6 flex-1 items-center space-x-2">
        <Logo className="h-7 w-auto" />
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Home
        </Link>
      </nav>
    </div>
  );
}
