export interface UsePaginationProps {
    contentPerPage: number,
    count: number,
}
export interface UsePaginationReturn {
    page: number;
    totalPages: number;
    firstContentIndex: number;
    lastContentIndex: number;
    handleClickPagination: (num: number) => void;
    nextPage: () => void;
    prevPage: () => void;
    setPage: (page: number) => void;
}
export type UsePagination = (arg0: UsePaginationProps) => (UsePaginationReturn);
