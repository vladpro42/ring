import { useState } from "react"
import { useAppDispatch } from "../../../../hooks/redux/hooks"
import { filterByPriceCreator } from "../../../../redux/filter/filterActions"
import { FilterByPrice } from "../../../../redux/filter/filterTypes"
import { arrayValues } from "../../../../assets/data/Prices"



const SortPrice = () => {

    const [isActive, setIsActive] = useState('до 50 000')
    const dispatch = useAppDispatch()

    const handleClick = (e: React.MouseEvent<HTMLLIElement>, item: string) => {
        setIsActive(item)

        const { price } = e.currentTarget.dataset
        const one = +price.split(',')[0]
        const two = +price.split(',')[1]
        const tupleArr: FilterByPrice = [one, two]
        if (Array.isArray(tupleArr)) {

            dispatch(filterByPriceCreator(tupleArr))
        }

    }

    return (
        <div className="catalog-main__price">
            <h3 className="catalog-main__options-title">ЦЕНА</h3>
            <ul className='catalog-main__options-list'>
                <li
                    onClick={e => handleClick(e, arrayValues[0])}
                    data-price={[50000, 0]}
                    className={isActive === arrayValues[0] ?
                        "catalog-main__options-item catalog-main__options-item--active"
                        : 'catalog-main__options-item'}
                >до 50 000</li>
                <li
                    onClick={e => handleClick(e, arrayValues[1])}
                    data-price={[50000, 70000]}
                    className={isActive === arrayValues[1] ?
                        "catalog-main__options-item catalog-main__options-item--active"
                        : 'catalog-main__options-item'}
                >50-70 000</li>
                <li
                    onClick={e => handleClick(e, arrayValues[2])}
                    data-price={[70000, 100000]}
                    className={isActive === arrayValues[2] ?
                        "catalog-main__options-item catalog-main__options-item--active"
                        : 'catalog-main__options-item'}
                >70-100 000</li>
                <li
                    onClick={e => handleClick(e, arrayValues[3])}
                    data-price={[0, 100000]}
                    className={isActive === arrayValues[3] ?
                        "catalog-main__options-item catalog-main__options-item--active"
                        : 'catalog-main__options-item'}
                >от 100 000</li>
            </ul>
        </div>
    )
}

export default SortPrice
