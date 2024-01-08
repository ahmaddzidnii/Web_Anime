import { Suspense } from "react";

import { getAnimeAnak } from "@/services/anime.service";
import { PaginationCustom } from "@/components/pagination";
import { CardListAnime } from "@/components/card-list-anime";

export const metadata = {
  title: "Anime for Children",
};
const AnimeChildrenPage = async ({ searchParams }) => {
  let { page } = searchParams;
  if (parseInt(page) < 1 || isNaN(page) || !page) {
    page = 1;
  }
  const animeAnak = await getAnimeAnak(24, page);
  const { data, pagination } = animeAnak;

  return (
    <>
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
    </>
  );
};

export default AnimeChildrenPage;
