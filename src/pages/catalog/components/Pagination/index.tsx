import { UsePaginationReturn } from "../../../../hooks/UsePagination/type";

type Props = {
  pagination: UsePaginationReturn;
};

const Pagination = ({ pagination }: Props) => {
  const left = pagination.page === 1;
  const right = pagination.page === pagination.totalPages;

  return (
    <div className="catalog-main__pagination">
      <button
        onClick={() => pagination.prevPage()}
        className={
          left
            ? "catalog-main__pagination-btn catalog-main__pagination-btn--prev"
            : "catalog-main__pagination-btn catalog-main__pagination-btn--prev catalog-main__pagination-btn--active"
        }
        disabled={left}
      >
        <svg
          width="14"
          height="9"
          viewBox="0 0 14 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13 0.8L7.27692 7L1.46154 0.8" strokeWidth="2" />
        </svg>
        <span>Предыдущая</span>
      </button>

      <div className="catalog-main__links">
        {[...new Array(pagination.totalPages)].map((_, index) => (
          <button
            key={index + 1}
            className={
              pagination.page === index + 1
                ? "catalog-main__link catalog-main__link--active"
                : "catalog-main__link"
            }
            onClick={() => pagination.setPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <button
        onClick={() => pagination.nextPage()}
        className={
          !right
            ? "catalog-main__pagination-btn catalog-main__pagination-btn--active"
            : "catalog-main__pagination-btn"
        }
        disabled={right}
      >
        <span>Следующая</span>
        <svg
          width="14"
          height="9"
          viewBox="0 0 14 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13 0.8L7.27692 7L1.46154 0.8" strokeWidth="2" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;