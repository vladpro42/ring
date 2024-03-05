import Footer from "../../components/footer"
import Header from "../../components/header"
import SwiperTwo from "../../components/SwiperTwo"


import "./makeAnOrder.scss"

import sale from "../../assets/images/catalo-sale.jpg"
import orderSlider1 from "../../assets/images/order-slider-1.png"
import orderSlider2 from "../../assets/images/order-slider-2.png"
import orderSlider3 from "../../assets/images/order-slider-3.png"

import { SwiperSlide, Swiper } from "swiper/react"

import "swiper/css"
import "swiper/css/scrollbar"
import "swiper/css/navigation"
import { Navigation, Scrollbar } from "swiper/modules"

const example = [orderSlider1, orderSlider2, orderSlider3, orderSlider1, orderSlider2, orderSlider3]

const MakeAnOrder = () => {
    return (
        <>
            <Header />
            <main className="order-page">
                <section className="order-page__section">
                    <div className="container">
                        <h1 className="order-page__title">СОЗДАЙТЕ СВОЕ УНИКАЛЬНОЕ УКРАШЕНИЕ</h1>
                        <p className="order-page__sub-title">Загрузите фото с любым украшением и мы с радостью изготовим его для вас</p>
                        <button className="order-page__btn">РАССЧИТАТЬ СТОИМОСТЬ</button>
                    </div>
                </section>
                <div className="order-page__example">
                    <div className="container">
                        <h2 className="order-page__example-title">ПРИМЕРЫ РАБОТ</h2>
                        <ul className="order-page__example-list">
                            <Swiper
                                navigation={true}
                                slidesPerView={3}
                                scrollbar={{ draggable: true }}
                                modules={[Scrollbar, Navigation]}
                            >
                                {example.map(item => <SwiperSlide>
                                    <li className="order-page__example-item">
                                        <img className="order-page__example-img" src={item} alt="" />
                                    </li>
                                </SwiperSlide>)}
                            </Swiper>

                        </ul>
                    </div>
                </div>


                <section className="order-page__todo">
                    <div className="container">
                        <h2 className="order-page__todo-title">КАК МЫ ЭТО ДЕЛАЕМ</h2>
                        <ul className="order-page__todo-list">
                            <li className="order-page__todo-item">
                                <p className="order-page__item-stage">1 этап</p>
                                <h3 className="order-page__item-title">СОЗДАНИЕ КОНЦЕПЦИИ</h3>
                                <p className="order-page__item-text">На этом этапе мы помогаем Вам определиться с концепцией будущего украшения, металлом, подбираем вставки, рассчитываем примерную стоимость готового изделия.</p>
                                <p className="order-page__item-time">1-3 дня</p>
                            </li>
                            <li className="order-page__todo-item">
                                <p className="order-page__item-stage">2 этап</p>
                                <h3 className="order-page__item-title">РАЗРАБОТКА ДИЗАЙНА</h3>
                                <p className="order-page__item-text">Исходя из информации, полученной от Вас ранее, дизайнеры готовят эскизы будущего изделия.</p>
                                <p className="order-page__item-time">5-15 дней</p>
                            </li>
                            <li className="order-page__todo-item">
                                <p className="order-page__item-stage">3 этап</p>
                                <h3 className="order-page__item-title">изготовление</h3>
                                <p className="order-page__item-text">Согласованный дизайн передается ювелирам, которые изготавливают будущее украшение. </p>
                                <p className="order-page__item-time">1-3 дня</p>
                            </li>
                            <li className="order-page__todo-item">
                                <p className="order-page__item-stage">4 этап</p>
                                <h3 className="order-page__item-title">ДОСТАВКА и оплата</h3>
                                <p className="order-page__item-text">Выполненный заказ передается клиенту. Заказ комплектуется всеми необходимыми сертификатами (при наличии), гарантией, подарочным футляром.</p>
                                <p className="order-page__item-time">1-3 дня</p>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="order-page__form-section">
                    <div className="container">
                        <div className="order-page__form-wrapper">
                            <form className="order-page__form">
                                <h2 className="order-page__form-title">ОСТАВИТЬ ЗАЯВКУ</h2>
                                <div className="order-page__form-header">
                                    <label className="order-page__label">
                                        <span className="order-page__span">Ваше имя</span>
                                        <input className="order-page__input" type="text" />
                                    </label>
                                    {/* compinent from other page  */}
                                    <label className="cart-page__input-file">
                                        ЗАГРУЗИТЬ ФОТО
                                        <input type="file" />
                                    </label>
                                </div>
                                <div className="order-page__block">
                                    <label className="order-page__label">
                                        <span className="order-page__span">Ваш e-mail</span>
                                        <input className="order-page__input" type="text" />
                                    </label>
                                    <label className="order-page__label">
                                        <span className="order-page__span">Ваш телефон</span>
                                        <input className="order-page__input" type="text" />
                                    </label>
                                </div>
                                <span className="order-page__span">Комментарий</span>
                                <textarea className="order-page__textarea"></textarea>
                                <button className="order-page__submit">РАССЧИТАТЬ СТОИМОСТЬ</button>
                            </form>
                            <img className="order-page__sale" src={sale} alt="" />
                        </div>
                    </div>
                </section>


            </main>
            <Footer />
        </>
    )
}

export default MakeAnOrder
