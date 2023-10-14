import Navbar from "@/app/(root)/_components/Navbar";
import { getAnimeAnak, getAnimePopular } from "@/services/api";
import CardListAnime from "./_components/cardListAnime";
import HeadingAnime from "./_components/headingAnime";
import Footer from "@/app/(root)/_components/Footer";
import HeroSectionAnime from "./_components/HeroSectionAnime";

export const metadata = {
  title: "List Anime",
};

const Page = async () => {
  const animePopular = await getAnimePopular(8);
  const animeAnak = await getAnimeAnak();
  return (
    <>
      <div className="px-5">
        <HeroSectionAnime />
        {/* Paling Popular */}
        <section>
          <HeadingAnime title="Paling Popular" href="/top" />
          <CardListAnime api={animePopular} />
        </section>
        {/* Paling Popular */}
        <section className="mt-5">
          <HeadingAnime title="Anak Anak" href="/children" />
          <CardListAnime api={animeAnak} />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Page;
