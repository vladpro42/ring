import { UsePaginationReturn } from '../../hooks/UsePagination/type.ts'

type Props = {
    pagination: UsePaginationReturn,
}

const Pagination = ({ pagination }: Props) => {


    const left = pagination.page === 1
    const right = pagination.page === pagination.totalPages


    return (
        <div className="catalog-main__pagination">
            <button onClick={() => pagination.prevPage()}
                className={left ?
                    'catalog-main__padination-btn  catalog-main__padination-btn--prev' :
                    'catalog-main__padination-btn  catalog-main__padination-btn--prev catalog-main__padination-btn--active'}
            >
                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 0.8L7.27692 7L1.46154 0.8" strokeWidth="2" />
                </svg>
                <span>Предыдущая</span>
            </button>

            <div className="catalog-main__links">

                {
                    [...new Array(pagination.totalPages)].map((_, index) => <button
                        onClick={() => pagination.handleClickPagination(index + 1)}
                        key={index}
                        className={pagination.page === index + 1 ? "catalog-main__link catalog-main__link--active" : "catalog-main__link"}
                    >
                        {index + 1}
                    </button>)
                }
                {/*   <button
                                    className={pagination.page === pagination.totalPages ? "catalog-main__link catalog-main__link--active" : "catalog-main__link"}
                                    onClick={() => pagination.setPage(pagination.totalPages)}
                                >
                                    {pagination.totalPages}
                                </button> */}
            </div>

            <button onClick={() => pagination.nextPage()}
                className={!right ? 'catalog-main__padination-btn catalog-main__padination-btn--active' : 'catalog-main__padination-btn'}>
                <span>Следующая</span>
                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 0.8L7.27692 7L1.46154 0.8" strokeWidth="2" />
                </svg>
            </button>
        </div>
    )
}

export default Pagination
