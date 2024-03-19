import { useAppDispatch } from "../../../../hooks/redux/hooks"
import { changeContentPerPageCreator } from "../../../../redux/filter/filterReducer"

const SortRaiting = () => {
    const dispatch = useAppDispatch()

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.currentTarget.value
        if (value === 'asc' || value === "des") {
            dispatch(changeContentPerPageCreator(value))
        }
        return
    }

    return (
        <div className="catalog-main__sort">
            Сортировать:
            <select onChange={handleChange}>
                <option value="des">рейтинг (начиная с высокого)</option>
                <option value="asc">рейтинг (начиная с низкого)</option>
            </select>
        </div>
    )
}

export default SortRaiting
