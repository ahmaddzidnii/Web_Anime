export function generatePagination({
  currentPage,
  totalPages,
  maxPagesToShow,
}) {
  const pages = [];
  const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);

  // Helper function to add page numbers to the array
  const addPage = (pageNumber) => {
    pages.push(pageNumber);
  };

  // Function to add elipsis
  const addElipsis = () => {
    pages.push("...");
  };

  // Display all pages if total pages are less than or equal to maxPagesToShow
  if (totalPages <= maxPagesToShow) {
    for (let i = 1; i <= totalPages; i++) {
      addPage(i);
    }
  } else {
    // Display pages around the current page
    if (currentPage <= halfMaxPagesToShow + 1) {
      for (let i = 1; i <= Math.min(maxPagesToShow, totalPages); i++) {
        addPage(i);
      }
      addElipsis();
      addPage(totalPages);
    } else if (currentPage >= totalPages - halfMaxPagesToShow) {
      addPage(1);
      addElipsis();
      for (let i = totalPages - maxPagesToShow + 1; i <= totalPages; i++) {
        addPage(i);
      }
    } else {
      addPage(1);
      addElipsis();
      for (
        let i = currentPage - halfMaxPagesToShow + 1;
        i <= currentPage + halfMaxPagesToShow - 1;
        i++
      ) {
        addPage(i);
      }
      addElipsis();
      addPage(totalPages);
    }
  }

  return pages;
}
