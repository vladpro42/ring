import Header from '../../components/header'
import ProductCart from '../../components/ProductCart'
import { typeDataForCart } from '../../types/types'
import Footer from '../../components/footer'
import "./catalog.scss"
import saleImg from "../../assets/images/catalo-sale.jpg"
import NavigationText from '../../components/NavigationText'
import { useState } from 'react'
import usePagination from '../../hooks/UsePagination'
import { selectRings } from '../../rings/ringsReducer'
import { useSelector } from 'react-redux'

type Props = {
    data: typeDataForCart;
    title: string;
    subtitle: string;
}

const CatalogPage = ({ title, subtitle }: Props) => {


    const rings = useSelector(selectRings)

    const [isbtnActive, setIsBtnActive] = useState(false)

    const handleClickBtnAnimation = () => {
        setIsBtnActive(!isbtnActive)
    }

    const pagination = usePagination({
        contentPerPage: 6,
        count: rings.length
    })

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
                                    <div onClick={handleClickBtnAnimation} className="catalog-main__btn-animation">
                                        <div className="btn-animation">
                                            <span className={isbtnActive ? "btn-animation--unactive" : ""}></span>
                                        </div>
                                        <p className="catalog-main__btn-text">Анимация</p>
                                    </div>
                                    <div className="catalog-main__show">
                                        Показать:
                                        <select>
                                            <option value=""><span>21</span></option>
                                        </select>

                                    </div>
                                    <div className="catalog-main__sort">
                                        Сортировать:
                                        <select>
                                            <option value="">рейтинг (начиная с высокого)</option>
                                            <option value="">рейтинг (начиная с высокого)</option>
                                            <option value="">рейтинг (начиная с низкого)</option>
                                        </select>
                                    </div>

                                    <div className="catalog-main__price">
                                        <h3 className="catalog-main__options-title">ЦЕНА</h3>
                                        <ul className='catalog-main__options-list'>
                                            <li className="catalog-main__options-item catalog-main__options-item--active">до 50 000</li>
                                            <li className="catalog-main__options-item">50-70 000</li>
                                            <li className="catalog-main__options-item">70-100 000</li>
                                            <li className="catalog-main__options-item">от 100 000</li>
                                        </ul>
                                    </div>
                                    <div className="catalog-main__compound">
                                        <h3 className="catalog-main__options-title">ВСТАВКИ</h3>
                                        <ul className='catalog-main__options-list'>
                                            <li className="catalog-main__options-item catalog-main__options-item--active">с камнями</li>
                                            <li className="catalog-main__options-item">без камней</li>
                                        </ul>
                                    </div>
                                    <div className="catalog-main__tegs">
                                        <h3 className="catalog-main__options-title">ТЕГИ</h3>
                                        <ul className='catalog-main__tags-list'>
                                            <li className="catalog-main__tags-item">этно</li>
                                            <li className="catalog-main__tags-item catalog-main__tags-item--active">отпечатки</li>
                                            <li className="catalog-main__tags-item">бесконечность</li>
                                            <li className="catalog-main__tags-item">однотонные</li>
                                            <li className="catalog-main__tags-item">эмаль</li>
                                            <li className="catalog-main__tags-item">подвижные</li>
                                            <li className="catalog-main__tags-item">необычные</li>
                                            <li className="catalog-main__tags-item">широкие</li>
                                            <li className="catalog-main__tags-item">косичка</li>
                                            <li className="catalog-main__tags-item">комбинированные</li>
                                            <li className="catalog-main__tags-item">узкие</li>
                                            <li className="catalog-main__tags-item">растительный орнамент</li>
                                            <li className="catalog-main__tags-item">бриллианты</li>
                                            <li className="catalog-main__tags-item">сапфиры</li>
                                        </ul>
                                        <button className='catalog-main__tags-btn'>показать все</button>
                                    </div>
                                </div>
                            </div>
                            <a className='catalog-main__link-sale' href="#">
                                <img className="catalog-main__sale" src={saleImg} alt="" />
                            </a>
                        </div>
                        <ul className="catalog-main__product-list ">
                            {/*  {data.map((item) => <ProductCart to={`${item.id}`} key={item.id} cart={item} />)} */}


                            {rings
                                .slice(pagination.firstContentIndex, pagination.lastContentIndex)
                                .map((item) => (
                                    <ProductCart to={`${item.id}`} key={item.id} cart={item} />
                                ))
                            }

                        </ul>
                        <div className="catalog-main__pagination">
                            <button onClick={() => pagination.prevPage()} className='catalog-main__padination-btn catalog-main__padination-btn--prev'>
                                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 0.8L7.27692 7L1.46154 0.8" strokeWidth="2" />
                                </svg>
                                <span>Предыдущая</span>
                            </button>

                            <div className="catalog-main__links">

                                {
                                    [...new Array(4)].map((_, index) => <button
                                        className={pagination.page === index + 1 ? "catalog-main__link catalog-main__link--active" : "catalog-main__link"}
                                    >
                                        {index + 1}
                                    </button>)
                                }
                                {/*    {
                                    [...new Array(4)].map((_, index) => <button
                                        onClick={() => pagination.setPage(index + 1)}
                                        className={pagination.page === index + 1 ? "catalog-main__link catalog-main__link--active" : "catalog-main__link"}
                                    >
                                        {index + 1}
                                    </button>)
                                } */}
                                <button
                                    className={pagination.page === pagination.totalPages ? "catalog-main__link catalog-main__link--active" : "catalog-main__link"}
                                    onClick={() => pagination.setPage(pagination.totalPages)}
                                >
                                    {pagination.totalPages}

                                </button>
                            </div>

                            <button onClick={() => pagination.nextPage()} className='catalog-main__padination-btn'>
                                <span>Следующая</span>
                                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 0.8L7.27692 7L1.46154 0.8" strokeWidth="2" />
                                </svg>
                            </button>
                        </div>
                        <p className="catalog-main__description">
                            Дизайнерские обручальные кольца от производителя хороши тем, что их внешний вид и особенности оформления разнообразны и можно легко подобрать те, которые подойдут именно Вам и Вашей второй половинке. В разделе представлено свыше двухсот готовых моделей обручальных колец — возможно, Вы захотите внести в некоторые из них свои небольшие дополнения или вовсе заказать неповторимую модель: мы создадим <span>уникальный дизайн</span> по Вашему описанию или рисунку, воплотив любые идеи.
                            Можно выбрать любой вид поверхности: глянцевую или матовую, текстурированную, узорчатую… Выполним резные обручальные кольца или с любой гравировкой. Кольца можно дополнить драгоценными камнями, например, бриллиантами — такие парные кольца смотрятся роскошно и эффектно. Всем покупателям колец с фирменной эмблемой Art-Rings мы дарим <span>бриллиант в подарок</span>.
                        </p>
                        <p className="catalog-main__description">
                            Парные обручальные кольца от «Арт-Рингз» можно недорого <span>купить в Москве</span> или с удобной <span>доставкой в регионы</span>. С радостью ответим на Ваши вопросы по телефонам: +7 (499) 940-87-77.
                        </p>
                    </section>
                </div >
            </main >
            <Footer />
        </>
    )
}

export default CatalogPage
