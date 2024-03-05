
const Pagination = () => {
    return (
        <div className="catalog-main__pagination">
            <button className='catalog-main__padination-btn catalog-main__padination-btn--prev'>
                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 0.8L7.27692 7L1.46154 0.8" strokeWidth="2" />
                </svg>
                <span>Предыдущая</span>
            </button>
            <div className="catalog-main__links">
                <a className="catalog-main__link catalog-main__link--active">1</a>
                <a className="catalog-main__link">2</a>
                <a className="catalog-main__link">3</a>
                <a className="catalog-main__link">4</a>
                <a className="catalog-main__link">20</a>
            </div>
            <button className='catalog-main__padination-btn'>
                <span>Следующая</span>
                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 0.8L7.27692 7L1.46154 0.8" strokeWidth="2" />
                </svg>
            </button>
        </div>
    )
}

export default Pagination
