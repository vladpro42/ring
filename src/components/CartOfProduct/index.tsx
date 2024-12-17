import { Link, useLocation } from 'react-router-dom'
import { Ring } from '../../redux/rings/ringsReducerTypes'
import { Rating2 } from '../Raiting'
import styles from './index.module.scss'
import { useFavorite } from '../../hooks/UseFavorite/useFavorite'
import { FavotiteBtn } from './components/FavoriteBtn'
import { memo } from 'react'

type Props = {
    cart: Ring,
    url?: string
}

export const CartOfProduct = memo(({ cart, url: urlNews }: Props) => {


    const url = useLocation().pathname.split('/')[1]

    const { isFavorite, toggleAddFavorite } = useFavorite('favoriteRings', cart.id)

    return (
        <div className={styles.cart}>
            <div className={styles.cart__header}>
                <p className={styles.cart__id}>Арт. {cart.id}</p>
                <div className="raiting">
                    <Rating2 defaultValue={cart.raiting} precision={0.5} readOnly />
                </div>
                <FavotiteBtn
                    className={styles.favorite_mobile}
                    id={cart.id}
                    toggleAddFavorite={toggleAddFavorite}
                    isFavorite={isFavorite}
                />
            </div>
            <Link
                className={styles.link}
                to={`/${urlNews ? urlNews : url}/${cart.id}`}
                state={url}
            >   
            <span className={styles.span}>Перейти по ссылке </span>
                <img className={styles.img} src="images/new-items-2.png" alt="" />
            </Link>
            <div className={styles.cart__footer}>
                <FavotiteBtn className={styles.favorite_pc} id={cart.id} toggleAddFavorite={toggleAddFavorite} isFavorite={isFavorite} />

                <div className={styles.prices}>
                    <p className={styles.price_sale}>{cart.priceSale ? cart.priceSale + '₽' : ''}</p>
                    <p className={styles.price}>{cart.price} ₽</p>
                </div>
            </div>
        </div >
    )
})