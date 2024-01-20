import { PopularAnime } from "./_components/anime-popular";
import { AnimeAnak } from "./_components/anime-anak";

export const metadata = {
  title: "Anime",
};

const AnimePage = () => {
  return (
    <div className="w-full min-h-screen pt-5">
      <PopularAnime />
      <AnimeAnak />
    </div>
  );
};

export default AnimePage;
