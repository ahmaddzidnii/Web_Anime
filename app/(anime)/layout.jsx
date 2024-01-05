import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Suspense } from "react";

const HomePageLayout = ({ children }) => {
  return (
    <div className="h-auto">
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <main className="h-full pt-[120px] container">{children}</main>
      <Footer />
    </div>
  );
};

export default HomePageLayout;
