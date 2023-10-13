"use client";

import { useScrollTop } from "@/hooks/use-scroll-navbar";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {
  const scrolled = useScrollTop();
  return (
    <div className={cn("z-50 bg-background dark:bg-[#1f1f1f] fixed top-0 flex items-center w-full p-6", scrolled && "border-b shadow-sm")}>
      <div className="flex items-center gap-x-2">
        <Image className="dark:hidden" src="/logo.svg" height="40" width="40" alt="logo" />
        <Image className="hidden dark:block" src="/logo-dark.svg" height="40" width="40" alt="logo" />
        <p className={cn("font-semibold")}>ahmadzidni.site</p>
      </div>
      <div className="md:ml-auto justify-end w-full flex items-center gap-x-2">
        <ModeToggle />
      </div>
      {/* <div className=" w-full justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost">Privacy Policy</Button>
        <Button variant="ghost">Terms & Conditions</Button>
      </div> */}
    </div>
  );
};

export default Navbar;
