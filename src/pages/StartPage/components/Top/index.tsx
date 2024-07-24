import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import 'swiper/css/scrollbar'
import 'swiper/css'
import 'swiper/css/navigation';

import briliant from "../../../../assets/images/briliant.svg"
import slide1 from "../../../../assets/images/top-bg.jpg"

const settings: Settings = {
    arrows: false,
    autoplay: true,
    dots: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: () => <div className='slider__dots'>
    </div >
};

export default function Top() {
    return <section className='top'>
        <h2 className='top__title'>Oсобенные обручальные кольца</h2>

        <Slider className='slider' {...settings}>
            <img className='top__slide' src={slide1} alt="" />
            <img className='top__slide' src={slide1} alt="" />
            <img className='top__slide' src={slide1} alt="" />
        </Slider>

        <div className="top__briliant">
            <div>
                <img src={briliant} alt="" />
            </div>
            <p className="top__briliant-text">Бриллиант в подарок</p>
        </div>
    </section>
}