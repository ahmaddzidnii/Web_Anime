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
import { Button } from "@/components/ui/button";
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
    [searchParams],
  );
  return (
    <div className={totalPages == 1 ? "hidden" : ""}>
      <PaginationMobile
        currentPage={currentPage}
        totalPages={totalPages}
        createQueryString={createQueryString}
      />
      <Pagination className="hidden md:flex">
        <PaginationContent>
          {currentPage > 1 && (
            <PaginationPrevious
              className="text-sm"
              href={`?${createQueryString("page", parseInt(currentPage) - 1)}`}
            />
          )}

          {listPageToShow.map((idxPage, idx) => {
            if (idxPage === "...") {
              return <PaginationEllipsis className="text-sm" key={idx} />;
            }
            return (
              <PaginationLink
                className="text-sm"
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
              className="text-sm"
              href={`?${createQueryString("page", parseInt(currentPage) + 1)}`}
            />
          ) : null}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

const PaginationMobile = ({ currentPage, totalPages, createQueryString }) => {
  return (
    <Pagination className="md:hidden">
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationPrevious
            className="text-sm"
            href={`?${createQueryString("page", parseInt(currentPage) - 1)}`}
          />
        )}
        <Button disabled variant="ghost" className="text-sm">
          {currentPage}
        </Button>
        {currentPage < totalPages ? (
          <PaginationNext
            className="text-sm"
            href={`?${createQueryString("page", parseInt(currentPage) + 1)}`}
          />
        ) : null}
      </PaginationContent>
    </Pagination>
  );
};
