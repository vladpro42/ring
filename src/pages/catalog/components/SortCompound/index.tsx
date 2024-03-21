import { useState } from "react"
import { useAppDispatch } from "../../../../hooks/redux/hooks"
import { filterByJewelCreator } from "../../../../redux/filter/filterReducer"

const SortCompound = () => {

    const [isActive, setIsActive] = useState(0)
    const dispatch = useAppDispatch()

    const handleClick = (index: number) => {
        setIsActive(index)
        const payload = index === 0
        dispatch(filterByJewelCreator(payload))
    }

    return (
        <div className="catalog-main__compound">
            <h3 className="catalog-main__options-title">ВСТАВКИ</h3>
            <ul className='catalog-main__options-list'>
                {
                    ['с камнями', 'без камней'].map((item, index) => <li
                        key={item}
                        onClick={() => handleClick(index)}
                        className={index === isActive ?
                            "catalog-main__options-item catalog-main__options-item--active"
                            : "catalog-main__options-item"}
                    >
                        {item}
                    </li>)
                }

            </ul>
        </div>
    )
}

export default SortCompound
