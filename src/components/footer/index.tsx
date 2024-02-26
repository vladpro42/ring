import footerLogo from '../../assets/images/footer-logo.png'
import facebook from "../../assets/images/facebook.svg"
import whatsapp from "../../assets/images/whatsapp.svg"
import vk from "../../assets/images/vk.svg"
import instagram from "../../assets/images/instagram.svg"
import telegram from "../../assets/images/telegram.svg"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__items">
                    <div className="footer__item">
                        <img src={footerLogo} alt="" className="foooter__logo" />
                        <p className="footer__item-politics">Политика конфиденциальности</p>
                        <p className="footer__item-ip">ИНН 672208547140</p>
                        <a href="#" className="footer__item-link">Разработка сайта bondarev.vlad.01@gmail.com</a>
                    </div>

                    <div className="footer__item">
                        <h4 className="footer__item-title">ИНФОРМАЦИЯ</h4>
                        <ul className="footer__item-list">
                            <li className="item-list__item">
                                <a href="#" className="item-list__link">Студия</a>
                            </li>
                            <li className="item-list__item">
                                <a href="#" className="item-list__link">О нас</a>
                            </li>
                            <li className="item-list__item">
                                <a href="#" className="item-list__link">Доставка и Оплата</a>
                            </li>
                            <li className="item-list__item">
                                <a href="#" className="item-list__link">Гарантии</a>
                            </li>
                            <li className="item-list__item">
                                <a href="#" className="item-list__link">Отзывы</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__item">
                        <h4 className="footer__item-title">ПОКУПАТЕЛЯМ</h4>
                        <ul className="footer__item-list">
                            <li className="item-list__item">
                                <a href="#" className="item-list__link">Бриллиант в подарок</a>
                            </li>
                            <li className="item-list__item">
                                <a href="#" className="item-list__link">Как выбрать обручальные кольца</a>
                            </li>
                            <li className="item-list__item">
                                <a href="#" className="item-list__link">О помолвочных кольцах</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__item">
                        <h4 className="footer__item-title">АССОРТИМЕНТ</h4>
                        <ul className="footer__item-list">
                            <li className="item-list__item">
                                <a href="#" className="item-list__link">Все обручальные кольца</a>
                            </li>
                            <li className="item-list__item">
                                <a href="#" className="item-list__link">Необычные обручальные кольца</a>
                            </li>
                            <li className="item-list__item">
                                <a href="#" className="item-list__link">Классические обручальные кольца </a>
                            </li>
                            <li className="item-list__item">
                                <a href="#" className="item-list__link">Помолвочные кольца</a>
                            </li>
                            <li className="item-list__item">
                                <a href="#" className="item-list__link">Кольца с лебедями</a>
                            </li>
                            <li className="item-list__item">
                                <a href="#" className="item-list__link">Обручальные кольца парные</a>
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
                                <a href="mailto:info@art-rings.ru" className="footer__item-mail"> info@art-rings.ru</a>

                            </li>

                        </ul>
                        <li className="user-actions">
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
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
