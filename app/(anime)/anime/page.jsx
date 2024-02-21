import { PopularAnime } from "./_components/anime-popular";
import { AnimeAnak } from "./_components/anime-anak";

export const metadata = {
  title: "Anime",
};

const AnimePage = () => {
  return (
    <div className="min-h-screen w-full pt-5">
      <PopularAnime />
      <AnimeAnak />
    </div>
  );
};

export default AnimePage;
