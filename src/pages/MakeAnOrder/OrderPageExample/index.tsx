
import { SwiperSlide, Swiper } from "swiper/react"
import { Navigation, Pagination, Scrollbar } from "swiper/modules"

import orderSlider1 from "../../../assets/images/order-slider-1.png"
import orderSlider2 from "../../../assets/images/order-slider-2.png"
import orderSlider3 from "../../../assets/images/order-slider-3.png"


import "swiper/css"
import "swiper/css/scrollbar"
import "swiper/css/navigation"
import { memo } from "react"
import { ScrollbarOptions } from "swiper/types"

const example = [orderSlider1, orderSlider2, orderSlider3, orderSlider1, orderSlider2, orderSlider3]

const breakpoints = {

    320: {
        slidesPerView: 1,
    },

    500: {
        slidesPerView: 2,
        spaceBetween: `10px`
    },

    992: {
        slidesPerView: 3,
    },


}

const scrollbar: ScrollbarOptions = { draggable: true, }
const modules = [Scrollbar, Navigation, Pagination]


export default memo(function OrderPageExample() {
    return <div className="order-page__example">
        <div className="container">
            <h2 className="order-page__example-title">ПРИМЕРЫ РАБОТ</h2>
            <ul className="order-page__example-list">
                <Swiper
                    slidesPerView={1}
                    breakpoints={breakpoints}
                    navigation={true}
                    scrollbar={scrollbar}
                    modules={modules}
                >
                    {
                        example.map((item, i) => <SwiperSlide key={i}>
                            <li className="order-page__example-item">
                                <img className="order-page__example-img" src={item} alt="" />
                            </li>
                        </SwiperSlide>)
                    }
                </Swiper>

            </ul>
        </div>
    </div>
})