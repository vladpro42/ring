import Header from '../../components/header'
import Footer from '../../components/footer'
import NavigationText from '../../components/NavigationText'
import Form3 from '../../components/Form3'

import basketSale from "../../assets/images/basket-sale.jpg"
import basketDelete from "../../assets/images/basket-delete.svg"
import logoBasket from "../../assets/images/logo-basket.png"

import "./basket.scss"


import React, { useState } from 'react'
import {
    decrementCountCreator,
    incrementCountCreator,
    removeAllCreators,
    removeOneCreator,
    selectRingsFromBasket
} from '../../redux/basket/basketReducer'
import { useAppDispatch, useAppSelector } from '../../hooks/redux/hooks'


const BasketPage = () => {

    const rings = useAppSelector(selectRingsFromBasket)

    const dispatch = useAppDispatch()

    const handleClickRemoveOne = (id: number) => {
        dispatch(removeOneCreator(id))
    }

    const handleClickRemoveAll = () => {
        dispatch(removeAllCreators())
    }

    const handleClickClosePopup = () => {
        setPopup(false)
    }

    const handleClickDecrementCount = (id: number) => {
        dispatch(decrementCountCreator(id))
    }

    const handleClickIncrementCount = (id: number) => {
        dispatch(incrementCountCreator(id))
    }

    const totalSum = rings.reduce(
        (accumulator, currentValue) => accumulator + currentValue.defaultCount * currentValue.ring.priceSale,
        0,
    );

    const resTotalSum = new Intl.NumberFormat("ru-RU").format(totalSum)


    const [popup, setPopup] = useState(false)
    const popupHtml = <div onClick={handleClickClosePopup} className="basket__popup">
        <div
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
            className="basket__popup-box"
        >
            <div className="basket__popup-header">
                <button onClick={handleClickClosePopup} className='basket__popup-close'></button>
                <a href="#" className="basket__popup-logo">
                    <img src={logoBasket} alt="" />
                </a>
            </div>
            <Form3 onClick={handleClickRemoveAll} />
        </div>
    </div>

    return (
        <>
            {popup ? popupHtml : null}
            <Header />
            <section className='basket'>
                <div className="container">
                    <NavigationText />
                    <div className="basket__header">
                        <h1 className="basket__title">корзина</h1>
                        <button onClick={handleClickRemoveAll} className='basket__btn'>УДАЛИТЬ ВСЕ</button>
                    </div>

                    <div className="basket__inner">
                        <table className='basket__table'>
                            <tr className='basket__tr'>
                                <td align='center' valign='middle' className='basket__column-name'>Картинка</td>
                                <td align='center' valign='middle' className='basket__column-name'>Название</td>
                                <td align='center' valign='middle' className='basket__column-name'>Модель</td>
                                <td align='center' valign='middle' className='basket__column-name'>Кол-во</td>
                                <td align='center' valign='middle' className='basket__column-name'>Цена</td>
                            </tr>
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
                                    <td align='center' valign='middle' className='basket__td'>{ring.ring.price} ₽</td>
                                    <td align='center' valign='middle' className='basket__td'>
                                        <button onClick={() => handleClickRemoveOne(ring.ring.id)} className='basket__delete-btn'>
                                            <img src={basketDelete} alt="" />
                                        </button>
                                    </td>
                                </tr>)
                            }
                        </table>

                        <div className="basket__price-box">
                            <p className="basket__price">Итого: <span>{resTotalSum} ₽</span></p>
                            <button onClick={() => setPopup(true)} className='basket__submit'>ОФОРМИТЬ ЗАКАЗ </button>
                        </div>
                    </div>
                    <img className='basket__sale' src={basketSale} alt="" />
                </div>
            </section>

            <Footer />

        </>
    )
}

export default BasketPage
