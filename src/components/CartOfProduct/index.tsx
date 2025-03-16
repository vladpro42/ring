import { Link, useLocation } from 'react-router-dom'
import { Ring } from '../../redux/rings/ringsReducerTypes'
import { Rating2 } from '../Raiting'
import styles from './index.module.scss'
import { FavotiteBtn } from './components/FavoriteBtn'
import {memo} from 'react'

type Props = {
    cart: Ring,
    url?: string,
    className?: string,
}

export const CartOfProduct = memo(({ cart, className}: Props) => {
    const url = useLocation().pathname.split('/')[1]
    return (
        <li className={`${styles.cart} ${className}`}>
            <div className={[styles.cart__header, styles.header].join(' ')}>
                <p className={styles.id}>Арт. {cart.article}</p>
                <div className="raiting">
                    <Rating2 defaultValue={cart.raiting} precision={0.5} readOnly />
                </div>
                <FavotiteBtn
                    className={styles.favorite_mobile}
                    id={cart.id}
                    isFavorite={cart.isFavorite}
                />
            </div>
            <Link
                className={styles.link}
                to={cart.url}
                state={url}
            >
                <span className={styles.span}>Перейти по ссылке </span>
                <img className={styles.img} src={cart.imgSrc} alt="" />
            </Link>
            <div className={styles.footer}>
                <div className={styles.prices}>
                    <p className={styles.sale}>{cart.priceSale ? cart.priceSale + '₽' : ''}</p>
                    <p className={styles.price}>{cart.price} ₽</p>
                </div>
            </div>
        </li >
    )
})