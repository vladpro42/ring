import { Swiper, SwiperSlide } from "swiper/react"
import { Scrollbar } from "swiper/modules"

import "swiper/css"
import "swiper/css/scrollbar"


const breakpoints = {
    1000: {
        slidesPerView: 3,
        spaceBetween: 0
    }
}

const modules = [Scrollbar]
const scrollbar = { draggable: true }

const SwiperTwo = ({ images }: { images: string[] }) => {
    return (
        <Swiper
            breakpoints={breakpoints}
            modules={modules}
            slidesPerView={1}
            scrollbar={scrollbar}>
            {
                images.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <li className="studio__slide">
                                <img src={item} alt="" />
                            </li>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default SwiperTwo
