import { useCallback, useEffect, useState } from "react";
import { UsePagination } from "./type";

const usePagination: UsePagination = ({ contentPerPage, count }) => {
    const [page, setPage] = useState(1);

    useEffect(() => {
        setPage(1)
    }, [count])

    const pageCount = Math.ceil(count / contentPerPage);
    const lastContentIndex = page * contentPerPage;
    const firstContentIndex = lastContentIndex - contentPerPage;

    const changePage = useCallback((direction: boolean) => {
        setPage((state) => {
            // move forward
            if (direction) {
                // if page is the last page, do nothing
                if (state === pageCount) {
                    return state;
                }
                return state + 1;
                // go back
            } else {
                // if page is the first page, do nothing
                if (state === 1) {
                    return state;
                }
                return state - 1;
            }
        });
    }, [pageCount]);

    const setPageSAFE = useCallback((num: number) => {
        // if number is greater than number of pages, set to last page
        if (num > pageCount) {
            setPage(pageCount);
            // if number is less than 1, set page to first page
        } else if (num < 1) {
            setPage(1);
        } else {
            setPage(num);
        }
    }, [pageCount])

    return {
        totalPages: pageCount,
        nextPage: () => changePage(true),
        prevPage: () => changePage(false),
        setPage: setPageSAFE,
        firstContentIndex,
        lastContentIndex,
        page,
    };
};


export default usePagination;