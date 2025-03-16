import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper/modules";
import { CartOfProduct } from "../../../../components/CartOfProduct";
import {
    selectNewRingsMemo,
} from "../../../../redux/rings/ringsSelects";
import {  useAppSelector } from "../../../../hooks/redux/hooks";
import {Ring} from "../../../../redux/rings/ringsReducerTypes.ts";

const swiperConfig = {
    navigation: true,
    slidesPerView: 3,
    scrollbar: { draggable: true },
    modules: [Scrollbar, Navigation],
    className: "mySwiper",
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
  };

export default function NewItemsSlider() {
    const newsRings = useAppSelector(selectNewRingsMemo);
    // const dispatch = useAppDispatch();
    //
    // useEffect(() => {
    //     dispatch(fetchNewsRings); // Исправлено: добавлены скобки
    // }, [dispatch]);
    //
    // const status = useAppSelector(selectRingsStatus);
    // const newsRings = useAppSelector(selectArrRings);
    //
    // if (status === 'loading') {
    //     return <Spinner />;
    // }
    //
    // if (newsRings.length === 0) {
    //     return <div>Нет новинок</div>;
    // }
    // const [rings, setRings] = useState([])

    // useEffect( () => {
    //     async function getRings(){
    //         const url = "https://65f83983b4f842e808873cd9.mockapi.io/rings"
    //         const fullUrl = new URL(url);
    //         fullUrl.searchParams.append('isNew', '1');
    //         const response = await fetch(fullUrl);
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! Status: ${response.status}`)
    //         }

    //         const rings: Ring[] = await response.json();
    //         setRings(rings)
    //     }
    //     getRings()
    // }, []);



    return (
        <section className='new-items'>
            <div className="container">
                <h3 className="new-items__title">НОВИНКИ</h3>
                <ul className="new-items__slider">
                    <Swiper
                        {...swiperConfig}
                    >
                        {newsRings.map( (cart: Ring) => (
                            <SwiperSlide key={cart.id}>
                                <CartOfProduct className={"main-page__cart"} url={'catalog-engagementRings'} cart={cart} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </ul>
                {/* <button onClick={showMoreNewRing}
                className={isShowNewRings ? "new-items__show-more new-items__show-more--disable" : "new-items__show-more"}
            >
                ПОКАЗАТЬ ЕЩЁ
                <svg className="new-items__shape" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2" />
                </svg>

            </button> */}
            </div>
        </section>
    );
}