"use client";

import Link from "next/link";
import Image from "next/image";

import { useScrollTop } from "@/hooks/use-scroll-navbar";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import Form from "@/app/(anime)/anime/_components/Form";

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
        <Link href="/anime">
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
        </Link>

        <Form />
        <ModeToggle />
      </div>
    </nav>
  );
};
