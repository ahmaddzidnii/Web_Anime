import Navbar from "@/app/(root)/_components/Navbar";
import { getAnimePopular } from "@/services/api";
import CardListAnime from "./_components/cardListAnime";

export const metadata = {
  title: "List Anime",
};

const Page = async () => {
  const animePopular = await getAnimePopular(8);
  return (
    <>
      <div>
        <CardListAnime api={animePopular} />
      </div>
    </>
  );
};

export default Page;
