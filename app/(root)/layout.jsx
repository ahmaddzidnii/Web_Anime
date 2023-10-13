import Navbar from "./_components/Navbar";

const HomePageLayout = ({ children }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
};

export default HomePageLayout;
