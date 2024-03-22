
import { Link, useLocation } from "react-router-dom"
import { useAppDispatch } from "../../hooks/redux/hooks"
import { Ring } from "../../redux/rings/ringsReducerTypes"
import { changeFavoriteCreator } from "../../redux/rings/ringsReducer"
import { Rating2 } from "../../components/Raiting/index"
import { memo } from "react"

const ProductCart = memo(({ cart, to }: { cart: Ring, to?: number | string, }) => {

    const location = useLocation()
    const url = location.pathname.split('/')[1]
    const dispatch = useAppDispatch()

    const handleClickActiveFavorite = (cart: Ring) => {
        dispatch(changeFavoriteCreator(cart.id))

        const localStorageData = localStorage.getItem("favoriteRings");
        if (localStorageData) {
            const favoriteRings: Ring[] = JSON.parse(localStorageData)
            cart.favorite = true
            favoriteRings.push(cart)
            localStorage.setItem("favoriteRings", JSON.stringify(favoriteRings))
        } else {
            cart.favorite = true
            const data = [cart]
            localStorage.setItem("favoriteRings", JSON.stringify(data))
        }
    }

    return <li className="new-items__slide">
        <div className="new-items__slide-item">
            <p className="new-items__slide-article">Арт. {cart.id}</p>
            <div className="raiting">
                <Rating2 defaultValue={cart.raiting} precision={0.5} readOnly />
            </div>
        </div>
        <Link
            className="new-items__link"
            to={`${to}` ? `${to}` : `${url}/${cart.id}`}
            state={url}
        >
            <img className='new-items__slide-img' src={cart.imgSrc} alt="" />
        </Link>
        <div className="new-items__slide-item">
            <svg
                onClick={() => handleClickActiveFavorite(cart)}
                className={cart.favorite ? "new-items__slide-favotite new-items__slide-favotite--active" : "new-items__slide-favotite"}
                width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" fill="white" />
                <path d="M20.8401 4.61012C20.3294 4.09912 19.7229 3.69376 19.0555 3.4172C18.388 3.14064 17.6726 2.99829 16.9501 2.99829C16.2276 2.99829 15.5122 3.14064 14.8448 3.4172C14.1773 3.69376 13.5709 4.09912 13.0601 4.61012L12.0001 5.67012L10.9401 4.61012C9.90843 3.57842 8.50915 2.99883 7.05012 2.99883C5.59109 2.99883 4.19181 3.57842 3.16012 4.61012C2.12843 5.64181 1.54883 7.04108 1.54883 8.50012C1.54883 9.95915 2.12843 11.3584 3.16012 12.3901L4.22012 13.4501L12.0001 21.2301L19.7801 13.4501L20.8401 12.3901C21.3511 11.8794 21.7565 11.2729 22.033 10.6055C22.3096 9.93801 22.4519 9.2226 22.4519 8.50012C22.4519 7.77763 22.3096 7.06222 22.033 6.39476C21.7565 5.7273 21.3511 5.12087 20.8401 4.61012Z" />
            </svg>

            <div className="new-items__slide-price">{cart.price} ₽</div>
        </div>
    </li>
})

export default ProductCart
