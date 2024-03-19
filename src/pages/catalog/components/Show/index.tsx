import { useAppDispatch } from "../../../../hooks/redux/hooks"
import { contentPerPageCreator } from "../../../../redux/filter/filterReducer"



const Show = () => {

    const dispatch = useAppDispatch()

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(contentPerPageCreator(+e.currentTarget.value))
    }

    return (
        <div className="catalog-main__show">
            Показать:
            <select onChange={handleChange}>
                <option value="6">6</option>
                <option value="12">12</option>
                <option value="15">15</option>
                <option value="21">21</option>
            </select>
        </div>
    )
}

export default Show
