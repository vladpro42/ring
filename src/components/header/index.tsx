import React from 'react'

import heart from "../../assets/images/heart.svg"
import map from "../../assets/images/map.svg"
import mail from "../../assets/images/mail.svg"
import lupa from "../../assets/images/lupa.svg"
import logo from "../../assets/images/logo.png"
import cart from "../../assets/images/cart.svg"
import facebook from "../../assets/images/facebook.svg"
import whatsapp from "../../assets/images/whatsapp.svg"
import vk from "../../assets/images/vk.svg"
import instagram from "../../assets/images/instagram.svg"
import telegram from "../../assets/images/telegram.svg"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <div className="header__bg">
                <div className="container">
                    <ul className="header__items">
                        <li className="header__item">
                            <a href="" className="header__item-link">
                                <img src={map} alt="" />
                                Москва, Большой Кисловский переулок, 5-7с1
                            </a>
                            <a href="" className="header__item-link">
                                <img src={mail} alt="" />
                                info@art-rings.ru
                            </a>
                        </li>
                        <li className="header__item oclock">
                            <a href="" className="header__item-link">пн-пт 11:00-20:00</a>
                            <a href="" className="header__item-link">сб, вс 11:00-17:00</a>
                        </li>
                        <li className="header__item phone">
                            <a href="" className="header__item-link">+7 (499) 940-87-77</a>
                            <a href="" className="header__item-link">+7 (977) 841-23-40</a>
                        </li>
                        <li className="header__item user-actions">
                            <a href="" className="header__item-link">
                                <img src={facebook} alt="" />
                            </a>
                            <a href="" className="header__item-link">
                                <img src={vk} alt="" />
                            </a>
                            <a href="" className="header__item-link">
                                <img src={whatsapp} alt="" />
                            </a>
                            <a href="" className="header__item-link">
                                <img src={instagram} alt="" />
                            </a>
                            <a href="" className="header__item-link">
                                <img src={telegram} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container">


                <div className="header__inner">
                    <nav className="header__nav">
                        <ul className="header__nav-menu">
                            <li className="header__nav-item">
                                <a href="#" className="header__nav-link">
                                    Студия
                                </a>
                            </li>
                            <li className="header__nav-item">
                                <a href="#" className="header__nav-link">
                                    О нас
                                </a>
                            </li>
                            <li className="header__nav-item">
                                <a href="#" className="header__nav-link">
                                    Доставка и Оплата
                                </a>
                            </li>
                            <li className="header__nav-item">
                                <a href="#" className="header__nav-link">
                                    Гарантии
                                </a>
                            </li>
                            <li className="header__nav-item">
                                <a href="#" className="header__nav-link">
                                    Отзывы
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <search className='header__search'>
                        <input type="text" className='header__search-input' placeholder='Поиск украшений' />
                        <img src={lupa} alt="" />
                    </search>
                </div>
            </div>
            <div className="container">

                <div className='header__company'>
                    <h1 className='header__company-title'>ART-RINGS</h1>
                    <p className="header__company-subtitle">MOSCOW JEWELRY STUDIO</p>
                </div>
                <div className="header__footer">
                    <a href="#" className="logo">
                        <img src={logo} alt="" />
                    </a>
                    <span className="burger"></span>
                    <ul className="header__footer-list">
                        <li className="header__footer-item">
                            <Link to="../catalog" className="header__footer-link">ОБРУЧАЛЬНЫЕ КОЛЬЦА</Link>
                        </li>
                        <li className="header__footer-item">
                            <a href="#" className="header__footer-link">ПОМОЛВОЧНЫЕ КОЛЬЦА</a>
                        </li>
                        <li className="header__footer-item">
                            <a href="#" className="header__footer-link">СВАДЕБНЫЕ ДУЭТЫ</a>
                        </li>
                        <li className="header__footer-item">
                            <a href="#" className="header__footer-link">НА ЗАКАЗ</a>
                        </li>
                    </ul>
                    <div className="user__actions">
                        <a href="#" className="user__actions-link">
                            <img src={cart} alt="" />
                        </a>
                        <a href="#" className="user__actions-link">
                            <img src={heart} alt="" />
                        </a>
                    </div>
                </div>
            </div>

        </header >
    )
}

export default Header
