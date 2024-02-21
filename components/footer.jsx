import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export const Footer = () => {
  return (
    <footer className=" z-50 mt-5 w-full border bg-background p-6 dark:bg-[#1f1f1f]">
      <div className="container-custom flex items-center justify-center md:justify-between">
        <Logo />
        <div className=" text-center text-muted-foreground">
          made with ❤️ by ahmaddzidnii
        </div>
      </div>
    </footer>
  );
};
