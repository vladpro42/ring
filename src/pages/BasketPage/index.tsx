import Header from '../../components/header'
import Footer from '../../components/footer'
import NavigationText from '../../components/NavigationText'
import basket from "../../assets/images/basket-1.png"
import basketSale from "../../assets/images/basket-sale.jpg"
import basketDelete from "../../assets/images/basket-delete.svg"


import "./basket.scss"

import logoBasket from "../../assets/images/logo-basket.png"
import Form3 from '../../components/Form3'
import React, { useState } from 'react'


const BasketPage = () => {

    const [popup, setPopup] = useState(false)

    const popupHtml = <div onClick={() => setPopup(false)} className="basket__popup">

        <div
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
            className="basket__popup-box"
        >
            <div className="basket__popup-header">
                <button onClick={() => setPopup(false)} className='basket__popup-close'></button>
                <a href="#" className="basket__popup-logo">
                    <img src={logoBasket} alt="" />
                </a>
            </div>
            <Form3 />
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
                        <button className='basket__btn'>УДАЛИТЬ ВСЕ</button>
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
                            <tr className='basket__tr'>
                                <td align='center' valign='middle' className='basket__td'><img src={basket} alt="" /></td>
                                <td align='center' valign='middle' className='basket__td'>Арт. 31</td>
                                <td align='center' valign='middle' className='basket__td'>01</td>
                                <td align='center' valign='middle' className='basket__td '>
                                    <div className='basket__counter'>
                                        <button className='basket__counter-btn basket__counter-btn--plus'>
                                            {/*  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 5.68738H13V7.31238H0V5.68738Z" fill="#020F59" />
                                                <path d="M5.6875 12.9999V-0.00012207H7.3125V12.9999H5.6875Z" fill="#020F59" />
                                            </svg> */}
                                        </button>
                                        <p>100</p>
                                        <button className='basket__counter-btn'>
                                            {/* <svg width="13" height="3" viewBox="0 0 13 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.251953" y="0.9375" width="12.5" height="1.125" fill="#020F59" stroke="#020F59" strokeWidth="0.5" />
                                            </svg> */}
                                        </button>
                                    </div>
                                </td>
                                <td align='center' valign='middle' className='basket__td'>59 600 ₽</td>
                                <td align='center' valign='middle' className='basket__td'>
                                    <button className='basket__delete-btn'>
                                        <img src={basketDelete} alt="" />
                                    </button>
                                </td>
                            </tr>
                            <tr className='basket__tr'>
                                <td align='center' valign='middle' className='basket__td'><img src={basket} alt="" /></td>
                                <td align='center' valign='middle' className='basket__td'>Арт. 01</td>
                                <td align='center' valign='middle' className='basket__td'>01</td>
                                <td align='center' valign='middle' className='basket__td'>
                                    <div className='basket__counter'>
                                        <button className='basket__counter-btn basket__counter-btn--plus'>
                                            {/* <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 5.68738H13V7.31238H0V5.68738Z" fill="#020F59" />
                                                <path d="M5.6875 12.9999V-0.00012207H7.3125V12.9999H5.6875Z" fill="#020F59" />
                                            </svg> */}
                                        </button>
                                        <p>100</p>
                                        <button className='basket__counter-btn'>
                                            {/*  <svg width="13" height="3" viewBox="0 0 13 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.251953" y="0.9375" width="12.5" height="1.125" fill="#020F59" stroke="#020F59" strokeWidth="0.5" />
                                            </svg> */}
                                        </button>
                                    </div>
                                </td>
                                <td align='center' valign='middle' className='basket__td'>59 600 ₽</td>
                                <td align='center' valign='middle' className='basket__td'>
                                    <button className='basket__delete-btn'>
                                        <img src={basketDelete} alt="" />
                                    </button></td>
                            </tr>
                        </table>

                        <div className="basket__price-box">
                            <p className="basket__price">Итого: <span>119 &nbsp;200 ₽</span></p>
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
