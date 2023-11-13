import { getAnimeAnak, getAnimePopular } from "@/services/api";
import HeadingAnime from "./_components/headingAnime";
import Footer from "@/app/(root)/_components/Footer";
import { AnakAnak, PalingPopular } from "./_components/Kategori";

export const metadata = {
  title: "List Anime",
};

const Page = async () => {
  const animePopular = await getAnimePopular(10);
  const animeAnak = await getAnimeAnak(10);

  return (
    <>
      <div className="px-3 sm:px-4 md:px-5 lg:px-10">
        {/* Paling Popular */}
        <section>
          <HeadingAnime title="Paling Popular" href="/anime/top" />

          <PalingPopular data={animePopular} />
        </section>
        {/* Anak Anak */}
        <section className="mt-5">
          <HeadingAnime title="Anak Anak" href="/anime/children" />
          <AnakAnak data={animeAnak?.data} />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Page;
