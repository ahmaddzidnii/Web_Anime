import { PopularAnime } from "./_components/anime-popular";
import { AnimeAnak } from "./_components/anime-anak";

export const metadata = {
  title: "List Anime",
};

const Page = async () => {
  return (
    <div className="w-full">
      <PopularAnime />
      <AnimeAnak />
    </div>
  );
};

export default Page;
