import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import { DialogSearch } from "./dialog-search";
import { ProfileUser } from "@/components/auth/profile-user";
import { Suspense } from "react";

export const Navbar = () => {
  return (
    <header className="max-w-screen z-50 bg-background dark:bg-[#1f1f1f] sticky top-0  w-full p-6 border-b shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:supports-[backdrop-filter]:bg-[#1f1f1f]/60">
      <div className=" container-custom flex h-10  max-w-screen-2xl items-center">
        <a href="/anime">
          <div className="flex items-center">
            <Image
              className="dark:hidden"
              src="/logo.svg"
              height="40"
              width="40"
              alt="logo"
            />
            <Image
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
        <div className="ml-4 md:ml-0 flex flex-1 items-center justify-between gap-x-5 md:justify-end">
          <DialogSearch />
          <nav className="flex items-center gap-x-3">
            <Link href="https://github.com/ahmaddzidnii">
              <FaGithub className="h-[1.2rem] w-[1.2rem] md:w-6 md:h-6" />
            </Link>
            <ModeToggle />
            <ProfileUser />
          </nav>
        </div>
      </div>
    </header>
  );
};
