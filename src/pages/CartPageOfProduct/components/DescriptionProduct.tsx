import { useEffect, useState } from "react"
import raiting from "../../../assets/images/raiting.svg"
import { getItemFromLocalStorage, setItemToLocalStorage } from "../../../utils"
import { Ring } from "../../../redux/rings/ringsReducerTypes"
import { useAppSelector } from "../../../hooks/redux/hooks"
import { RootState } from "../../../redux/rootReducer"
import { selectRingById } from "../../../redux/rings/ringsReducer"

type Props = {
    id: number
}


const DescriptionProduct = ({ id }: Props) => {

    const [isActive, setIsActive] = useState(false)
    const ring = useAppSelector((state: RootState) => selectRingById(state, id))

    useEffect(() => {
        const items: Ring[] = getItemFromLocalStorage("favoriteRings") || []
        if (items.find(ring => ring.id === id)) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }, [id])


    const handleClick = (id: number) => {

        const rings: Ring[] = getItemFromLocalStorage('favoriteRings') || []
        if (rings.find(ring => ring.id === id)) {
            const newRings = rings.filter(ring => ring.id !== id)
            localStorage.setItem('favoriteRings', JSON.stringify(newRings))
            setIsActive(false)
            return
        }
        setItemToLocalStorage('favoriteRings', ring)
        setIsActive(true)
    }

    return (
        <div className="cart-page__description-product">
            <p className="cart-page__product-id">Арт. {id}</p>
            <p className="cart-page__product-raiting">
                <img src={raiting} alt="" />
                <span>1 отзыв</span>
            </p>
            <p className="cart-page__product-favorite ">
                <svg onClick={() => handleClick(id)} className={isActive ? "user__actions-svg user__actions-svg--active" : "user__actions-svg"} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" fill="white" />
                    <path d="M20.8401 4.61012C20.3294 4.09912 19.7229 3.69376 19.0555 3.4172C18.388 3.14064 17.6726 2.99829 16.9501 2.99829C16.2276 2.99829 15.5122 3.14064 14.8448 3.4172C14.1773 3.69376 13.5709 4.09912 13.0601 4.61012L12.0001 5.67012L10.9401 4.61012C9.90843 3.57842 8.50915 2.99883 7.05012 2.99883C5.59109 2.99883 4.19181 3.57842 3.16012 4.61012C2.12843 5.64181 1.54883 7.04108 1.54883 8.50012C1.54883 9.95915 2.12843 11.3584 3.16012 12.3901L4.22012 13.4501L12.0001 21.2301L19.7801 13.4501L20.8401 12.3901C21.3511 11.8794 21.7565 11.2729 22.033 10.6055C22.3096 9.93801 22.4519 9.2226 22.4519 8.50012C22.4519 7.77763 22.3096 7.06222 22.033 6.39476C21.7565 5.7273 21.3511 5.12087 20.8401 4.61012Z" fill="#020F59" />
                </svg>
                <span>{isActive ? "в избранном" : "в избранное"}</span>
            </p>
        </div>
    )
}

export default DescriptionProduct
