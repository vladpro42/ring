import { Rating2 } from '../../../components/Raiting'

const CartPageForm = () => {
    return (
        <form className="cart-page__form">
            <div className="cart-page__form-header">
                <label className="cart-page__form-label">
                    <span className="cart-page__form-span">Ваше имя</span>
                    <input type="text" />
                </label>
                <label className="cart-page__input-file">
                    ЗАГРУЗИТЬ ФОТО
                    <input type="file" />
                </label>
            </div>
            <label className="cart-page__textarea-label">
                <span>Ваш отзыв</span>
                <textarea maxLength={2000}>
                </textarea>
            </label>
            <div className="cart-page__form-footer">
                <label className="cart-page__form-label">
                    <span className="cart-page__form-span">Ваша оценка</span>
                    <div className="cart-page__form-raiting">
                        <Rating2 size="large" precision={0.5} />
                    </div>
                </label>
                <button className="cart-page__form-submit">ОСТАВИТЬ ОТЗЫВ</button>
            </div>
        </form>
    )
}

export default CartPageForm
