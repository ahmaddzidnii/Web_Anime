import { PopularAnime } from "./_components/anime-popular";
import { AnimeAnak } from "./_components/anime-anak";

export const metadata = {
  title: "Anime",
};

const AnimePage = async () => {
  return (
    <div className="w-full">
      <PopularAnime />
      <AnimeAnak />
    </div>
  );
};

export default AnimePage;
