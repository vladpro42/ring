import Footer from "../../components/footer"
import Header from "../../components/header"

import studio1 from "../../assets/images/studio-1.jpg"
import studio2 from "../../assets/images/studio-2.jpg"
import studio3 from "../../assets/images/studio-3.jpg"

import "swiper/css"
import "swiper/css/scrollbar"
import "./studia2.scss"
import SwiperTwo from "../../components/SwiperTwo"
import { ScrollRestoration } from "react-router-dom"

const Studio2Page = () => {

    const images = [studio1, studio2, studio3, studio1, studio2, studio3]
    return (
        <>
            <Header />

            <main className="main__studio-two">
                <section className="studio">
                    <div className="container">
                        <h1 className="studio__title">СТУДИЯ</h1>
                        <div className="studio__inner">
                            <div className="studio__column1">
                                <p className="studio__text">
                                    В «Art-Rings» выбрать обручальные и помолвочные кольца с лебедями вы можете через каталог в интернет-магазине по фотографиям и при помощи удобной системы фильтров. А еще удобнее сделать выбор, приехав лично в наш офис, в котором можно посмотреть и померить любые модели колец, а также получить подробные ответы на любые вопросы.
                                </p>
                                <p className="studio__text">
                                    Мы находимся в Москве по адресу Большой Кисловский переулок, 5-7с1. Посмотреть расположение на карте и сориентироваться как добраться до нашего офиса можно на странице контакты.
                                </p>
                                <p className="studio__text">
                                    В салоне «Art-Rings» Вас встретят менеджеры экстра-класса — профессионалы, посвятившие ювелирному делу многие годы. Мы знаем об обручальных кольцах все и поможем сделать выбор, который полностью устроит Вас и приведет в восторг Вашу избранницу.
                                </p>
                            </div>
                            <div className="studio__column1">
                                <p className="studio__text">
                                    Менеджеры салона подробно расскажут об особенностях разных моделей, металлов и сплавов, о камнях, с точностью определят нужный размер, порекомендуют анатомически правильную посадку колец.

                                </p>
                                <p className="studio__text">
                                    Если Вы хотите внести свои правки в дизайн колец (высота, толщина, количество камней и их размер) и получить абсолютно уникальные и неповторимые кольца, это тоже проще и удобней всего сделать в офисе. Приходите со своими фотографиями, рисунками и эскизами — мы с радостью возьмемся воплотить любые мечты.
                                    Ждём Вас ежедневно, по будням с 11:00 до 20:00, по выходным 11:00 до 17:00.
                                    Тел.: +7 (499) 940-87-77
                                </p>
                                <p className="studio__text studio__text--bold">
                                    Ждём Вас ежедневно, по будням с 11:00 до 20:00, по выходным 11:00 до 17:00.
                                </p>
                                <a href="tel:+74999408777" className="studio__link">Тел.: +7 (499) 940-87-77</a>
                            </div>
                        </div>
                    </div>

                    <ul className="studio__slider">
                        <SwiperTwo images={images} />
                    </ul>
                </section>
            </main >
            <ScrollRestoration />
            <Footer />
        </>
    )
}

export default Studio2Page
