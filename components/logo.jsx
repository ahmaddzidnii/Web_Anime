import { Poppins } from "next/font/google";
import Image from "next/image";

import { cn } from "@/lib/utils";

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
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
      <p className={cn("font-semibold")}>ahmadzidni.site</p>
    </div>
  );
};
