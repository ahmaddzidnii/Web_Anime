import { getAnimeAnak } from "@/services/api";
import CardListAnime from "../_components/cardListAnime";
import Halaman from "@/components/Halaman";

const Page = async ({ searchParams }) => {
  let { page } = searchParams;
  if (parseInt(page) < 1 || isNaN(page)) {
    page = 1;
  }
  const animeAnak = await getAnimeAnak(24, page);
  const { data, pagination } = animeAnak;
  return (
    <div className="px-3 sm:px-4 md:px-5 lg:px-10">
      <CardListAnime api={data} />
      <div className="my-10">
        <Halaman currentPage={pagination?.current_page} lastVisiblePage={pagination?.last_visible_page} />
      </div>
    </div>
  );
};

export default Page;
