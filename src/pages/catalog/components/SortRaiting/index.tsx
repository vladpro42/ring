import { memo, useCallback } from "react"
import { useAppDispatch } from "../../../../hooks/redux/hooks"
import { changeContentPerPageCreator } from "../../../../redux/filter/filterActions"

const SortRaiting = memo(() => {
    const dispatch = useAppDispatch()

    const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.currentTarget.value
        if (value === 'asc' || value === "des") {
            dispatch(changeContentPerPageCreator(value))
        }
        return
    }, [dispatch])

    return (
        <div className="catalog-main__sort">
            Сортировать:
            <select onChange={handleChange}>
                <option value="des">рейтинг (начиная с высокого)</option>
                <option value="asc">рейтинг (начиная с низкого)</option>
            </select>
        </div>
    )
})

export default SortRaiting
