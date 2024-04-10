import Footer from "../../components/footer"
import Header from "../../components/header"
import Form from "./form/index"


import "./makeAnOrder.scss"

import sale from "../../assets/images/catalo-sale.jpg"
import orderSlider1 from "../../assets/images/order-slider-1.png"
import orderSlider2 from "../../assets/images/order-slider-2.png"
import orderSlider3 from "../../assets/images/order-slider-3.png"


import "swiper/css"
import "swiper/css/scrollbar"
import "swiper/css/navigation"
import "swiper/css"


import { SwiperSlide, Swiper } from "swiper/react"
import { Navigation, Pagination, Scrollbar } from "swiper/modules"
import { ScrollRestoration } from "react-router-dom"

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
                                slidesPerView={1}
                                breakpoints={{

                                    375: {
                                        scrollbar: false
                                    },

                                    1000: {
                                        width: 1000,
                                        slidesPerView: 3,
                                        scrollbar: true
                                    },
                                }}
                                pagination={true}
                                navigation={true}
                                scrollbar={{ draggable: true }}
                                modules={[Scrollbar, Navigation, Pagination]}
                            >
                                {example.map((item, i) => <SwiperSlide key={i}>
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

                            <Form />
                            <picture>
                                <source srcSet="/images/banner-mobile.jpg" media="(max-width: 1400px)" />
                                <img className="order-page__sale" src={sale} alt="" />
                            </picture>
                        </div>
                    </div>
                </section>

            </main >
            <ScrollRestoration />
            <Footer />
        </>
    )
}

export default MakeAnOrder
