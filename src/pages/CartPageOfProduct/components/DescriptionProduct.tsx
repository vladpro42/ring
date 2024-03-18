import heart from "../../../assets/images/heart.svg"
import raiting from "../../../assets/images/raiting.svg"

type Props = {
    id: number
}

const DescriptionProduct = ({ id }: Props) => {
    return (
        <div className="cart-page__description-product">
            <p className="cart-page__product-id">Арт. {id}</p>
            <p className="cart-page__product-raiting">
                <img src={raiting} alt="" />
                <span>1 отзыв</span>
            </p>
            <p className="cart-page__product-favorite">
                <img src={heart} alt="" />
                <span>в избранное</span>
            </p>
        </div>
    )
}

export default DescriptionProduct
