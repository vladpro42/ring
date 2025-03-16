import { useState } from "react";
import { UsePaginationProps, UsePaginationReturn } from "./type";



const usePagination = ({
  contentPerPage,
  count,
}: UsePaginationProps): UsePaginationReturn => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(count / (contentPerPage || 1));

  const lastContentIndex = page * contentPerPage;
  const firstContentIndex = lastContentIndex - contentPerPage;

  const nextPage = () => {
    setPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const prevPage = () => {
    setPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return {
    page,
    totalPages,
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    setPage,
  };
};

export default usePagination;