import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const HomePageLayout = ({ children }) => {
  return (
    <div className="relative h-auto">
      <Navbar />
      <main className="container-custom  h-full">{children}</main>
      <Footer />
    </div>
  );
};

export default HomePageLayout;
