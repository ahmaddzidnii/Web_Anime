import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { generatePagination } from "@/services/generate-pagination";

export const PaginationCustom = ({
  currentPage,
  maxPagesToShow,
  totalPages,
}) => {
  const listPageToShow = generatePagination({
    currentPage: parseInt(currentPage),
    maxPagesToShow,
    totalPages,
  });
  return (
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationPrevious href={`?page=${parseInt(currentPage) - 1}`} />
        )}

        {listPageToShow.map((idxPage, idx) => {
          if (idxPage === "...") {
            return <PaginationEllipsis key={idx} />;
          }
          return (
            <PaginationLink
              key={idx}
              href={`?page=${idxPage}`}
              isActive={currentPage == idxPage}
            >
              {idxPage}
            </PaginationLink>
          );
        })}
        {currentPage < totalPages ? (
          <PaginationNext href={`?page=${parseInt(currentPage) + 1}`} />
        ) : null}
      </PaginationContent>
    </Pagination>
  );
};
