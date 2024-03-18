import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper/modules";
import ProductCart from '../ProductCart';
import { dataForCart } from "../../data/data";

import 'swiper/css/scrollbar'
import 'swiper/css'
import 'swiper/css/navigation';
import { Ring } from "../../redux/rings/ringsReducer";
import { useEffect } from "react";
import { useState } from "react";
import { getItemFromLocalStorage } from "../../utils";


const SwiperWithScrollbar = () => {

    const [rings, setRings] = useState<Ring[]>(() => getItemFromLocalStorage("recentlyViewed") || [])


    useEffect(() => {
        if (rings.length < 4) {
            setRings(prev => [...prev, ...dataForCart])
        }
    }, [rings, setRings])


    return (
        <Swiper
            navigation={true}
            slidesPerView={3}
            scrollbar={{ draggable: true }}
            modules={[Scrollbar, Navigation]}
            className="mySwiper"
        >
            {
                rings ? rings.map((cart, index) => {
                    return (<SwiperSlide key={index}>
                        <ProductCart to={`/catalog-weddingRings/${cart.id}`} cart={cart} />
                    </SwiperSlide>)
                })

                    : dataForCart.map((cart, index) => {
                        return (<SwiperSlide key={index}>
                            <ProductCart to={`/catalog-weddingRings/${cart.id}`} cart={cart} />
                        </SwiperSlide>)
                    })
            }
        </Swiper>
    )
}

export default SwiperWithScrollbar
