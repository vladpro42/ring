import { Link } from "react-router-dom"
import facebook from "../../assets/images/facebook.svg"
import whatsapp from "../../assets/images/whatsapp.svg"
import vk from "../../assets/images/vk.svg"
import instagram from "../../assets/images/instagram.svg"
import telegram from "../../assets/images/telegram.svg"

import "./BurgerMenu.scss"
import BtnClose from "../../UI/BtnClose"

type Props = {
    className: string,
    burgerClose: () => void,
}


const BurgerMenu = ({ className, burgerClose }: Props) => {
    return (
        <div onClick={burgerClose} className={[className, "burger"].join(" ")}>
            <div className="burger__container">
                <div onClick={e => e.stopPropagation()} className="burger__inner">
                    <button onClick={burgerClose} className="burger__close">
                        <BtnClose />
                    </button>
                    <a href="#" className="burger__logo">
                        <img className="burger__logo-img" src="/images/logo_modal.png" alt="" />
                    </a>
                    <nav className="burger__nav">
                        <ul className="burger__nav-list">
                            <li className="burger__nav-item">
                                <Link to={'/studio-two'} className="burger__nav-link">Студия</Link>
                            </li>
                            <li className="burger__nav-item">
                                <Link to={'/about'} className="burger__nav-link">О нас</Link>
                            </li>
                            <li className="burger__nav-item">
                                <Link to={'/delivery'} className="burger__nav-link">Доставка и оплата</Link>
                            </li>
                            <li className="burger__nav-item">
                                <Link to={'/guarantee'} className="burger__nav-link">Гарантии</Link>
                            </li>
                            <li className="burger__nav-item">
                                <Link to={'/contacts'} className="burger__nav-link">Контакты</Link>
                            </li>
                        </ul>
                        <ul className="burger__mobile-list">
                            <li className="burger__mobile-item">
                                <Link className="burger__mobile-link" to="/catalog-weddingRings">ОБРУЧАЛЬНЫЕ КОЛЬЦА</Link>
                            </li>
                            <li className="burger__mobile-item">
                                <Link className="burger__mobile-link" to="/catalog-engagementRings">ПОМОЛВОЧНЫЕ КОЛЬЦА</Link>
                            </li>
                            <li className="burger__mobile-item">
                                <Link className="burger__mobile-link" to="/catalog-weddingDuets">СВАДЕБНЫЕ ДУЭТЫ</Link>
                            </li>
                            <li className="burger__mobile-item">
                                <Link className="burger__mobile-link" to="/make-an-order">НА ЗАКАЗ</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="burger__footer">
                        <ul className="burger__footer-list">
                            <li className="burger__footer-item">
                                <Link className="burger__footer-link" to="/">Все обручальные кольца</Link>
                            </li>
                            <li className="burger__footer-item">
                                <Link className="burger__footer-link" to="/catalog-weddingRings">Необычные обручальные кольца</Link>
                            </li>
                            <li className="burger__footer-item">
                                <Link className="burger__footer-link" to="/catalog-weddingRings">Классические обручальные кольца</Link>
                            </li>
                            <li className="burger__footer-item">
                                <Link className="burger__footer-link" to="/catalog-weddingRings">Помолвочные кольца</Link>
                            </li>
                            <li className="burger__footer-item">
                                <Link className="burger__footer-link" to="/catalog-weddingRings">Кольца с лебедями</Link>
                            </li>
                            <li className="burger__footer-item">
                                <Link className="burger__footer-link" to="/catalog-weddingRings">Обручальные кольца парные</Link>
                            </li>
                        </ul>
                        <ul className="burger__footer-list burger__footer-list--mobile">
                            <li className="burger__footer-item">
                                <Link className="burger__footer-link" to="/studio-two">Студия</Link>
                            </li>
                            <li className="burger__footer-item">
                                <Link className="burger__footer-link" to="/about">О нас</Link>
                            </li>
                            <li className="burger__footer-item">
                                <Link className="burger__footer-link" to="/contacts">Контакты</Link>
                            </li>
                            <li className="burger__footer-item">
                                <Link className="burger__footer-link" to="/delivery">Доставка и Оплата</Link>
                            </li>
                            <li className="burger__footer-item">
                                <Link className="burger__footer-link" to="/guarantee">Гарантии</Link>
                            </li>
                            <li className="burger__footer-item">
                                <Link className="burger__footer-link" to="/">Отзывы</Link>
                            </li>
                        </ul>
                        <div className="burger__footer-box">
                            <ul className="burger__footer-list burger__footer-list--social">
                                <li className="burger__footer-item">
                                    <Link to="/diamond-as-a-gift" className="burger__footer-link">Бриллиант в подарок</Link>
                                </li>
                                <li className="burger__footer-item">
                                    <Link to="/how-to-choose" className="burger__footer-link">Как выбрать обручальные кольца</Link>
                                </li>
                                <li className="burger__footer-item">
                                    <Link to="/wear-an-engagement-ring" className="burger__footer-link">О помолвочных кольцах</Link>
                                </li>
                            </ul>
                            <ul className="burger__social-list">
                                <li className="burger__social-item">
                                    <a href="#" className="burger__social-link">
                                        <img src={facebook} alt="" />
                                    </a>
                                </li>
                                <li className="burger__social-item">
                                    <a href="#" className="burger__social-link">
                                        <img src={vk} alt="" />
                                    </a>
                                </li>
                                <li className="burger__social-item">
                                    <a href="#" className="burger__social-link">
                                        <img src={whatsapp} alt="" />
                                    </a>
                                </li>
                                <li className="burger__social-item">
                                    <a href="#" className="burger__social-link">
                                        <img src={instagram} alt="" />
                                    </a>
                                </li>
                                <li className="burger__social-item">
                                    <a href="#" className="burger__social-link">
                                        <img src={telegram} alt="" />
                                    </a>
                                </li>
                            </ul>
                            <div className="burger__contacts">
                                <h3 className="burger__contacts-title">КОНТАКТЫ</h3>
                                <div className="burger__wrapper">
                                    <div className="burger__wrapper-box">
                                        <a href="" className="burger__wrapper-link">
                                            +7(977) 841 23 40
                                        </a>
                                        <a href="" className="burger__wrapper-link">
                                            +7(499) 940 87 77
                                        </a>
                                        <a href="" className="burger__wrapper-email">info@art-rings.ru</a>
                                    </div>
                                    <div className="burger__wrapper-box">
                                        <a href="" className="burger__wrapper-map">
                                            Москва, Большой Кисловский переулок, 5-7с1
                                        </a>
                                        <a href="" className="burger__wrapper-schedule">
                                            пн-пт 11:00-20:00
                                        </a>
                                        <a href="" className="burger__wrapper-schedule">сб, вс 11:00-17:00</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { BurgerMenu }
