

import slide1 from "../../assets/images/top-bg.jpg"
import Slider, { Settings } from 'react-slick'
import briliant from "../../assets/images/briliant.svg"
import "slick-carousel/slick/slick.css";
import React, { useEffect, useRef } from 'react'
import { typeDataForCart } from "../../App";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { Link } from "react-router-dom";
import 'swiper/css/scrollbar'
import 'swiper/css'
import 'swiper/css/navigation';
import SwiperWithScrollbar from "../../components/SwiperWithScrollbar";

const StartPage = ({ data }: { data: typeDataForCart }) => {


    const settings: Settings = {
        arrows: false,
        autoplay: true,
        dots: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: () => < div className='slider__dots' >
        </div >

    };

    const maxTranslateX = 900;
    const ref = useRef<any>(null)
    const refSpan = useRef<any>(null)
    const coordinate = useRef({ x: 0 })
    let moving = false

    const handleMouseDown = (e: React.MouseEvent) => {
        moving = true
        coordinate.current = { x: e.clientX }
    }

    const handleMouseMove = (e: any) => {
        if (moving) {
            const offSet = -coordinate.current.x + e.clientX;
            refSpan.current.style.transform = `translateX(${offSet > maxTranslateX ? maxTranslateX : offSet}px)`
        }
    }

    const handleMouseUp = (e: React.MouseEvent<HTMLElement>) => {
        coordinate.current = { x: e.clientX }
        moving = false
    }

    useEffect(() => {
    })

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove)

        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])


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
                                <Link to="catalog" className="catalog__menu-link">ОБРУЧАЛЬНЫЕ КОЛЬЦА</Link>
                            </div>
                            <div className='catalog__menu-item'>
                                <a href="#" className="catalog__menu-link">ПОМОЛВОЧНЫЕ КОЛЬЦА</a>
                            </div>
                            <div className='catalog__menu-item'>
                                <a href="#" className="catalog__menu-link">СВАДЕБНЫЕ ДУЭТЫ</a>
                            </div>
                            <div className='catalog__menu-item'>
                                <a href="#" className="catalog__menu-link">НА ЗАКАЗ</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='new-items'>
                    <div className="container">
                        <h3 className=" new-items__title">НОВИНКИ</h3>
                        <ul ref={ref} className="new-items__slider">
                            <SwiperWithScrollbar />
                        </ul>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default StartPage
