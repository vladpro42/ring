import Header from '../../components/header'
import Footer from '../../components/footer'
import BreadCrumbs from '../../components/BreadCrumbs'
import Pagination from '../../components/Pagination'

import "./catalog.scss"

import saleImg from "../../assets/images/catalo-sale.jpg"

import usePagination from '../../hooks/UsePagination'
import {useAppSelector} from '../../hooks/redux/hooks'

import {selectRings, selectRingsStatus} from '../../redux/rings/ringsSelects'
import {
    selectByPrice,
    selectContentPerPage,
    selectIsJewel,
    selectSortByPrice,
    selectSortByRating,
    selectSortByAscendingDescending
} from '../../redux/filter/filterSelectors'
import {
    sortByAscendingAndDescending,
    filterByJewel,
    filterByPrice,
    sortRingsByPrice,
    sortRingsByRating
} from "./utils/index"
import {ScrollRestoration} from 'react-router-dom'
import {Ring} from '../../redux/rings/ringsReducerTypes'
import Spinner from '../../components/Spinner'
import {useEffect, useState} from 'react'
import FilterMobile from './components/FilterMobile'
import SortMobileList from './components/SortMobileList'
import {CartOfProduct} from '../../components/CartOfProduct'
import {ProductFilters} from "./components/ProductFilters";


type Props = {
    title: string;
    subtitle: string;
}

const CatalogPage = ({title, subtitle}: Props) => {

    const status = useAppSelector(selectRingsStatus)
    const rings = useAppSelector(selectRings)

    const byPrice = useAppSelector(selectByPrice)
    const byAscendingDescending = useAppSelector(selectSortByAscendingDescending)
    const isJewel = useAppSelector(selectIsJewel)
    const contentPerPage = useAppSelector(selectContentPerPage)
    const sortByPrice = useAppSelector(selectSortByPrice)
    const sortByRating = useAppSelector(selectSortByRating)
    //const sortByAlphabeticalOrder = useAppSelector(selectSortByAlphabeticalOrder)

    const filteredRings = rings
        .sort((a: Ring, b: Ring) => sortByAscendingAndDescending(a, b, byAscendingDescending))
        .filter((ring: Ring) => filterByPrice(ring, byPrice))
        .filter((ring: Ring) => filterByJewel(ring, isJewel))
        .sort((a: Ring, b: Ring) => sortRingsByPrice(a, b, sortByPrice))
        .sort((a: Ring, b: Ring) => sortRingsByRating(a, b, sortByRating))

    const pagination = usePagination({
        contentPerPage: contentPerPage,
        count: filteredRings.length
    })

    const [isActiveList, setIsActiveList] = useState(false)

    const handleClickOpenListMobile = () => {
        setIsActiveList(!isActiveList)
    }

    const [isFilterMobile, setIsFilterMobile] = useState(false)

    useEffect(() => {
        if (isFilterMobile) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'unset'
        }
    }, [isFilterMobile])

    const toggleFilterMobile = () => {
        setIsFilterMobile(!isFilterMobile)
    }

    if (status === 'loading') {
        return <Spinner/>
    }

    return <>
        <Header/>
        <main className="catalog-main">
            <div className="container">
                <BreadCrumbs/>

                <section className='catalog-main__description'>
                    <div className="catalog-main__wrapper">
                        <div className="catalog-main__inner">
                            <h2 className="catalog-main__title">{title}</h2>
                            <p className="catalog-main__text">{subtitle}</p>

                            <SortMobileList
                                onOpen={handleClickOpenListMobile}
                                toggleFilter={toggleFilterMobile}
                                className={isActiveList ?
                                    'sort__mobile-list sort__mobile-list--active' :
                                    'sort__mobile-list'}
                            />
                            <ProductFilters/>
                        </div>
                        <a className='catalog-main__link-sale' href="#">
                            <picture>
                                <source srcSet='/images/banner-mobile.jpg'
                                        media='(max-width: 992px)'/>
                                <img className="catalog-main__sale"
                                     src={saleImg} alt=""/>
                            </picture>
                        </a>
                    </div>

                    <div className="catalog-main__product-list">
                        {
                            filteredRings
                                ?.slice(pagination.firstContentIndex, pagination.lastContentIndex)
                                .map((item: Ring) => <CartOfProduct cart={item}
                                                                    key={item.id}/>)
                        }
                    </div>
                    <Pagination pagination={pagination}/>
                    <p className="catalog-main__description-text">
                        Дизайнерские обручальные кольца от производителя хороши
                        тем, что их внешний вид и особенности оформления
                        разнообразны и можно легко подобрать те, которые
                        подойдут именно Вам и Вашей второй половинке. В разделе
                        представлено свыше двухсот готовых моделей обручальных
                        колец — возможно, Вы захотите внести в некоторые из них
                        свои небольшие дополнения или вовсе заказать
                        неповторимую модель: мы создадим <span
                        className='catalog-main__description--color'>уникальный дизайн</span> по
                        Вашему описанию или рисунку, воплотив любые идеи.
                        Можно выбрать любой вид поверхности: глянцевую или
                        матовую, текстурированную, узорчатую… Выполним резные
                        обручальные кольца или с любой гравировкой. Кольца можно
                        дополнить драгоценными камнями, например, бриллиантами —
                        такие парные кольца смотрятся роскошно и эффектно. Всем
                        покупателям колец с фирменной эмблемой Art-Rings мы
                        дарим <span
                        className='catalog-main__description--color'>бриллиант в подарок</span>.
                    </p>
                    <p className="catalog-main__description-text">
                        Парные обручальные кольца от «Арт-Рингз» можно
                        недорого <span
                        className='catalog-main__description--color'>купить в Москве</span> или
                        с удобной <span
                        className='catalog-main__description--color'>доставкой в регионы</span>.
                        С радостью ответим на Ваши вопросы по телефонам: +7
                        (499) 940-87-77.
                    </p>
                </section>
            </div>
        </main>
        <ScrollRestoration/>
        <FilterMobile
            className={isFilterMobile ? 'filter-mobile--active' : null}
            onClose={toggleFilterMobile}/>
        <Footer/>
    </>
}

export default CatalogPage
