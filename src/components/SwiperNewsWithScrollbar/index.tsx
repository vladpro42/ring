import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper/modules";
import ProductCart from '../ProductCart';

import 'swiper/css/scrollbar'
import 'swiper/css'
import 'swiper/css/navigation';
import { useAppSelector } from "../../hooks/redux/hooks";
import { selectRingByIds } from "../../redux/rings/ringsReducer";


const SwiperNewsWithScrollbar = () => {

    const ringIds = [1, 2, 3, 4]
    const slides = useAppSelector(state => selectRingByIds(state, ringIds))

    return (
        <Swiper
            navigation={true}
            slidesPerView={3}
            scrollbar={{ draggable: true }}
            modules={[Scrollbar, Navigation]}
            className="mySwiper"
        >
            {
                slides && slides.map(cart => < SwiperSlide>
                    <ProductCart to={`/catalog-weddingRings/${cart.id}`} cart={cart} />
                </SwiperSlide>)
            }
        </Swiper >
    )
}

export default SwiperNewsWithScrollbar
