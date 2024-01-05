import { getAnimeTop } from "@/services/anime.service";
import { PaginationCustom } from "@/components/pagination";
import { CardListAnime } from "@/components/card-list-anime";

const TopPage = async ({ searchParams }) => {
  let { page } = searchParams;
  if (parseInt(page) < 1 || isNaN(page) || !page) {
    page = 1;
  }
  const animePopular = await getAnimeTop({
    resource: "/top/anime",
    limit: 24,
    query: `&page=${page}`,
  });

  const { data, pagination } = animePopular;
  return (
    <div className="min-h-screen">
      <CardListAnime data={data} />
      <div className="my-10">
        <PaginationCustom
          currentPage={page}
          maxPagesToShow={5}
          totalPages={pagination.last_visible_page}
        />
      </div>
    </div>
  );
};

export default TopPage;
