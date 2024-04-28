import Footer from "../../components/footer"
import Header from "../../components/header"

import map from "../../assets/images/map.svg"
import mail from "../../assets/images/mail.svg"
import facebook from "../../assets/images/facebook.svg"
import whatsapp from "../../assets/images/whatsapp.svg"
import vk from "../../assets/images/vk.svg"
import instagram from "../../assets/images/instagram.svg"
import telegram from "../../assets/images/telegram.svg"
import mapPic from "../../assets/images/contacts-pic.jpg"
import contact1 from "../../assets/images/contacts-1.jpg"
import contact2 from "../../assets/images/contacts-2.jpg"
import contact3 from "../../assets/images/contacts-3.jpg"

import "./contact.scss"
import SwiperTwo from "../../components/SwiperTwo"
import { ScrollRestoration } from "react-router-dom"


const ContactsPage = () => {

    const images = [contact1, contact2, contact3, contact1, contact2, contact3]

    return (
        <>

            <Header />

            <main className="contact-main">
                <section className="contact-main__section">
                    <div className="container">
                        <h1 className="contact-main__title">КОНТАКТЫ</h1>
                        <p className="contact-main__text">Наша студия переехала с ул. Никольской на Арбат. Теперь у нас ещё просторнее, уютнее и больше красивых колечек!</p>

                        <div className="contact-main__inner">
                            <div className="header__bg">
                                <div className="container">
                                    <ul className="header__items">
                                        <li className="header__item">
                                            <a target="_blank" href="https://yandex.by/maps/213/moscow/house/bolshoy_kislovskiy_pereulok_5_7s1/Z04YcAdlTkMPQFtvfXt0dXRjZQ==/?ll=37.605768%2C55.754801&z=17" className="header__item-link">
                                                <img src={map} alt="" />
                                                Москва, Большой Кисловский переулок, 5-7с1
                                            </a>
                                            <a href="mailto:info@art-rings.ru" className="header__item-link item-link__map">
                                                <img className="contact-main__img-map" src={mail} alt="" />
                                                info@art-rings.ru
                                            </a>
                                        </li>
                                        <li className="header__item oclock">
                                            <p className="header__item-link">пн-пт 11:00-20:00</p>
                                            <p className="header__item-link">сб, вс 11:00-17:00</p>
                                        </li>
                                        <li className="header__item phone">
                                            <a href="tel:+74999408777" className="header__item-link">+7 (499) 940-87-77</a>
                                            <a href="tel:+79778412340" className="header__item-link">+7 (977) 841-23-40</a>
                                        </li>
                                        <li className="header__item user-actions">
                                            <a href="#" className="header__item-link">
                                                <img src={facebook} alt="" />
                                            </a>
                                            <a href="#" className="header__item-link">
                                                <img src={vk} alt="" />
                                            </a>
                                            <a href="#" className="header__item-link">
                                                <img src={whatsapp} alt="" />
                                            </a>
                                            <a href="#" className="header__item-link">
                                                <img src={instagram} alt="" />
                                            </a>
                                            <a href="#" className="header__item-link">
                                                <img src={telegram} alt="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <a target="_blank" href="https://yandex.by/maps/213/moscow/house/bolshoy_kislovskiy_pereulok_5_7s1/Z04YcAdlTkMPQFtvfXt0dXRjZQ==/?ll=37.605768%2C55.754801&z=17">
                                <img src={mapPic} alt="" className="contact-main__img" />
                            </a>
                        </div>

                        <h2 className="contact-main__title-slider">Фото студии с улицы</h2>
                    </div>

                    <ul className="contact-main__swiper">

                        <SwiperTwo images={images} />
                    </ul>
                </section>
            </main>
            <ScrollRestoration />
            <Footer />

        </>
    )
}

export default ContactsPage
