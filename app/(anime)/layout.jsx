import Navbar from "@/app/(root)/_components/Navbar";

const HomePageLayout = ({ children }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full pt-[96px]">{children}</main>
    </div>
  );
};

export default HomePageLayout;
