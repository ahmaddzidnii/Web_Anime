import Image from "next/image";

import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import { DialogSearch } from "./dialog-search";

export const Navbar = () => {
  return (
    <header className="max-w-screen z-50 bg-background dark:bg-[#1f1f1f] sticky top-0  w-full p-6 border-b shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:supports-[backdrop-filter]:bg-[#1f1f1f]/60">
      <nav className="container flex items-center justify-between">
        <a href="/anime">
          <div className="flex  items-center gap-x-2">
            <Image
              priority
              className="dark:hidden"
              src="/logo.svg"
              height="40"
              width="40"
              alt="logo"
            />
            <Image
              priority
              className="hidden dark:block"
              src="/logo-dark.svg"
              height="40"
              width="40"
              alt="logo"
            />
            <p className={cn("font-semibold hidden lg:block")}>
              ahmadzidni.site
            </p>
          </div>
        </a>
        <div className="flex items-center gap-x-4">
          <DialogSearch />
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};
