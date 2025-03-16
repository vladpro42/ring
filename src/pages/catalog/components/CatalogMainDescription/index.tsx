import BtnAnimation from "../BtnAnimation";
import Pagination from "../Pagination";
import Show from "../Show";
import SortCompound from "../SortCompound";
import SortMobileList from "../SortMobileList";
import SortPrice from "../SortPrice";
import SortRaiting from "../SortRaiting";
import SortTags from "../SortTags";

import saleImg from "../../../../assets/images/catalo-sale.jpg"
import { useState } from "react";
import ProductList from "../ProductList";
import usePagination from "../../../../hooks/UsePagination"
import { useAppSelector } from "../../../../hooks/redux/hooks";
import { selectContentPerPage } from "../../../../redux/filter/filterSelectors";
import { useFilteredRings } from "../../../../hooks/UseFilteredRings";


type Props = {
    title: string;
    subtitle: string;
    toggleFilterMobile: () => void
}


export default function CatalogMainDescription({ subtitle, title, toggleFilterMobile }: Props) {


    const [isActiveList, setIsActiveList] = useState(false)

    const handleClickOpenListMobile = () => {
        setIsActiveList(!isActiveList)
    }

    const contentPerPage = useAppSelector(selectContentPerPage)

    const filteredRings = useFilteredRings()

    const pagination = usePagination({
        contentPerPage: contentPerPage,
        count: filteredRings.length
    })



    return <section className='catalog-main__description'>
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

        <ProductList rings={filteredRings} pagination={pagination} />


        <Pagination pagination={pagination} />

        <p className="catalog-main__description-text">
            Дизайнерские обручальные кольца от производителя хороши тем, что их внешний вид и особенности оформления разнообразны и можно легко подобрать те, которые подойдут именно Вам и Вашей второй половинке. В разделе представлено свыше двухсот готовых моделей обручальных колец — возможно, Вы захотите внести в некоторые из них свои небольшие дополнения или вовсе заказать неповторимую модель: мы создадим <span className='catalog-main__description--color'>уникальный дизайн</span> по Вашему описанию или рисунку, воплотив любые идеи.
            Можно выбрать любой вид поверхности: глянцевую или матовую, текстурированную, узорчатую… Выполним резные обручальные кольца или с любой гравировкой. Кольца можно дополнить драгоценными камнями, например, бриллиантами — такие парные кольца смотрятся роскошно и эффектно. Всем покупателям колец с фирменной эмблемой Art-Rings мы дарим <span className='catalog-main__description--color'>бриллиант в подарок</span>.
        </p>
        <p className="catalog-main__description-text">
            Парные обручальные кольца от «Арт-Рингз» можно недорого <span className='catalog-main__description--color'>купить в Москве</span> или с удобной <span className='catalog-main__description--color'>доставкой в регионы</span>. С радостью ответим на Ваши вопросы по телефонам: +7 (499) 940-87-77.
        </p>
    </section>
}