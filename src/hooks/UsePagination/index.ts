import { useState } from "react";

export interface UsePaginationProps {
  contentPerPage: number;
  count: number;
}

export interface UsePaginationReturn {
  page: number;
  totalPages: number;
  firstContentIndex: number;
  lastContentIndex: number;
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;
}

 const usePagination = ({
  contentPerPage,
  count,
}: UsePaginationProps): UsePaginationReturn => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(count / contentPerPage);

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