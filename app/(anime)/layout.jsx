import { Footer } from "@/app/(root)/_components/footer";
import { Navbar } from "@/app/(root)/_components/navbar";

const HomePageLayout = ({ children }) => {
  return (
    <div className="h-auto">
      <Navbar />
      <main className="h-full pt-[120px] container">{children}</main>
      <Footer />
    </div>
  );
};

export default HomePageLayout;
