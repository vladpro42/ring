import { memo } from "react"
import { Rating2 } from "../../../components/Raiting"
import { useAppSelector } from "../../../hooks/redux/hooks"
import { selectRingById } from "../../../redux/rings/ringsSelects"
import { FavotiteBtn } from "../../../components/CartOfProduct/components/FavoriteBtn"

export type DescriptionProductProps = {
    id: number,
    rating: number
}


const DescriptionProduct = memo(({ id, rating }: DescriptionProductProps) => {
    const { isFavorite } = useAppSelector((state) => selectRingById(state, id));

    return (
        <div className="cart-page__description-product">
            <p className="cart-page__product-id">Арт. {id}</p>
            <p className="cart-page__product-raiting">
                <Rating2 defaultValue={rating} precision={0.5} readOnly />
                <span className="cart-page__review-count">1 отзыв</span>
            </p>
            <FavotiteBtn
                className={`cart-page__product-favorite`}
                id={id}
                isFavorite={isFavorite}
            />
            <span className="user__actions-span">{isFavorite ? "в избранном" : "в избранное"}</span>
        </div>
    )
})

export default DescriptionProduct
