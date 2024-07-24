import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper/modules";
import { CartOfProduct } from "../../../../components/CartOfProduct";

import { selectAllRingsMemo, selectByIdsMemo } from "../../../../redux/rings/ringsSelects";
import { useAppSelector } from "../../../../hooks/redux/hooks";
import { useState } from "react";


const ringIds = [1, 2, 3, 4]

export default function NewItemsSlider() {

    const rings = useAppSelector(selectAllRingsMemo)

    const [showNewRings, setShowNewRings] = useState(6)

    const isShowNewRings = showNewRings >= rings.length

    const slides = useAppSelector(state => selectByIdsMemo(state, ringIds))

    const showMoreNewRing = () => {
        if (showNewRings < rings.length) {
            setShowNewRings(showNewRings + 3)
            return
        }
        return
    }

    return <section className='new-items'>
        <div className="container">
            <h3 className=" new-items__title">НОВИНКИ</h3>
            <ul className="new-items__slider">
                <Swiper
                    navigation={true}
                    slidesPerView={3}
                    scrollbar={{ draggable: true }}
                    modules={[Scrollbar, Navigation]}
                    className="mySwiper"
                >
                    {
                        slides && slides.map(cart => (
                            <SwiperSlide key={cart.id}>
                                <CartOfProduct url={'catalog-engagementRings'} cart={cart} />
                            </SwiperSlide>
                        )
                        )
                    }
                </Swiper >
            </ul>

            <ul className="new-items__slider-mobile">
                {rings.map((ring, index) => {
                    if (index < showNewRings) {
                        return <CartOfProduct cart={ring} key={ring.id} />
                    } else {
                        return
                    }
                })}
            </ul>

            <button onClick={showMoreNewRing}
                className={isShowNewRings ? "new-items__show-more new-items__show-more--disable" : "new-items__show-more"}
            >
                ПОКАЗАТЬ ЕЩЁ
                <svg className="new-items__shape" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2" />
                </svg>

            </button>
        </div>
    </section>
}