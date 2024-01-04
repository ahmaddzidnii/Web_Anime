import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export const Footer = () => {
  return (
    <footer className=" w-full mt-5 p-6 bg-background dark:bg-[#1f1f1f] z-50">
      <div className="flex items-center container">
        <Logo />
        <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
          <Button variant="ghost">Privacy Policy</Button>
          <Button variant="ghost">Terms & Conditions</Button>
        </div>
      </div>
    </footer>
  );
};
