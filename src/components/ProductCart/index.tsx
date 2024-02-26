
import star from "../../assets/images/star.svg"
import heart from "../../assets/images/heart.svg"
import { ICart } from "../../App"



const ProductCart = ({ cart }: { cart: ICart }) => {

    return <li className="new-items__slide">
        <div className="new-items__slide-item">
            <p className="new-items__slide-article">Арт. {cart.id}</p>
            <div className="raiting">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
            </div>
        </div>
        <img className='new-items__slide-img' src={cart.imgSrc} alt="" />
        <div className="new-items__slide-item">
            <img className='new-items__slide-favotite' src={heart} alt="" />
            <div className="new-items__slide-price">{cart.price} ₽</div>
        </div>
    </li>
}

export default ProductCart
