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
import { Pagination as My } from '@mui/material'


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
        .sort((a: Ring, b: Ring): Ring => sortByAscendingAndDescending(a, b, byAscendingDescending))
        .filter((ring: Ring) => filterByPrice(ring, byPrice))
        .filter((ring: Ring) => filterByJewel(ring, isJewel))

    const pagination = usePagination({
        contentPerPage: contentPerPage,
        count: filteredRings.length
    })

    if (status === 'loading') {
        return <Spinner />
    }


    return (
        <>
            <Header />
            <main className="catalog-main">
                <div className="container">
                    <NavigationText />

                    <section className='catalog-main__description'>
                        <div className="catalog-main__wrapper">
                            <div className="catalog-main__inner">
                                <h2 className="catalog-main__title">{title}</h2>
                                <p className="catalog-main__text">{subtitle}</p>

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
                                <img className="catalog-main__sale" src={saleImg} alt="" />
                            </a>
                        </div>

                        <ul className="catalog-main__product-list ">
                            {
                                filteredRings
                                    .slice(pagination.firstContentIndex, pagination.lastContentIndex)
                                    .map((item: Ring) => (
                                        <ProductCart to={`${item.id}`} key={item.id} cart={item} />
                                    ))
                            }
                        </ul>
                        <My count={pagination.totalPages} />
                        <Pagination pagination={pagination} />
                        <p className="catalog-main__description">
                            Дизайнерские обручальные кольца от производителя хороши тем, что их внешний вид и особенности оформления разнообразны и можно легко подобрать те, которые подойдут именно Вам и Вашей второй половинке. В разделе представлено свыше двухсот готовых моделей обручальных колец — возможно, Вы захотите внести в некоторые из них свои небольшие дополнения или вовсе заказать неповторимую модель: мы создадим <span className='catalog-main__description--color'>уникальный дизайн</span> по Вашему описанию или рисунку, воплотив любые идеи.
                            Можно выбрать любой вид поверхности: глянцевую или матовую, текстурированную, узорчатую… Выполним резные обручальные кольца или с любой гравировкой. Кольца можно дополнить драгоценными камнями, например, бриллиантами — такие парные кольца смотрятся роскошно и эффектно. Всем покупателям колец с фирменной эмблемой Art-Rings мы дарим <span className='catalog-main__description--color'>бриллиант в подарок</span>.
                        </p>
                        <p className="catalog-main__description">
                            Парные обручальные кольца от «Арт-Рингз» можно недорого <span className='catalog-main__description--color'>купить в Москве</span> или с удобной <span className='catalog-main__description--color'>доставкой в регионы</span>. С радостью ответим на Ваши вопросы по телефонам: +7 (499) 940-87-77.
                        </p>
                    </section>
                </div >
            </main >
            <ScrollRestoration />
            <Footer />
        </>
    )
}

export default CatalogPage
