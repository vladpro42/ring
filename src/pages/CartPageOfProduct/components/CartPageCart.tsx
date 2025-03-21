import { memo, useState, useCallback, useEffect } from "react";
import Select from "../../../components/Select/index";
import { SwiperSlider } from "./SwiperSlider";

type Props = {
    imgSrc: string;
    price: number;
    priceSale: number;
    onClick: () => void;
};

const CartPageCart = memo(({ imgSrc, price, priceSale, onClick }: Props) => {
    const [src, setSrc] = useState(imgSrc);

    useEffect(() => {
        setSrc(imgSrc);
    }, [imgSrc]);
    const onClickImg = useCallback((e: React.MouseEvent<HTMLImageElement>) => {
        console.log(e.currentTarget.src)
        setSrc(e.currentTarget.src);
    }, []);

    return (
        <div className="cart-page__cart">
            <div className="cart-page__image-slider">
                <SwiperSlider imgSrc={imgSrc} onClick={onClickImg} />
            </div>
            <div className={"cart-page__image-container"}>
            <img className="cart-page__image-product" src={src} alt="" />
            </div>

            <div className="cart-page__user-actions">
                <div className="cart-page__prices">
                    <p className="cart-page__price">{priceSale} ₽</p>
                    {priceSale < price && (
                        <p className="cart-page__price-sale">{price} ₽</p>
                    )}
                </div>

                <div className="cart-page__sizes">
                    <div className="cart-page__selects">
                        <Select gender="жен" />
                        <Select gender="муж" />
                    </div>

                    <button onClick={onClick} className="cart-page__btn-buy">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L22.2 10.195L23 6H6M5 1L6.00075 6M6.00075 6L7.68 14.39L8.38755 15.5583M6.00075 6H23L22.2 10.195M6.00075 6H6M9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.38755 15.5583C8.02191 15.264 7.77144 14.8504 7.68 14.39L6 6H23L22.2 10.195L21.4 14.39C21.3086 14.8504 21.0581 15.264 20.6925 15.5583C20.3268 15.8526 19.8693 16.009 19.4 16H9.68C9.2107 16.009 8.75318 15.8526 8.38755 15.5583Z" fill="white" />
                            <path d="M7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583M7.68 14.39L6 6H23L22.2 10.195L21.4 14.39C21.3086 14.8504 21.0581 15.264 20.6925 15.5583C20.3268 15.8526 19.8693 16.009 19.4 16H9.68C9.2107 16.009 8.75318 15.8526 8.38755 15.5583M7.68 14.39L8.38755 15.5583" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>В КОРЗИНУ</span>
                    </button>

                    <button className="cart-page__btn-chat">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0028 0H10.9972C4.93213 0 0 4.9335 0 11C0 13.4062 0.7755 15.6365 2.09413 17.4474L0.72325 21.5339L4.95138 20.1823C6.69075 21.3345 8.76562 22 11.0028 22C17.0679 22 22 17.0651 22 11C22 4.93488 17.0679 0 11.0028 0ZM17.4034 15.5334C17.138 16.2827 16.0847 16.9042 15.2446 17.0857C14.6699 17.2081 13.9191 17.3057 11.3919 16.258C8.15925 14.9188 6.0775 11.6339 5.91525 11.4207C5.75988 11.2076 4.609 9.68137 4.609 8.10287C4.609 6.52437 5.41062 5.75575 5.73375 5.42575C5.99913 5.15488 6.43775 5.03113 6.8585 5.03113C6.99462 5.03113 7.117 5.038 7.227 5.0435C7.55012 5.05725 7.71238 5.0765 7.9255 5.58663C8.19088 6.226 8.83712 7.8045 8.91412 7.96675C8.9925 8.129 9.07088 8.349 8.96088 8.56213C8.85775 8.78213 8.767 8.87975 8.60475 9.06675C8.4425 9.25375 8.2885 9.39675 8.12625 9.5975C7.97775 9.77213 7.81 9.95912 7.997 10.2822C8.184 10.5985 8.83025 11.6531 9.78175 12.5001C11.0096 13.5932 12.0051 13.9425 12.3612 14.091C12.6266 14.201 12.9429 14.1749 13.1367 13.9686C13.3829 13.7032 13.6867 13.2633 13.9961 12.8301C14.2161 12.5194 14.4939 12.4809 14.7854 12.5909C15.0824 12.694 16.654 13.4709 16.9771 13.6317C17.3002 13.794 17.5134 13.871 17.5918 14.0071C17.6688 14.1433 17.6687 14.7826 17.4034 15.5334Z" fill="#020F59" />
                        </svg>
                        <span>НАПИСАТЬ WHATSAPP</span>
                    </button>
                </div>

                <div className="cart-page__services">
                    <p className="cart-page__services-text cart-page__services-text--icon">образцы этой модели представлены в студии</p>
                    <p className="cart-page__services-text">- Срок изготовления: 14 календарных дней</p>
                    <p className="cart-page__services-text">- Артикул: 987</p>
                    <p className="cart-page__services-text">- Материал: <span className="cart-page__services-text--black">Золото 585 пробы</span> <span className="cart-page__services-text--gray">(для размеров 16 и 18)</span></p>
                    <p className="cart-page__services-text">- Вставки</p>
                </div>

                <div className="cart-page__services">
                    <p className="cart-page__services-text cart-page__services-text--title">Внесём любые правки в дизайн:</p>
                    <p className="cart-page__services-text">- ширина, толщина, камни (добавить, убрать, размер, цвет)</p>
                    <p className="cart-page__services-text">- цвет колец (одноцветные, двухцветные)</p>
                    <p className="cart-page__services-text">- поверхность (глянцевая, матовая, текстурированная и т.д.)</p>
                    <p className="cart-page__services-text">- можно без гравировки эмблемы (лебеди)</p>
                    <p className="cart-page__services-text">- возможно изготовление в другой пробе и из других драгоценных металлов</p>
                    <p className="cart-page__services-text">- возможно нанести свою гравировку</p>
                </div>
            </div>
        </div>
    );
});

export default CartPageCart;