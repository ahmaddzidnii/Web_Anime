import { Suspense } from "react";

import { getAnimeTop } from "@/services/anime.service";
import { PaginationCustom } from "@/components/pagination";
import { CardListAnime } from "@/components/card-list-anime";

export const metadata = {
  title: "Top Anime",
};

const TopAnimePage = async ({ searchParams }) => {
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
    <div className="min-h-screen pt-5">
      <CardListAnime data={data} />
      <div className="my-10">
        <Suspense fallback={null}>
          <PaginationCustom
            currentPage={page}
            maxPagesToShow={5}
            totalPages={pagination.last_visible_page}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default TopAnimePage;
