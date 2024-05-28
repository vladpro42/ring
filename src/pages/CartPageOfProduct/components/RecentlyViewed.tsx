import { useState } from 'react'
import { useAppSelector } from '../../../hooks/redux/hooks'
import { selectByIdsMemo } from '../../../redux/rings/ringsSelects'
import { getItemFromLocalStorage } from '../../../utils'

import 'swiper/css/scrollbar'
import 'swiper/css'
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper/modules";
import { CartOfProduct } from '../../../components/CartOfProduct'

const RecentlyViewed = () => {

    const [ringIds] = useState<number[]>(() => getItemFromLocalStorage("recentlyViewed"))
    const slides = useAppSelector((state) => selectByIdsMemo(state, ringIds))


    return (
        <section className='new-items'>
            <div className="container">
                {
                    slides.length > 0 && <h3 className="new-items__title">
                        НЕДАВНО ПРОСМОТРЕННЫЕ
                    </h3>
                }
                <ul className="new-items__slider">
                    <Swiper
                        navigation={true}
                        slidesPerView={slides.length <= 3 ? slides.length : 3}
                        scrollbar={{ draggable: true }}
                        modules={[Scrollbar, Navigation]}
                        className="mySwiper"
                    >
                        {
                            slides.map(cart => < SwiperSlide key={cart.id}>
                                <CartOfProduct cart={cart} />
                            </SwiperSlide>)
                        }
                    </Swiper >
                </ul>
                <ul className="new-items__slider--mobile">

                    {slides.map((cart, index) => {
                        if (index < 3) {
                            return <CartOfProduct key={cart.id} cart={cart} />
                        }
                    })}
                </ul>
            </div>
        </section>
    )
}

export default RecentlyViewed
