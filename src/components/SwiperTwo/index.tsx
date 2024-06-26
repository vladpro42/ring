import { Swiper, SwiperSlide } from "swiper/react"
import { Scrollbar } from "swiper/modules"


import "swiper/css"
import "swiper/css/scrollbar"

const SwiperTwo = ({ images }: { images: string[] }) => {
    return (
        <Swiper
            breakpoints={{
                1000: {
                    slidesPerView: 3,
                    spaceBetween: 0
                }
            }}
            modules={[Scrollbar]}
            slidesPerView={1}
            scrollbar={{ draggable: true }}>
            {images.map((item, index) => {

                const arr = item.split("/")
                const key = arr[arr.length - 1] + index

                return (
                    <SwiperSlide key={key}>
                        <li className="studio__slide">
                            <img src={item} alt="" />
                        </li>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default SwiperTwo
