/**
 * Generates pagination based on the current page, total pages, and maximum pages to show.
 *
 * @param {number} currentPage - The current page number.
 * @param {number} totalPages - The total number of pages available.
 * @param {number} maxPagesToShow - The maximum number of pages to display.
 * @return {array} An array of page numbers for pagination.
 */

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
