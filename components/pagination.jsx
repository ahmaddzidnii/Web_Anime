export const Pagination = ({currentPage, }) => {
    return (
        <div className="px-3 sm:px-4 md:px-5 lg:px-10">
        <CardListAnime api={data} />
        <div className="my-10">
          <Pagination>
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
          </Pagination>
        </div>
      </div>
    )
}