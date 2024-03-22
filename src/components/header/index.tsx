
import map from "../../assets/images/map.svg"
import mail from "../../assets/images/mail.svg"
import logo from "../../assets/images/logo.png"

import { Link } from 'react-router-dom'
import { useAppSelector } from "../../hooks/redux/hooks"
import { selectRingsFromBasketLength } from "../../redux/basket/basketReducer"
import { getItemFromLocalStorage } from "../../utils"
import UserActionsLinks from "./components/UserActionsLinks"
import HeaderSearch from "./components/HeaderSearch"

const Header = () => {

    const lenBasket = useAppSelector(selectRingsFromBasketLength)
    const lenFavorite = getItemFromLocalStorage("favoriteRings").length


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
                            <a href="mailto:info@art-rings.ru" className="header__item-link">
                                <img src={mail} alt="" />
                                info@art-rings.ru
                            </a>
                        </li>
                        <li className="header__item oclock">
                            <p className="header__item-link">пн-пт 11:00-20:00</p>
                            <p className="header__item-link">сб, вс 11:00-17:00</p>
                        </li>
                        <li className="header__item phone">
                            <a href="tel:+74999408777" className="header__item-link">+7 (499) 940-87-77</a>
                            <a href="tel:+79778412340" className="header__item-link">+7 (977) 841-23-40</a>
                        </li>
                        <UserActionsLinks />
                    </ul>
                </div>
            </div>
            <div className="container">

                <div className="header__inner">
                    <nav className="header__nav">
                        <ul className="header__nav-menu">
                            <li className="header__nav-item">
                                <Link to="/studio-two" className="header__nav-link">
                                    Студия
                                </Link>
                            </li>
                            <li className="header__nav-item">
                                <Link to="/about" className="header__nav-link">
                                    О нас
                                </Link>
                            </li>
                            <li className="header__nav-item">
                                <Link to="/delivery" className="header__nav-link">
                                    Доставка и Оплата
                                </Link>
                            </li>
                            <li className="header__nav-item">
                                <Link to="/guarantee" className="header__nav-link">
                                    Гарантии
                                </Link>
                            </li>
                            <li className="header__nav-item">
                                <Link to="/" className="header__nav-link">
                                    Отзывы
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <HeaderSearch />
                </div>
            </div>
            <div className="container">

                <div className='header__company'>
                    <h1 className='header__company-title'>ART-RINGS</h1>
                    <p className="header__company-subtitle">MOSCOW JEWELRY STUDIO</p>
                </div>
                <div className="header__footer">
                    <Link to="/" className="logo">
                        <img src={logo} alt="" />
                    </Link>
                    <div className="burger__container">
                        <span className="burger__line"></span>
                        <span className="burger__line"></span>
                        <span className="burger__line"></span>
                    </div>
                    <ul className="header__footer-list">
                        <li className="header__footer-item">
                            <Link to="../catalog-weddingRings" className="header__footer-link">ОБРУЧАЛЬНЫЕ КОЛЬЦА</Link>
                        </li>
                        <li className="header__footer-item">
                            <Link to="../catalog-engagementRings" className="header__footer-link">ПОМОЛВОЧНЫЕ КОЛЬЦА</Link>
                        </li>
                        <li className="header__footer-item">
                            <Link to="../catalog-weddingDuets" className="header__footer-link">СВАДЕБНЫЕ ДУЭТЫ</Link>
                        </li>
                        <li className="header__footer-item">
                            <Link to="../make-an-order" className="header__footer-link">НА ЗАКАЗ</Link>
                        </li>
                    </ul>
                    <div className="user__actions">
                        <Link to="/basket" className="user__actions-link">
                            {lenBasket === 0 ? null : <div className="user__actions-circle">{lenBasket}</div>}
                            <svg className="user__actions-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="#020F59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="#020F59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L22.2 10.195L23 6H6M5 1L6.00075 6M6.00075 6L7.68 14.39L8.38755 15.5583M6.00075 6H23L22.2 10.195M6.00075 6H6M9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583" stroke="#020F59" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8.38755 15.5583C8.02191 15.264 7.77144 14.8504 7.68 14.39L6 6H23L22.2 10.195L21.4 14.39C21.3086 14.8504 21.0581 15.264 20.6925 15.5583C20.3268 15.8526 19.8693 16.009 19.4 16H9.68C9.2107 16.009 8.75318 15.8526 8.38755 15.5583Z" fill="#020F59" />
                                <path d="M7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583M7.68 14.39L6 6H23L22.2 10.195L21.4 14.39C21.3086 14.8504 21.0581 15.264 20.6925 15.5583C20.3268 15.8526 19.8693 16.009 19.4 16H9.68C9.2107 16.009 8.75318 15.8526 8.38755 15.5583M7.68 14.39L8.38755 15.5583" stroke="#020F59" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </Link>
                        <Link to="/favorite" className="user__actions-link">
                            {lenFavorite === 0 ? null : <div className="user__actions-circle">{lenFavorite}</div>}
                            <svg className="user__actions-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" fill="white" />
                                <path d="M20.8401 4.61012C20.3294 4.09912 19.7229 3.69376 19.0555 3.4172C18.388 3.14064 17.6726 2.99829 16.9501 2.99829C16.2276 2.99829 15.5122 3.14064 14.8448 3.4172C14.1773 3.69376 13.5709 4.09912 13.0601 4.61012L12.0001 5.67012L10.9401 4.61012C9.90843 3.57842 8.50915 2.99883 7.05012 2.99883C5.59109 2.99883 4.19181 3.57842 3.16012 4.61012C2.12843 5.64181 1.54883 7.04108 1.54883 8.50012C1.54883 9.95915 2.12843 11.3584 3.16012 12.3901L4.22012 13.4501L12.0001 21.2301L19.7801 13.4501L20.8401 12.3901C21.3511 11.8794 21.7565 11.2729 22.033 10.6055C22.3096 9.93801 22.4519 9.2226 22.4519 8.50012C22.4519 7.77763 22.3096 7.06222 22.033 6.39476C21.7565 5.7273 21.3511 5.12087 20.8401 4.61012Z" fill="#020F59" />
                            </svg>

                        </Link>
                    </div>
                </div>
            </div>

        </header >
    )
}

export default Header
