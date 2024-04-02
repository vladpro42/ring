import Header from '../../components/header'
import ProductCart from '../../components/ProductCart'
import Footer from '../../components/footer'
import NavigationText from '../../components/NavigationText'
import Show from './components/Show'
import BtnAnimation from './components/BtnAnimation'
import SortRaiting from './components/SortRaiting'
import SortPrice from './components/SortPrice'
import SortCompound from './components/SortCompound'
import SortTags from './components/SortTags'
import Pagination from './components/Pagination'

import "./catalog.scss"

import saleImg from "../../assets/images/catalo-sale.jpg"

import usePagination from '../../hooks/UsePagination'
import { useAppSelector } from '../../hooks/redux/hooks'

import { selectRings, selectRingsStatus } from '../../redux/rings/ringsReducer'
import { selectByPrice, selectContentPerPage, selectIsJewel } from '../../redux/filter/filterReducer'
import { selectSortByAscendingDescending } from '../../redux/filter/filterReducer'
import { sortByAscendingAndDescending, filterByJewel, filterByPrice } from "./utils/index"
import { ScrollRestoration } from 'react-router-dom'
import { Ring } from '../../redux/rings/ringsReducerTypes'
import Spinner from '../../components/Spinner'
import { useState } from 'react'
import FilterMobile from './components/FilterMobile'


type Props = {
    title: string;
    subtitle: string;
}


const CatalogPage = ({ title, subtitle }: Props) => {

    const status = useAppSelector(selectRingsStatus)
    const rings = useAppSelector(selectRings)

    const byPrice = useAppSelector(selectByPrice)
    const byAscendingDescending = useAppSelector(selectSortByAscendingDescending)
    const isJewel = useAppSelector(selectIsJewel)
    const contentPerPage = useAppSelector(selectContentPerPage)

    const filteredRings = rings
        .sort((a: Ring, b: Ring) => sortByAscendingAndDescending(a, b, byAscendingDescending))
        .filter((ring: Ring) => filterByPrice(ring, byPrice))
        .filter((ring: Ring) => filterByJewel(ring, isJewel))

    const pagination = usePagination({
        contentPerPage: contentPerPage,
        count: filteredRings.length
    })

    const [isActiveList, setIsActiveList] = useState(false)

    const handleClickOpenListMobile = () => {
        setIsActiveList(!isActiveList)
    }

    const [isFilterMobile, setIsFilterMobile] = useState(false)

    const toggleFilterMobile = () => {
        setIsFilterMobile(!isFilterMobile)
    }

    if (status === 'loading') {
        return <Spinner />
    }

    return <>
        <Header />
        <main className="catalog-main">
            <div className="container">
                <NavigationText />

                <section className='catalog-main__description'>
                    <div className="catalog-main__wrapper">
                        <div className="catalog-main__inner">
                            <h2 className="catalog-main__title">{title}</h2>
                            <p className="catalog-main__text">{subtitle}</p>

                            <div className="sort__mobile">
                                <div onClick={handleClickOpenListMobile} className="sort__mobile-select">
                                    <svg className='sort__mobile-acion' width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.31641 4.02423H6.94963V10.9758H5.31641L7.70254 15L10.0887 10.9758H8.45548V4.02423H10.0887L7.70254 0L5.31641 4.02423Z" fill="black" />
                                        <path d="M13.7837 0.789473H29.9999V2.76316H13.7837V0.789473Z" fill="black" />
                                        <path d="M13.7837 6.31579H25.9459V8.28947H13.7837V6.31579Z" fill="black" />
                                        <path d="M13.7837 11.8421H21.8918V13.8158H13.7837V11.8421Z" fill="black" />
                                    </svg>
                                    <p className="sort__mobile-text">рейтинг (начиная с высокого)</p>
                                    <svg className='sort__mobile-shape' width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        < path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2" />
                                    </svg>
                                </div>
                                <div className="sort__mobile-filter">
                                    <svg className='filter__icon' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.5 2.25H1.5L7.5 9.345V14.25L10.5 15.75V9.345L16.5 2.25Z" fill="#020F59" />
                                    </svg>
                                    <p onClick={toggleFilterMobile} className='filter__text'>Фильтры</p>
                                </div>
                            </div>

                            <ul className={isActiveList ? 'sort__mobile-list sort__mobile-list--active' : 'sort__mobile-list'}>
                                <li className="mobile-list__item">По умолчанию</li>
                                <li className="mobile-list__item">Название (А - Я)</li>
                                <li className="mobile-list__item">Название (Я - А)</li>
                                <li className="mobile-list__item">Цена (низкая &#62; высокая)</li>
                                <li className="mobile-list__item">Цена (высокая &#62; низкая)</li>
                                <li className="mobile-list__item">Рейтинг (начиная с высокого)</li>
                                <li className="mobile-list__item">Рейтинг (начиная с низкого)</li>
                                <li className="mobile-list__item">Модель (А - Я)</li>
                                <li className="mobile-list__item">Модель (Я - А)</li>
                            </ul>

                            <div className="catalog-main__options">
                                <BtnAnimation />
                                <Show />
                                <SortRaiting />
                                <SortPrice />
                                <SortCompound />
                                <SortTags />
                            </div>

                        </div>
                        <a className='catalog-main__link-sale' href="#">
                            <picture>
                                <source srcSet='/images/banner-mobile.jpg' media='(max-width: 992px)' />
                                <img className="catalog-main__sale" src={saleImg} alt="" />
                            </picture>
                        </a>
                    </div>

                    <ul className="catalog-main__product-list">
                        {
                            filteredRings
                                .slice(pagination.firstContentIndex, pagination.lastContentIndex)
                                .map((item: Ring) => (
                                    <ProductCart to={`${item.id}`} key={item.id} cart={item} />
                                ))
                        }
                    </ul>
                    <Pagination pagination={pagination} />
                    <p className="catalog-main__description-text">
                        Дизайнерские обручальные кольца от производителя хороши тем, что их внешний вид и особенности оформления разнообразны и можно легко подобрать те, которые подойдут именно Вам и Вашей второй половинке. В разделе представлено свыше двухсот готовых моделей обручальных колец — возможно, Вы захотите внести в некоторые из них свои небольшие дополнения или вовсе заказать неповторимую модель: мы создадим <span className='catalog-main__description--color'>уникальный дизайн</span> по Вашему описанию или рисунку, воплотив любые идеи.
                        Можно выбрать любой вид поверхности: глянцевую или матовую, текстурированную, узорчатую… Выполним резные обручальные кольца или с любой гравировкой. Кольца можно дополнить драгоценными камнями, например, бриллиантами — такие парные кольца смотрятся роскошно и эффектно. Всем покупателям колец с фирменной эмблемой Art-Rings мы дарим <span className='catalog-main__description--color'>бриллиант в подарок</span>.
                    </p>
                    <p className="catalog-main__description-text">
                        Парные обручальные кольца от «Арт-Рингз» можно недорого <span className='catalog-main__description--color'>купить в Москве</span> или с удобной <span className='catalog-main__description--color'>доставкой в регионы</span>. С радостью ответим на Ваши вопросы по телефонам: +7 (499) 940-87-77.
                    </p>
                </section>
            </div >
        </main >
        <ScrollRestoration />
        {isFilterMobile ? <FilterMobile onClose={toggleFilterMobile} /> : <Footer />}
    </>



}

export default CatalogPage
