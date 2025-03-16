<<<<<<< HEAD
import {Swiper, SwiperSlide} from "swiper/react"

import cartProduct1 from "/images/new-items-1.jpg"
import cartProduct2 from "/images/new-items-2.jpg"
import cartProduct3 from "/images/new-items-3.jpg"
import cartProduct4 from "/images/new-items-4.jpg"
import cartProduct5 from "/images/new-items-5.jpg"
import cartProduct6 from "/images/new-items-6.jpg"
import cartProduct7 from "/images/new-items-7.jpg"
import cartProduct8 from "/images/new-items-8.jpg"
import cartProduct9 from "/images/new-items-9.jpg"
import cartProduct10 from "/images/new-items-10.jpg"

import cart360 from "../../../assets/images/cart-360.svg"
import "swiper/css"
import "swiper/css/navigation"

const slides: string[] = [cart360, cartProduct1, cartProduct2, cartProduct3, cartProduct4, cartProduct5, cartProduct6, cartProduct7, cartProduct8, cartProduct9, cartProduct10]
import {Navigation,} from "swiper/modules"

export const SwiperSlider = ({onCLick}: {
    onCLick: (e: React.MouseEvent<HTMLImageElement>) => void
}) => {

    return <div className="cart-page__image-slider">
        <button className="cart-page__slider-btn cart-page__slider-btn--prev">
            <span className="cart-page__btn-box">
                <svg width="14" height="9" viewBox="0 0 14 9" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59"
                          strokeWidth="2"/>
                </svg>
            </span>

        </button>
        <div className="cart-page__image-slides">
            <Swiper
                slidesPerView={5}
                direction="vertical"
                navigation={{
                    prevEl: ".cart-page__slider-btn--prev",
                    nextEl: ".cart-page__slider-btn--next",
                }}

                modules={[Navigation]}

            >
                {
                    slides.map((slide, index) => {
                        return <SwiperSlide key={index}>
                            <img className={"cart-page__image-slide"}
                                 onClick={onCLick} src={slide} alt=""/>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
        <button className="cart-page__slider-btn cart-page__slider-btn--next">
             <span className="cart-page__btn-box">
                <svg width="14" height="9" viewBox="0 0 14 9" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59"
                      strokeWidth="2"/>
            </svg>
            </span>
        </button>
    </div>
}
=======
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type Props = {
    onClick: (e: React.MouseEvent<HTMLImageElement>) => void;
};
/*
const images = [
    { src: cart360, alt: "360-degree view" },
    { src: cartProduct1, alt: "Product image 1" },
    { src: cartProduct2, alt: "Product image 2" },
    { src: cartProduct3, alt: "Product image 3" },
    { src: cartProduct4, alt: "Product image 4" },
    { src: cartProduct1, alt: "Product image 1" },
    { src: cartProduct2, alt: "Product image 2" },
];*/
const images2 = [
    { src: '/images/new-items-2.png', alt: "Product image 1" },
    { src: '/images/new-items-2.png', alt: "Product image 2" },
    { src: '/images/new-items-2.png', alt: "Product image 2" },
    { src: '/images/new-items-2.png', alt: "Product image 2" },
    { src: '/images/new-items-2.png', alt: "Product image 2" },
    { src: '/images/new-items-2.png', alt: "Product image 2" },
    { src: '/images/new-items-2.png', alt: "Product image 2" },
    { src: '/images/new-items-2.png', alt: "Product image 2" },
    { src: '/images/new-items-2.png', alt: "Product image 2" },
    { src: '/images/new-items-2.png', alt: "Product image 2" },
];
export const SwiperSlider = ({ onClick }: Props) => {
    return (
        <div className="inner-left__swiper">
            <button className="cart-page__slider-btn cart-page__slider-btn--prev">
                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2" />
                </svg>
            </button>

            <div className="cart-page__image-slides">
                <Swiper
                    className={'cart-page__left-slider'}
                    slidesPerView={5}
                    direction="vertical"
                    navigation={{
                        prevEl: ".cart-page__slider-btn--prev",
                        nextEl: ".cart-page__slider-btn--next",
                    }}
                    modules={[Navigation]}
                    loop={true} // Добавьте, если нужно зациклить слайдер
                >
                    {images2.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                                className={"left-slider-img"}
                                onClick={onClick}
                                src={image.src}
                                alt={image.alt}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <button className="cart-page__slider-btn cart-page__slider-btn--next">
                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2" />
                </svg>
            </button>
        </div>
    );
};
>>>>>>> dev
