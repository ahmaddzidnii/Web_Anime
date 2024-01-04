import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const HomePageLayout = ({ children }) => {
  return (
    <div className="h-auto">
      <Navbar />
      <main className="h-full pt-36">{children}</main>
      <Footer />
    </div>
  );
};

export default HomePageLayout;
