type Props = {
    openMobile: () => void,
    toggleFilter: () => void,
}

const SortMobile = ({ openMobile, toggleFilter }: Props) => {
    return (
        <div className="sort__mobile">
            <div onClick={openMobile} className="sort__mobile-select">
                <svg className='sort__mobile-acion' width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.31641 4.02423H6.94963V10.9758H5.31641L7.70254 15L10.0887 10.9758H8.45548V4.02423H10.0887L7.70254 0L5.31641 4.02423Z" fill="black" />
                    <path d="M13.7837 0.789473H29.9999V2.76316H13.7837V0.789473Z" fill="black" />
                    <path d="M13.7837 6.31579H25.9459V8.28947H13.7837V6.31579Z" fill="black" />
                    <path d="M13.7837 11.8421H21.8918V13.8158H13.7837V11.8421Z" fill="black" />
                </svg>
                <p className="sort__mobile-text">рейтинг (начиная с высокого)</p>
                <svg className='sort__mobile-shape' width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    < path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2" />
                </svg>
            </div>
            <div className="sort__mobile-filter">
                <svg className='filter__icon' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 2.25H1.5L7.5 9.345V14.25L10.5 15.75V9.345L16.5 2.25Z" fill="#020F59" />
                </svg>
                <p onClick={toggleFilter} className='filter__text'>Фильтры</p>
            </div>
        </div>
    )
}

export default SortMobile
