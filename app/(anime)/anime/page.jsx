import { PopularAnime } from "./_components/anime-popular";
import { AnimeAnak } from "./_components/anime-anak";
import { AnimeAll } from "./_components/anime-all";

export const metadata = {
  title: "Anime",
};

const AnimePage = () => {
  return (
    <div className="min-h-screen w-full pt-5">
      <PopularAnime />
      <AnimeAnak />
      <AnimeAll />
    </div>
  );
};

export default AnimePage;
