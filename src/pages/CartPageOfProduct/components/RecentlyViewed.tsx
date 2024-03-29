import { useState } from 'react'
import { useAppSelector } from '../../../hooks/redux/hooks'
import { selectRingByIds } from '../../../redux/rings/ringsReducer'
import { getItemFromLocalStorage } from '../../../utils'

import 'swiper/css/scrollbar'
import 'swiper/css'
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper/modules";
import ProductCart from '../../../components/ProductCart'

const RecentlyViewed = () => {

    const [ringIds] = useState<number[]>(() => getItemFromLocalStorage("recentlyViewed"))
    const slides = useAppSelector(state => selectRingByIds(state, ringIds))

    return (
        <section className='new-items'>
            <div className="container">
                <h3 className="new-items__title">
                    НЕДАВНО ПРОСМОТРЕННЫЕ
                </h3>
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
                                <ProductCart to={`/catalog-weddingRings/${cart.id}`} cart={cart} />
                            </SwiperSlide>)
                        }
                    </Swiper >
                </ul>
            </div>
        </section>
    )
}

export default RecentlyViewed
