"use client";
import { useCallback } from "react";
import { useSearchParams } from "next/navigation";

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

  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationPrevious
            href={`?${createQueryString("page", parseInt(currentPage) - 1)}`}
          />
        )}

        {listPageToShow.map((idxPage, idx) => {
          if (idxPage === "...") {
            return <PaginationEllipsis key={idx} />;
          }
          return (
            <PaginationLink
              key={idx}
              href={`?${createQueryString("page", idxPage)}`}
              isActive={currentPage == idxPage}
            >
              {idxPage}
            </PaginationLink>
          );
        })}
        {currentPage < totalPages ? (
          <PaginationNext
            href={`?${createQueryString("page", parseInt(currentPage) + 1)}`}
          />
        ) : null}
      </PaginationContent>
    </Pagination>
  );
};
