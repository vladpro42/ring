import Header from "../../components/header"
import Footer from "../../components/footer"
import NavigationText from "../../components/NavigationText"

const CartPageOfProduct = () => {
    return (
        <>
            <Header />
            <main className="cart-page">
                <section className="cart-page__section">
                    <div className="container">
                        <NavigationText />
                        <div className="cart-page__description-product">
                            <p className="cart-page__product-id">Арт. 020</p>
                            <p className="cart-page__product-raiting">1 отзыв</p>
                            <p className="cart-page__product-favorite">в избранное</p>
                        </div>
                        <div className="cart-page__cart">

                            <div className="cart-page__image-slider">
                                <button className="cart-page__slider-btn"></button>
                                <div className="cart-page__image-slides">
                                    <img src="" alt="" />
                                    <img src="" alt="" />
                                    <img src="" alt="" />
                                    <img src="" alt="" />
                                    <img src="" alt="" />
                                </div>
                                <button className="cart-page__slider-btn"></button>
                            </div>

                            <img className="cart-page__image-product" src="" alt="" />

                            <div className="cart-page__user-actions">

                                <div className="cart-page__prices">
                                    <p className="cart-page__price-sale">59 600 ₽</p>
                                    <p className="cart-page__price">69 600 ₽</p>
                                </div>

                                <div className="cart-page__sizes">
                                    <div className="cart-page__size">
                                        <span>Размер (жен.)</span>
                                        <select>
                                            <option value="">14.00</option>
                                            <option value="">13.00</option>
                                        </select>
                                    </div>
                                    <div className="cart-page__size">
                                        <span>Размер (муж.)</span>
                                        <select>
                                            <option value="">14.00</option>
                                            <option value="">13.00</option>
                                        </select>
                                    </div>

                                    <button className="cart-page__btn-buy">В КОРЗИНУ</button>
                                    <button className="cart-page__btn-shat">НАПИСАТЬ WHATSAPP</button>

                                    <div className="cart-page__services">
                                        <p className="cart-page__services-text">образцы этой модели представлены в студии</p>
                                        <p className="cart-page__services-text">- Срок изготовления: 14 календарных дней</p>
                                        <p className="cart-page__services-text">- Артикул: 987</p>
                                        <p className="cart-page__services-text">- Материал: Золото 585 пробы (для размеров 16 и 18)</p>
                                        <p className="cart-page__services-text">- Вставки</p>
                                    </div>

                                    <div className="cart-page__services">
                                        <p className="cart-page__services-text">Внесём любые правки в дизайн:</p>
                                        <p className="cart-page__services-text">- ширина, толщина, камни (добавить, убрать, размер, цвет)</p>
                                        <p className="cart-page__services-text">- цвет колец (одноцветные, двухцветные)</p>
                                        <p className="cart-page__services-text">- поверхность (глянцевая, матовая, текстурированная и т.д.)</p>
                                        <p className="cart-page__services-text">- можно без гравировки эмблемы (лебеди)</p>
                                        <p className="cart-page__services-text">- возможно изготовление в другой пробе и из других _драгоценных металлов</p>
                                        <p className="cart-page__services-text">- возможно нанести свою гравировку</p>
                                    </div>

                                </div>

                                <div className="cart-page__description">
                                    <div className="cart-page__description-btns">
                                        <button className="cart-page__description-btn">ОПИСАНИЕ</button>
                                        <button className="cart-page__description-btn">ОТЗЫВЫ (2)</button>
                                    </div>

                                    <div className="cart-page__content">
                                        <p className="cart-page__content-text">
                                            Прекрасные обручальные кольца с инкрустацией дорожками бриллиантов в женском кольце.
                                        </p>
                                        <p className="cart-page__content-text">
                                            Это замечательный образец современной классики. Бриллианты в кольце расположены под углом к шинке. Камни при столь необычном расположении сияют по-особенному. Их блеск заметен лучше всего когда рука находится в движении.
                                        </p>
                                        <p className="cart-page__content-text">
                                            Мужское кольцо без инкрустации, оно более строгое. Скосы шинки имеют другую, матированную, фактуру. В целом дизайн этих парных колец очень изысканный и современный.
                                        </p>
                                        <p className="cart-page__content-text">
                                            Такие кольца обязательно понравятся тем, кто ищет что-то классическое и в то же время особенное, не такое, как у всех!
                                        </p>
                                    </div>

                                    <div className="cart-page__reviews">

                                        <div className="cart-page__reviews-cart">
                                            <h4 className="cart-page__reviews-title">Андрей и Екатерина</h4>
                                            <p className="raiting">рейтинг</p>
                                            <p className="cart-page__reviews-text">Долго искали обручальные кольца. Тут нам не навязывали ничего, мы просто выбрали. Всё приятно. Кольцами очень довольны.</p>
                                            <div className="cart-page__reviews-images">
                                                <img src="" alt="" />
                                                <img src="" alt="" />
                                                <img src="" alt="" />
                                                <img src="" alt="" />
                                            </div>
                                            <p className="cart-page__reviews-data">29.10.2017</p>
                                        </div>

                                        <div className="cart-page__reviews-cart">
                                            <h4 className="cart-page__reviews-title">Константин Константинопольский</h4>
                                            <p className="raiting">рейтинг</p>
                                            <p className="cart-page__reviews-text">Долго искали обручальные кольца. Тут нам не навязывали ничего, мы просто выбрали. Всё приятно. Кольцами очень довольны.</p>
                                            <div className="cart-page__reviews-images">
                                                <img src="" alt="" />
                                                <img src="" alt="" />
                                                <img src="" alt="" />
                                                <img src="" alt="" />
                                            </div>
                                            <p className="cart-page__reviews-data">21.05.2019</p>
                                        </div>

                                    </div>

                                    <form className="cart-page__form">
                                        <div className="cart-page__form-header">
                                            <label>
                                                <span>Ваше имя</span>
                                                <input type="text" />
                                            </label>
                                            <input type="file" />
                                        </div>
                                        <label>
                                            <span>Ваш отзыв</span>
                                            <textarea>
                                            </textarea>
                                        </label>
                                        <div className="cart-page__form-footer">
                                            <label>
                                                <span>Ваша оценка</span>
                                                <p className="cart-page__form-raiting">рейтинг </p>
                                            </label>
                                            <button className="cart-page__form-submit">ОСТАВИТЬ ОТЗЫВ</button>
                                        </div>
                                    </form>

                                    <img src="" alt="" />

                                    {/* Недавно просмотренные слайдер*/}

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default CartPageOfProduct
