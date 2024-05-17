import { useState } from "react"
import { useAppDispatch } from "../../../../hooks/redux/hooks"
import {
    sortByAlphabeticalOrderCreator,
    sortByPriceValueCreator,
    sortByRatingValueCreator
} from "../../../../redux/filter/filterActions"
import { SortByAscendingAndDescendingAndDefault } from "../../../../redux/filter/filterTypes"

type Props = {
    toggleFilter: () => void,
    className: string,
    onOpen: () => void
}

const SortMobileList = ({ className, onOpen, toggleFilter }: Props) => {

    const [select, setSelect] = useState('По умолчанию')


    const dispatch = useAppDispatch()

    const sortByPrice = (e: React.MouseEvent, sort: SortByAscendingAndDescendingAndDefault) => {

        // Сбросить другие сортировки
        dispatch(sortByRatingValueCreator('default'))
        dispatch(sortByAlphabeticalOrderCreator('default'))

        // Текущая сортировка
        dispatch(sortByPriceValueCreator(sort))

        setSelect(e.currentTarget.getAttribute('data-value'))
        onOpen()
    }
    const sortByRating = (e: React.MouseEvent, sort: SortByAscendingAndDescendingAndDefault) => {

        // Сбросить другие сортировки
        dispatch(sortByAlphabeticalOrderCreator('default'))
        dispatch(sortByPriceValueCreator('default'))

        // Текущая сортировка
        dispatch(sortByRatingValueCreator(sort))

        setSelect(e.currentTarget.getAttribute('data-value'))
        onOpen()
    }

    const sortByAlphabeticalOrder = (e: React.MouseEvent, sort: SortByAscendingAndDescendingAndDefault) => {

        // Сбросить другие сортировки
        dispatch(sortByRatingValueCreator('default'))
        dispatch(sortByPriceValueCreator('default'))

        // Текущая сортировка
        dispatch(sortByAlphabeticalOrderCreator(sort))

        setSelect(e.currentTarget.getAttribute('data-value'))
        onOpen()
    }

    const setDefaultSort = (e: React.MouseEvent) => {

        // Сбросить все сортировки
        dispatch(sortByPriceValueCreator('default'))
        dispatch(sortByRatingValueCreator('default'))
        dispatch(sortByAlphabeticalOrderCreator('default'))

        setSelect(e.currentTarget.getAttribute('data-value'))
        onOpen()
    }


    return (
        <>
            <div className="sort__mobile">
                <div onClick={onOpen} className="sort__mobile-select">
                    <svg className='sort__mobile-acion' width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.31641 4.02423H6.94963V10.9758H5.31641L7.70254 15L10.0887 10.9758H8.45548V4.02423H10.0887L7.70254 0L5.31641 4.02423Z" fill="black" />
                        <path d="M13.7837 0.789473H29.9999V2.76316H13.7837V0.789473Z" fill="black" />
                        <path d="M13.7837 6.31579H25.9459V8.28947H13.7837V6.31579Z" fill="black" />
                        <path d="M13.7837 11.8421H21.8918V13.8158H13.7837V11.8421Z" fill="black" />
                    </svg>
                    <p className="sort__mobile-text">{select}</p>
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
            <ul className={className}>
                <li
                    data-value='По умолчанию'
                    onClick={setDefaultSort} className="mobile-list__item">По умолчанию</li>
                <li
                    data-value='Название (А - Я)'
                    onClick={(e) => sortByAlphabeticalOrder(e, "des")} className="mobile-list__item">Название (А - Я)</li>
                <li
                    data-value='Название (Я - А)'
                    onClick={(e) => sortByAlphabeticalOrder(e, "asc")} className="mobile-list__item">Название (Я - А)</li>
                <li
                    data-value='Цена (низкая &#62; высокая)'

                    onClick={(e) => sortByPrice(e, "asc")}
                    className="mobile-list__item"
                >
                    Цена (низкая &#62; высокая)
                </li>
                <li
                    data-value='Цена (высокая &#62; низкая)'

                    onClick={(e) => sortByPrice(e, "des")}
                    className="mobile-list__item"
                >
                    Цена (высокая &#62; низкая)
                </li>
                <li
                    data-value='Рейтинг (начиная с высокого)'
                    onClick={(e) => sortByRating(e, 'des')} className="mobile-list__item">Рейтинг (начиная с высокого)</li>
                <li
                    data-value='Рейтинг (начиная с низкого)'
                    onClick={(e) => sortByRating(e, 'asc')} className="mobile-list__item">Рейтинг (начиная с низкого)</li>
                <li
                    data-value='Модель (А - Я)'
                    style={{ color: 'gray' }}
                    onClick={() => { }} className="mobile-list__item">Модель (А - Я)</li>
                <li
                    data-value='Модель (Я - А)'
                    style={{ color: 'gray' }}
                    onClick={() => { }} className="mobile-list__item">Модель (Я - А)</li>
            </ul>
        </>
    )
}

export default SortMobileList
