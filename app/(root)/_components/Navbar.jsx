"use client";

import { useScrollTop } from "@/hooks/use-scroll-navbar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import Form from "@/app/(anime)/anime/_components/Form";

const Navbar = () => {
  const scrolled = useScrollTop();
  return (
    <div className={cn("z-50 bg-background dark:bg-[#1f1f1f] fixed top-0 flex items-center w-full p-6", scrolled && "border-b shadow-sm")}>
      <Link href="/anime">
        <div className="flex items-center gap-x-2">
          <Image priority className="dark:hidden" src="/logo.svg" height="40" width="40" alt="logo" />
          <Image priority className="hidden dark:block" src="/logo-dark.svg" height="40" width="40" alt="logo" />
          <p className={cn("font-semibold hidden lg:block")}>ahmadzidni.site</p>
        </div>
      </Link>
      <div className="md:ml-auto justify-end w-full flex items-center gap-x-2">
        <Form />
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
