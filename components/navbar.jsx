"use client";

import Image from "next/image";

import { useScrollTop } from "@/hooks/use-scroll-navbar";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import { Form } from "@/components/form";

export const Navbar = () => {
  const scrolled = useScrollTop();
  return (
    <nav
      className={cn(
        "z-50 bg-background dark:bg-[#1f1f1f] fixed top-0  w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <div className="container flex items-center justify-between">
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

        <Form />
        <ModeToggle />
      </div>
    </nav>
  );
};
