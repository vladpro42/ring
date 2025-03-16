import { useCallback, useMemo } from "react"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/hooks"
import { decrementCountCreator, incrementCountCreator, removeOneCreator } from "../../../redux/basket/basketActions"
import { NavigationText } from "../../CartPageOfProduct/components"
import { selectRingsFromBasket } from "../../../redux/basket/basketSelectors"


import basketSale from "../../../assets/images/basket-sale.jpg"
import basketDelete from "../../../assets/images/basket-delete.svg"

type Props = {
    handleClickRemoveAll: () => void;
    handlePopupClick: () => void;
}

const Basket = ({ handleClickRemoveAll, handlePopupClick }: Props) => {

    const dispatch = useAppDispatch()
    const rings = useAppSelector(selectRingsFromBasket)

    const handleClickRemoveOne = useCallback((id: number) => {
        dispatch(removeOneCreator(id))
    }, [dispatch])

    const handleClickDecrementCount = useCallback((id: number) => {
        dispatch(decrementCountCreator(id))
    }, [dispatch])

    const handleClickIncrementCount = useCallback((id: number) => {
        dispatch(incrementCountCreator(id))
    }, [dispatch])

    const totalSum = useMemo(() => rings.reduce(
        (accumulator, currentValue) => accumulator + currentValue.defaultCount * currentValue.ring.priceSale,
        0,
    ), [rings])

    const resTotalSum = new Intl.NumberFormat("ru-RU").format(totalSum)

    return <section className='basket'>
        <div className="container">
            <NavigationText />
            <div className="basket__header">
                <h1 className="basket__title">корзина</h1>
                <button onClick={handleClickRemoveAll} className='basket__btn'>УДАЛИТЬ ВСЕ</button>
            </div>

            <div className="basket__inner">

                <img className='basket__sale--mobile' srcSet='/images/banner-mobile.jpg' />

                <ul className='basket__list--mobile'>
                    {rings?.map(ring => <li key={ring.ring.id} className='basket__item--mobile'>
                        <img className='basket__item-img' src={ring.ring.imgSrc} alt="" />
                        <div className="basket__item-column">
                            <div className="basket__item-prices">
                                <p className="basket__item-price">{ring.ring.price}₽</p>
                                <p className="basket__item-price basket__item-price--mobile">{ring.ring.priceSale}₽</p>
                            </div>
                            <p className="basket__item-id">Арт. {ring.ring.id}</p>
                            <p className="basket__item-mobile">Модель: <span className='basket__item-mobile--black'>{ring.model}</span></p>
                            <div className='basket__counter'>
                                <button
                                    onClick={() => handleClickIncrementCount(ring.ring.id)}
                                    className='basket__counter-btn basket__counter-btn--plus'>
                                </button>
                                <p>{ring.defaultCount}</p>
                                <button
                                    onClick={() => handleClickDecrementCount(ring.ring.id)}
                                    className='basket__counter-btn'>
                                </button>
                            </div>
                        </div>
                    </li>)}
                </ul>

                <table className='basket__table'>
                    <thead>
                        <tr className='basket__tr'>
                            <td align='center' valign='middle' className='basket__column-name'>Картинка</td>
                            <td align='center' valign='middle' className='basket__column-name'>Название</td>
                            <td align='center' valign='middle' className='basket__column-name'>Модель</td>
                            <td align='center' valign='middle' className='basket__column-name'>Кол-во</td>
                            <td align='center' valign='middle' className='basket__column-name'>Цена</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rings?.map(ring => <tr key={ring.ring.id} className='basket__tr'>
                                <td align='center' valign='middle' className='basket__td'>
                                    <img className='basket__td-img' src={ring.ring.imgSrc} alt="" />
                                </td>
                                <td align='center' valign='middle' className='basket__td'>Арт. {ring.ring.id}</td>
                                <td align='center' valign='middle' className='basket__td'>{ring.model}</td>
                                <td align='center' valign='middle' className='basket__td '>
                                    <div className='basket__counter'>
                                        <button
                                            onClick={() => handleClickIncrementCount(ring.ring.id)}
                                            className='basket__counter-btn basket__counter-btn--plus'>
                                        </button>
                                        <p>{ring.defaultCount}</p>
                                        <button
                                            onClick={() => handleClickDecrementCount(ring.ring.id)}
                                            className='basket__counter-btn'>
                                        </button>
                                    </div>
                                </td>
                                <td align='center' valign='middle' className='basket__td'>{ring.ring.priceSale} ₽</td>
                                <td align='center' valign='middle' className='basket__td'>
                                    <button onClick={() => handleClickRemoveOne(ring.ring.id)} className='basket__delete-btn'>
                                        <img src={basketDelete} alt="" />
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>

                <div className="basket__price-box">
                    <p className="basket__price">Итого: <span>{resTotalSum} ₽</span></p>
                    <button onClick={handlePopupClick} className='basket__submit'>ОФОРМИТЬ ЗАКАЗ </button>
                </div>
            </div>
            <picture>
                <source srcSet='/images/banner-mobile.jpg' media='(max-width: 992px)' />
                <img className='basket__sale' src={basketSale} alt="" />
            </picture>
        </div>
    </section>
}

export default Basket