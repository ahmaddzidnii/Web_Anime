import Heading from "./_components/Heading";
import Heroes from "./_components/Heroes";

export const metadata = {
  title: "Beranda",
};
export default function Home() {
  return (
    <>
      <div className="h-full flex flex-col">
        <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
          <Heading />
          <Heroes />
        </div>
      </div>
    </>
  );
}
