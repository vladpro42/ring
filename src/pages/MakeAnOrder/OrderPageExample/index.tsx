
import { SwiperSlide, Swiper } from "swiper/react"
import { Navigation, Pagination, Scrollbar } from "swiper/modules"

import orderSlider1 from "../../../assets/images/order-slider-1.png"
import orderSlider2 from "../../../assets/images/order-slider-2.png"
import orderSlider3 from "../../../assets/images/order-slider-3.png"


import "swiper/css"
import "swiper/css/scrollbar"
import "swiper/css/navigation"
import "swiper/css"
import { memo } from "react"

const example = [orderSlider1, orderSlider2, orderSlider3, orderSlider1, orderSlider2, orderSlider3]

const breakpoints = {

    375: {
        scrollbar: false
    },

    1000: {
        width: 1000,
        slidesPerView: 3,
        scrollbar: true
    },
}

const scrollbar = { draggable: true }
const modules = [Scrollbar, Navigation, Pagination]


export default memo(function OrderPageExample() {
    return <div className="order-page__example">
        <div className="container">
            <h2 className="order-page__example-title">ПРИМЕРЫ РАБОТ</h2>
            <ul className="order-page__example-list">
                <Swiper
                    slidesPerView={1}
                    breakpoints={breakpoints}
                    pagination={true}
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