import './App.css'
import './scss/style.scss'

import map from "./assets/images/map.svg"
import mail from "./assets/images/mail.svg"


function App() {

    return (
        <>
            <header className='header'>
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
                        <li className="header__item">
                            <a href="" className="header__item-link">пн-пт 11:00-20:00</a>
                            <a href="" className="header__item-link">сб, вс 11:00-17:00</a>
                        </li>
                        <li className="header__item">
                            <a href="" className="header__item-link">+7 (499) 940-87-77</a>
                            <a href="" className="header__item-link">+7 (977) 841-23-40</a>
                        </li>
                        <li className="header__item">
                            <a href="" className="header__item-link">
                                <img src="./assets/images/facebook.svg" alt="" />
                            </a>
                            <a href="" className="header__item-link">
                                <img src="./assets/images/vk.svg" alt="" />
                            </a>
                            <a href="" className="header__item-link">
                                <img src="./assets/images/viber.svg" alt="" />
                            </a>
                            <a href="" className="header__item-link">
                                <img src="./assets/images/instagram.svg" alt="" />
                            </a>
                            <a href="" className="header__item-link">
                                <img src="./assets/images/telegram.svg" alt="" />
                            </a>
                        </li>
                    </ul>
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
                            <input type="text" className='header__search-input' />
                            <img src="./assets/images/lupa.svg" alt="" />
                        </search>
                    </div>
                    <div className='header__company'>
                        <h1 className='header__company-title'>ART-RINGS</h1>
                        <p className="header__company-subtitle">MOSCOW JEWELRY STUDIO</p>
                    </div>
                    <div className="header__footer">
                        <a href="#" className="logo">
                            <img src="./assets/images/logo.png" alt="" />
                        </a>
                        <span className="burger"></span>
                        <ul className="header__footer-list">
                            <li className="header__footer-item">
                                <a href="#" className="header__footer-link">ОБРУЧАЛЬНЫЕ КОЛЬЦА</a>
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
                                <img src="./assets/images/basket.svg" alt="" />
                            </a>
                            <a href="#" className="user__actions-link">
                                <img src="./assets/images/favorite.svg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <main className='main'>

                <section className='top'>
                    <div className="container">
                        <h2 className='top__title'>Oсобенные обручальные кольца</h2>
                        {/* slider !!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
                        <div className="slider">
                            <img src="./assets/images/slide-1.jpg" alt="" />
                        </div>
                        <div className="dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="top__briliant">
                            <img src="./assets/images/briliant.svg" alt="" />
                            <p className="top__briliant-text">Бриллиант в подарок</p>
                        </div>
                    </div>
                </section>

                <section className="catalog">
                    <div className="container">
                        <h3 className="catalog__title title">КАТАЛОГ</h3>
                        <div className="catalog__menu">
                            <a href="#" className="catalog__menu-link">ОБРУЧАЛЬНЫЕ КОЛЬЦА</a>
                        </div>
                        <div className="catalog__menu">
                            <a href="#" className="catalog__menu-link">ПОМОЛВОЧНЫЕ КОЛЬЦА</a>
                        </div>
                        <div className="catalog__menu">
                            <a href="#" className="catalog__menu-link">СВАДЕБНЫЕ ДУЭТЫ</a>
                        </div>
                        <div className="catalog__menu">
                            <a href="#" className="catalog__menu-link">НА ЗАКАЗ</a>
                        </div>
                    </div>
                </section>

                <section className='new-items'>
                    <div className="container">
                        <div className="title new-items__title">НОВИНКИ</div>
                        <ul className="new-items__slider">
                            <li className="new-items__slide">
                                <div className="new-items__slide-item">
                                    <p className="new-items__slide-article">Арт. 019</p>
                                    <div className="raiting">
                                        <img src="./assets/images/star.svg" alt="" />
                                        <img src="./assets/images/star.svg" alt="" />
                                        <img src="./assets/images/star.svg" alt="" />
                                        <img src="./assets/images/star.svg" alt="" />
                                    </div>
                                </div>
                                <div className="new-items__slide-item">
                                    <img src="./assets/images/new-items-slider-1.png" alt="" />
                                </div>
                                <div className="new-items__slide-item">
                                    <img src="./assets/images/favorite.svg" alt="" />
                                    <div className="new-items__slide-price">59 600 ₽</div>
                                </div>
                            </li>
                            <li className="new-items__slide">
                                <div className="new-items__slide-item">
                                    <p className="new-items__slide-article">Арт. 019</p>
                                    <div className="raiting">
                                        <img src="./assets/images/star.svg" alt="" />
                                        <img src="./assets/images/star.svg" alt="" />
                                        <img src="./assets/images/star.svg" alt="" />
                                        <img src="./assets/images/star.svg" alt="" />
                                    </div>
                                </div>
                                <div className="new-items__slide-item">
                                    <img src="./assets/images/new-items-slider-2.png" alt="" />

                                </div>
                                <div className="new-items__slide-item">
                                    <img src="./assets/images/favorite.svg" alt="" />
                                    <div className="new-items__slide-price">59 600 ₽</div>
                                </div>
                            </li>
                            <li className="new-items__slide">
                                <div className="new-items__slide-item">
                                    <p className="new-items__slide-article">Арт. 019</p>
                                    <div className="raiting">
                                        <img src="./assets/images/star.svg" alt="" />
                                        <img src="./assets/images/star.svg" alt="" />
                                        <img src="./assets/images/star.svg" alt="" />
                                        <img src="./assets/images/star.svg" alt="" />
                                    </div>
                                </div>
                                <div className="new-items__slide-item">
                                    <img src="./assets/images/new-items-slider-3.png" alt="" />

                                </div>
                                <div className="new-items__slide-item">
                                    <img src="./assets/images/favorite.svg" alt="" />
                                    <div className="new-items__slide-price">59 600 ₽</div>
                                </div>
                            </li>
                            <li className="new-items__slide">
                                <div className="new-items__slide-item">
                                    <p className="new-items__slide-article">Арт. 019</p>
                                    <div className="raiting">
                                        <img src="./assets/images/star.svg" alt="" />
                                        <img src="./assets/images/star.svg" alt="" />
                                        <img src="./assets/images/star.svg" alt="" />
                                        <img src="./assets/images/star.svg" alt="" />
                                    </div>
                                </div>
                                <div className="new-items__slide-item">
                                    <img src="./assets/images/new-items-slider-5.png" alt="" />
                                </div>
                                <div className="new-items__slide-item">
                                    <img src="./assets/images/favorite.svg" alt="" />
                                    <div className="new-items__slide-price">59 600 ₽</div>
                                </div>
                            </li>
                            <li className="new-items__slide">
                                <div className="new-items__slide-item">
                                    <p className="new-items__slide-article">Арт. 019</p>
                                    <div className="raiting">
                                        <img src="./assets/images/star.svg" alt="" />
                                        <img src="./assets/images/star.svg" alt="" />
                                        <img src="./assets/images/star.svg" alt="" />
                                        <img src="./assets/images/star.svg" alt="" />
                                    </div>
                                </div>
                                <div className="new-items__slide-item">
                                    <img src="./assets/images/new-items-slider-3.png" alt="" />

                                </div>
                                <div className="new-items__slide-item">
                                    <img src="./assets/images/favorite.svg" alt="" />
                                    <div className="new-items__slide-price">59 600 ₽</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div className="container">
                    <div className="footer__items">
                        <div className="footer__item">
                            <img src="./assets/images/footer-logo.png" alt="" className="foooter__logo" />
                            <p className="footer__item-politics">Политика конфиденциальности</p>
                            <p className="footer__item-ip">ИНН 672208547140</p>
                            <a href="#" className="footer__item-link">Разработка сайта bondarev.vlad.01@gmail.com</a>
                        </div>

                        <div className="footer__item">
                            <h4 className="footer__item-title">ИНФОРМАЦИЯ</h4>
                            <ul className="footer__item-list">
                                <li className="item-list__item">
                                    <a href="#" className="item-list__item">Студия</a>
                                </li>
                                <li className="item-list__item">
                                    <a href="#" className="item-list__item">О нас</a>
                                </li>
                                <li className="item-list__item">
                                    <a href="#" className="item-list__item">Доставка и Оплата</a>
                                </li>
                                <li className="item-list__item">
                                    <a href="#" className="item-list__item">Гарантии</a>
                                </li>
                                <li className="item-list__item">
                                    <a href="#" className="item-list__item">Отзывы</a>
                                </li>
                            </ul>
                        </div>

                        <div className="footer__item">
                            <h4 className="footer__item-title">ПОКУПАТЕЛЯМ</h4>
                            <ul className="footer__item-list">
                                <li className="item-list__item">
                                    <a href="#" className="item-list__item">Бриллиант в подарок</a>
                                </li>
                                <li className="item-list__item">
                                    <a href="#" className="item-list__item">Как выбрать обручальные кольца</a>
                                </li>
                                <li className="item-list__item">
                                    <a href="#" className="item-list__item">О помолвочных кольцах</a>
                                </li>
                            </ul>
                        </div>

                        <div className="footer__item">
                            <h4 className="footer__item-title">АССОРТИМЕНТ</h4>
                            <ul className="footer__item-list">
                                <li className="item-list__item">
                                    <a href="#" className="item-list__item">Все обручальные кольца</a>
                                </li>
                                <li className="item-list__item">
                                    <a href="#" className="item-list__item">Необычные обручальные кольца</a>
                                </li>
                                <li className="item-list__item">
                                    <a href="#" className="item-list__item">Классические обручальные кольца </a>
                                </li>
                                <li className="item-list__item">
                                    <a href="#" className="item-list__item">Помолвочные кольца</a>
                                </li>
                                <li className="item-list__item">
                                    <a href="#" className="item-list__item">Кольца с лебедями</a>
                                </li>
                                <li className="item-list__item">
                                    <a href="#" className="item-list__item">Обручальные кольца парные</a>
                                </li>
                            </ul>
                        </div>


                        <div className="footer__item">
                            <h4 className="footer__item-title">КОНТАКТЫ</h4>

                            <a href="tel:+79778412340" className="footer__item-phone">+7(977) 841 23 40</a>
                            <a href="tel:+74999408777" className="footer__item-phone">+7(499) 940 87 77</a>
                            <a href="#" className="footer__item-adres">Москва, Большой Кисловский переулок, 5-7с1</a>
                            <a href="mailto:info@art-rings.ru" className="footer__item-mail"> info@art-rings.ru</a>
                            {/*Вставить компонет из хедера */}
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default App
