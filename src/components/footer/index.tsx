import footerLogo from '../../assets/images/footer-logo.png'
import facebook from "../../assets/images/facebook.svg"
import whatsapp from "../../assets/images/whatsapp.svg"
import vk from "../../assets/images/vk.svg"
import instagram from "../../assets/images/instagram.svg"
import telegram from "../../assets/images/telegram.svg"

import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__items">
                    <div className="footer__item">
                        <Link to="/">
                            <img src={footerLogo} alt="" className="foooter__logo" />
                        </Link>
                        <Link to="/politics" className="footer__item-politics">Политика конфиденциальности</Link>
                        <p className="footer__item-ip">ИНН 672208547140</p>
                        <a href="mailto:bondarev.vlad.01@gmail.com" className="footer__item-link">Разработка сайта bondarev.vlad.01@gmail.com</a>
                    </div>

                    <div className="footer__item">
                        <h4 className="footer__item-title">ИНФОРМАЦИЯ</h4>
                        <ul className="footer__item-list">
                            <li className="item-list__item">
                                <Link to="/studio-two" className="item-list__link">Студия</Link>
                            </li>
                            <li className="item-list__item">
                                <Link to="/about" className="item-list__link">О нас</Link>
                            </li>
                            <li className="item-list__item">
                                <Link to="/delivery" className="item-list__link">Доставка и Оплата</Link>
                            </li>
                            <li className="item-list__item">
                                <Link to="/guarantee" className="item-list__link">Гарантии</Link>
                            </li>
                            <li className="item-list__item">
                                <Link to="/" className="item-list__link">Отзывы</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__item">
                        <h4 className="footer__item-title">ПОКУПАТЕЛЯМ</h4>
                        <ul className="footer__item-list">
                            <li className="item-list__item">
                                <Link to="/diamond-as-a-gift" className="item-list__link">Бриллиант в подарок</Link>
                            </li>
                            <li className="item-list__item">
                                <Link to="/how-to-choose" className="item-list__link">Как выбрать обручальные кольца</Link>
                            </li>
                            <li className="item-list__item">
                                <Link to="/wear-an-engagement-ring" className="item-list__link">О помолвочных кольцах</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__item">
                        <h4 className="footer__item-title">АССОРТИМЕНТ</h4>
                        <ul className="footer__item-list">
                            <li className="item-list__item">
                                <Link to="/catalog" className='item-list__link'>Все обручальные кольца</Link>
                            </li>
                            <li className="item-list__item">
                                <Link to="/make-an-order" className='item-list__link'>Необычные обручальные кольца</Link>
                            </li>
                            <li className="item-list__item">
                                <Link to="/catalog" className='item-list__link'>Классические обручальные кольца</Link>
                            </li>
                            <li className="item-list__item">
                                <Link to="/catalog" className='item-list__link'>Помолвочные кольца</Link>
                            </li>
                            <li className="item-list__item">
                                <Link to="/catalog" className='item-list__link'>Кольца с лебедями</Link>
                            </li>
                            <li className="item-list__item">
                                <Link to="/catalog" className='item-list__link'>Обручальные кольца парные</Link>
                            </li>
                        </ul>
                    </div>


                    <div className="footer__item">
                        <h4 className="footer__item-title">КОНТАКТЫ</h4>
                        <ul className="footer__item-list">
                            <li className="item-list__item">
                                <a href="tel:+79778412340" className="footer__item-phone">+7(977) 841 23 40</a>
                            </li>
                            <li className="item-list__item">
                                <a href="tel:+74999408777" className="footer__item-phone">+7(499) 940 87 77</a>
                            </li>

                            <li className="item-list__item">
                                <a href="#" className="footer__item-adres">Москва, Большой Кисловский переулок, 5-7с1</a>
                            </li>
                            <li className="item-list__item">
                                <a href="mailto:info@art-rings.ru" className="footer__item-mail">info@art-rings.ru</a>
                            </li>

                        </ul>

                        <div className="user-actions">
                            <a href="#" className="header__item-link">
                                <img src={facebook} alt="" />
                            </a>
                            <a href="#" className="header__item-link">
                                <img src={vk} alt="" />
                            </a>
                            <a href="#" className="header__item-link">
                                <img src={whatsapp} alt="" />
                            </a>
                            <a href="#" className="header__item-link">
                                <img src={instagram} alt="" />
                            </a>
                            <a href="#" className="header__item-link">
                                <img src={telegram} alt="" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
