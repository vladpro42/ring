import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper/modules";
import ProductCart from '../ProductCart';
import { dataForCart } from "../../App";

import 'swiper/css/scrollbar'
import 'swiper/css'
import 'swiper/css/navigation';

const SwiperWithScrollbar = () => {
    return (
        <Swiper
            navigation={true}
            slidesPerView={3}
            scrollbar={{ draggable: true }}
            modules={[Scrollbar, Navigation]}
            className="mySwiper"
        >
            {
                dataForCart.map((cart) => {
                    return (<SwiperSlide>
                        <ProductCart to={`catalog/${cart.id}`} key={cart.id} cart={cart} />
                    </SwiperSlide>)
                })
            }
        </Swiper>
    )
}

export default SwiperWithScrollbar
