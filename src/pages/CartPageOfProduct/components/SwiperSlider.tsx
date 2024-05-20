import { Swiper, SwiperSlide } from "swiper/react"


import cartProduct1 from "../../../assets/images/cart-product1.jpg"
import cartProduct2 from "../../../assets/images/cart-product2.jpg"
import cartProduct3 from "../../../assets/images/cart-product3.jpg"
import cartProduct4 from "../../../assets/images/cart-product4.jpg"
import cart360 from "../../../assets/images/cart-360.svg"
import "swiper/css"
import "swiper/css/navigation"

import { Navigation, } from "swiper/modules"
export const SwiperSlider = ({ onCLick }: { onCLick: (e: React.MouseEvent<HTMLImageElement>) => void }) => {

    return <div className="cart-page__image-slider">
        <button className="cart-page__slider-btn cart-page__slider-btn--prev">
            <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2" />
            </svg>

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
                <SwiperSlide>
                    <img onClick={onCLick} src={cart360} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img onClick={onCLick} src={cartProduct1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img onClick={onCLick} src={cartProduct2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img onClick={onCLick} src={cartProduct3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img onClick={onCLick} src={cartProduct4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img onClick={onCLick} src={cartProduct1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img onClick={onCLick} src={cartProduct2} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
        <button className="cart-page__slider-btn cart-page__slider-btn--next">
            <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2" />
            </svg>
        </button>
    </div>
}