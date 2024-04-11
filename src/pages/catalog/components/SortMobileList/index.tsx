import { useAppDispatch } from "../../../../hooks/redux/hooks"
import {
    sortByAlphabeticalOrderCreator,
    sortByPriceValueCreator,
    sortByRatingValueCreator
} from "../../../../redux/filter/filterReducer"
import { SortByAscendingAndDescendingAndDefault } from "../../../../redux/filter/filterTypes"

const SortMobileList = ({ className, onOpen }: { className: string, onOpen: () => void }) => {

    const dispatch = useAppDispatch()

    const sortByPrice = (sort: SortByAscendingAndDescendingAndDefault) => {
        dispatch(sortByPriceValueCreator(sort))
        onOpen()
    }
    const sortByRating = (sort: SortByAscendingAndDescendingAndDefault) => {
        dispatch(sortByRatingValueCreator(sort))
        onOpen()
    }

    const sortByAlphabeticalOrder = (sort: SortByAscendingAndDescendingAndDefault) => {
        dispatch(sortByAlphabeticalOrderCreator(sort))
        onOpen()
    }

    const setDefaultSort = () => {
        dispatch(sortByPriceValueCreator('default'))
        dispatch(sortByRatingValueCreator('default'))
        dispatch(sortByAlphabeticalOrderCreator('default'))
        onOpen()
    }

    return (
        <ul className={className}>
            <li onClick={setDefaultSort} className="mobile-list__item">По умолчанию</li>
            <li onClick={() => sortByAlphabeticalOrder("des")} className="mobile-list__item">Название (А - Я)</li>
            <li onClick={() => sortByAlphabeticalOrder("asc")} className="mobile-list__item">Название (Я - А)</li>
            <li
                onClick={() => sortByPrice("asc")}
                className="mobile-list__item"
            >
                Цена (низкая &#62; высокая)
            </li>
            <li
                onClick={() => sortByPrice("des")}
                className="mobile-list__item"
            >
                Цена (высокая &#62; низкая)
            </li>
            <li onClick={() => sortByRating('des')} className="mobile-list__item">Рейтинг (начиная с высокого)</li>
            <li onClick={() => sortByRating('asc')} className="mobile-list__item">Рейтинг (начиная с низкого)</li>
            <li onClick={() => onOpen()} className="mobile-list__item">Модель (А - Я)</li>
            <li onClick={() => onOpen()} className="mobile-list__item">Модель (Я - А)</li>
        </ul>
    )
}

export default SortMobileList
