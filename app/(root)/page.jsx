import Heading from "./_components/Heading";
import Heroes from "./_components/Heroes";

export const metadata = {
  title: "Beranda",
};
export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex h-full flex-col">
        <div className="flex flex-1 flex-col items-center justify-center gap-y-8 px-6 pb-10 text-center md:justify-start">
          <Heading />
          <Heroes />
        </div>
      </div>
    </main>
  );
}
