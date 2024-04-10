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

import SwiperNewsWithScrollbar from "../../components/SwiperNewsWithScrollbar";
import { useAppSelector } from "../../hooks/redux/hooks";
import { selectArrRings, selectRingsStatus } from "../../redux/rings/ringsReducer";
import Spinner from "../../components/Spinner";
import { useEffect, useState } from "react";
import ProductCart from "../../components/ProductCart";


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

    const [isMobile, setIsMobile] = useState(false)


    useEffect(() => {
        if (document.documentElement.clientWidth <= 1000) {
            setIsMobile(true)
        }
    }, [])


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
                            {!isMobile ? <SwiperNewsWithScrollbar /> : (rings.map((ring) => <ProductCart cart={ring} key={ring.id} />))}
                        </ul>

                        <Link className="new-items__show-more" to={'/catalog-weddingRings'}>
                            ПОКАЗАТЬ ЕЩЁ
                            <svg className="new-items__shape" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2" />
                            </svg>

                        </Link>
                    </div>
                </section>
                <ScrollRestoration />
            </main >

            <Footer />
        </>
    )
}

export default StartPage
