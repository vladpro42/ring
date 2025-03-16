import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Autoplay, Pagination } from 'swiper/modules'; 

import 'swiper/css';
import 'swiper/css/pagination';

import briliant from '../../../../assets/images/briliant.svg';
import slide1 from '../../../../assets/images/top-bg.jpg';

export default function Top() {
    return (
        <section className='top'>
            <h2 className='top__title'>Oсобенные обручальные кольца</h2>

            <Swiper
                className='slider'
                modules={[Autoplay, Pagination]} 
                spaceBetween={0} 
                slidesPerView={1} 
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true} 
            >
                <SwiperSlide>
                    <img className='top__slide' src={slide1} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='top__slide' src={slide1} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='top__slide' src={slide1} alt='' />
                </SwiperSlide>
            </Swiper>

            <div className='top__briliant'>
                <div>
                    <img src={briliant} alt='' />
                </div>
                <p className='top__briliant-text'>Бриллиант в подарок</p>
            </div>
        </section>
    );
}