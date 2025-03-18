import { useAppDispatch } from "../../../hooks/redux/hooks"
import { updateRingCreator } from "../../../redux/rings/ringsAction"
import { Ring } from "../../../redux/rings/ringsReducerTypes"
import { url } from "../../../redux/rings/ringsThunk"
import styles from "../index.module.scss"

type Props = {
    id: number,
    isFavorite: number,
    className?: string,
}

export const FavotiteBtn = ({ id, isFavorite, className }: Props) => {

    const dispatch = useAppDispatch()

    
    const toggleFavoriteBtn = async ( id: number) => {
        const finalUrl = url + `/${id}`
        try {
            const response = await fetch(finalUrl, {
                method: 'put', 
                body: JSON.stringify({isFavorite: isFavorite == 1 ? 0 : 1}),
                headers: {'content-type':'application/json'},
            });
            if(!response.ok) {
                throw new Error(`Не удалось отправить ${url} с id ${id}`)
            }

            const ring: Ring = await response.json();
            dispatch(updateRingCreator(ring))
            
        } catch (error) {
            console.log(error)
        }

    }


    return <button className={`${styles.favoriteBtn} ${className ? className : ''}`}
        onClick={() => toggleFavoriteBtn(id)}>
        <img className={`${styles.svg} ${isFavorite ? styles.active : ''}`} src="/svg/heart.svg" alt="" />
    </button>
}