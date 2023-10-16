import Navbar from "@/app/(root)/_components/Navbar";
import { Toaster } from "@/components/ui/toaster";

const HomePageLayout = ({ children }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full pt-[120px]">{children}</main>
      <Toaster />
    </div>
  );
};

export default HomePageLayout;
