import { getAnimeAnak } from "@/services/api";
import CardListAnime from "../_components/cardListAnime";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { generatePagination } from "@/services/generate-pagination";
import { PaginationCustom } from "@/components/pagination";

const Page = async ({ searchParams }) => {
  let { page } = searchParams;
  if (parseInt(page) < 1 || isNaN(page) || !page) {
    page = 1;
  }
  const animeAnak = await getAnimeAnak(24, page);
  const { data, pagination } = animeAnak;

  // const listPageToShow = generatePagination({
  //   currentPage: parseInt(page),
  //   maxPagesToShow: 5,
  //   totalPages: pagination.last_visible_page,
  // });

  return (
    <div className="px-3 sm:px-4 md:px-5 lg:px-10">
      <CardListAnime api={data} />
      <div className="my-10">
        <PaginationCustom
          currentPage={page}
          maxPagesToShow={5}
          totalPages={pagination.last_visible_page}
        />
        {/* <Pagination>
          <PaginationContent>
            {page > 1 && (
              <PaginationPrevious href={`?page=${parseInt(page) - 1}`} />
            )}

            {listPageToShow.map((idxPage, idx) => {
              if (idxPage === "...") {
                return <PaginationEllipsis key={idx} />;
              }
              return (
                <PaginationLink
                  key={idx}
                  href={`?page=${idxPage}`}
                  isActive={page == idxPage}
                >
                  {idxPage}
                </PaginationLink>
              );
            })}
            <PaginationNext href={`?page=${parseInt(page) + 1}`} />
          </PaginationContent>
        </Pagination> */}
      </div>
    </div>
  );
};

export default Page;
