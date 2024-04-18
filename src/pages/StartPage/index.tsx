import slide1 from "../../assets/images/top-bg.jpg"
import Slider, { Settings } from 'react-slick'
import briliant from "../../assets/images/briliant.svg"
import Footer from "../../components/footer";
import Header from "../../components/header";
import { Link, ScrollRestoration } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import 'swiper/css/scrollbar'
import 'swiper/css'
import 'swiper/css/navigation';
import "./start-page.scss"

import { useAppSelector } from "../../hooks/redux/hooks";
import { selectArrRings, selectRingByIds, selectRingsStatus } from "../../redux/rings/ringsReducer";
import Spinner from "../../components/Spinner";
import ProductCart from "../../components/ProductCart";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper/modules";
import { useState } from "react";


const StartPage = () => {

    const settings: Settings = {
        arrows: false,
        autoplay: true,
        dots: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: () => <div className='slider__dots'>
        </div >
    };

    const status = useAppSelector(selectRingsStatus)
    const rings = useAppSelector(selectArrRings)

    // Новинки
    const ringIds = [1, 2, 3, 4]
    const [showNewRings, setShowNewRings] = useState(6)
    const isShowNewRings = showNewRings >= rings.length
    const slides = useAppSelector(state => selectRingByIds(state, ringIds))


    const showMoreNewRing = () => {
        if (showNewRings < rings.length) {
            setShowNewRings(showNewRings + 3)
            return
        }
        return
    }

    if (status === 'loading') {
        return <Spinner />
    }

    return (
        <>
            <Header />
            <main className='main'>

                <section className='top'>
                    <h2 className='top__title'>Oсобенные обручальные кольца</h2>
                    <Slider className='slider' {...settings}>
                        <img className='top__slide' src={slide1} alt="" />
                        <img className='top__slide' src={slide1} alt="" />
                        <img className='top__slide' src={slide1} alt="" />
                    </Slider>

                    <div className="top__briliant">
                        <div>
                            <img src={briliant} alt="" />
                        </div>
                        <p className="top__briliant-text">Бриллиант в подарок</p>
                    </div>
                </section>

                <section className="catalog">
                    <div className="container">
                        <h3 className="catalog__title">КАТАЛОГ</h3>
                        <div className="catalog__menu">
                            <div className='catalog__menu-item'>
                                <Link to="catalog-weddingRings" className="catalog__menu-link">ОБРУЧАЛЬНЫЕ КОЛЬЦА</Link>
                            </div>
                            <div className='catalog__menu-item'>
                                <Link to="catalog-engagementRings" className="catalog__menu-link">ПОМОЛВОЧНЫЕ КОЛЬЦА</Link>
                            </div>
                            <div className='catalog__menu-item'>
                                <Link to="catalog-weddingDuets" className="catalog__menu-link">СВАДЕБНЫЕ ДУЭТЫ</Link>
                            </div>
                            <div className='catalog__menu-item'>
                                <Link to="make-an-order" className="catalog__menu-link">НА ЗАКАЗ</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='new-items'>
                    <div className="container">
                        <h3 className=" new-items__title">НОВИНКИ</h3>
                        <ul className="new-items__slider">
                            <Swiper
                                navigation={true}
                                slidesPerView={3}
                                scrollbar={{ draggable: true }}
                                modules={[Scrollbar, Navigation]}
                                className="mySwiper"
                            >
                                {
                                    slides && slides.map(cart => < SwiperSlide key={cart.id}>
                                        <ProductCart to={`/catalog-weddingRings/${cart.id}`} cart={cart} />
                                    </SwiperSlide>)
                                }
                            </Swiper >
                        </ul>

                        <ul className="new-items__slider-mobile">
                            {rings.map((ring, index) => {
                                if (index < showNewRings) {
                                    return <ProductCart className="new-items__slide-mobile" cart={ring} key={ring.id} />
                                } else {
                                    return
                                }
                            })}
                        </ul>

                        <button onClick={showMoreNewRing}
                            className={isShowNewRings ? "new-items__show-more new-items__show-more--disable" : "new-items__show-more"}
                        >
                            ПОКАЗАТЬ ЕЩЁ
                            <svg className="new-items__shape" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2" />
                            </svg>

                        </button>
                    </div>
                </section>
                <ScrollRestoration />
            </main >

            <Footer />
        </>
    )
}

export default StartPage
