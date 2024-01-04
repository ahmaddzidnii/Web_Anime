import { Footer } from "./_components/footer";
import Navbar from "./_components/navbar";

const HomePageLayout = ({ children }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full pt-36">{children}</main>
      <Footer />
    </div>
  );
};

export default HomePageLayout;
