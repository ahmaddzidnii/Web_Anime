import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export const Footer = () => {
  return (
    <footer className=" w-full mt-5 p-6 bg-background dark:bg-[#1f1f1f] z-50">
      <div className="flex justify-center md:justify-between items-center">
        <Logo />
        <div className=" text-center text-muted-foreground">
          made with ❤️ by ahmaddzidnii
        </div>
      </div>
    </footer>
  );
};
