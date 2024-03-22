
import Footer from "../../components/footer"
import Header from "../../components/header"


import map from "../../assets/images/map.svg"
import mail from "../../assets/images/mail.svg"
import facebook from "../../assets/images/facebook.svg"
import whatsapp from "../../assets/images/whatsapp.svg"
import vk from "../../assets/images/vk.svg"
import instagram from "../../assets/images/instagram.svg"
import telegram from "../../assets/images/telegram.svg"


import "./aboutPage.scss"
import { ScrollRestoration } from "react-router-dom"

const AboutPage = () => {
    return (
        <>
            <Header />

            <main className="main-about">
                <section className="main-about__section">
                    <div className="container">
                        <h1 className="main-about__title">О НАС</h1>
                        <div className="main-about__inner">
                            <div className="main-about__column">
                                <p className="main-about__text">Мы - московская студия Art-Rings. Мы знаем, что обручальные кольца должны быть неповторимы, как ваша история любви.</p>
                                <p className="main-about__text">Здесь вам помогут выбрать или создать по-настоящему эксклюзивные обручальные кольца.</p>
                                <p className="main-about__text">Мы работаем только с проверенными и надёжными поставщиками бриллиантов, поэтому гарантируем, что во вставках - самые лучшие камни.</p>
                                <p className="main-about__text">Все обручальные и помолвочные кольца изготовляются вручную, в строгом соответствии с высочайшими ювелирными стандартами.</p>
                                <p className="main-about__text">В каждое кольцо мы вкладываем не только мастерство, но и частичку души, поэтому они особенные.</p>
                                <p className="main-about__text">Кольца Art-Rings никогда не были и не будут массовыми.</p>
                                <p className="main-about__text">Один из самых волнующих моментов при подготовке к свадьбе - это выбор обручальных колец. С Art-Rings вы можете быть спокойны за исключительное качество и сроки исполнения вашего заказа, получая удовольствие от выбора и ожидания самого счастливого дня вашей жизни.</p>
                                <p className="main-about__text">С Аrt-Rings у вас будут обручальные кольца мечты!</p>
                            </div>

                            <div className="header__bg">
                                <div className="container">
                                    <ul className="header__items">
                                        <li className="header__item">
                                            <a target="_blank" href="https://yandex.by/maps/213/moscow/house/bolshoy_kislovskiy_pereulok_5_7s1/Z04YcAdlTkMPQFtvfXt0dXRjZQ==/?ll=37.605768%2C55.754801&z=17" className="header__item-link">
                                                <img src={map} alt="" />
                                                Москва, Большой Кисловский переулок, 5-7с1
                                            </a>
                                            <a href="mailto:info@art-rings.ru" className="header__item-link">
                                                <img src={mail} alt="" />
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

                        </div>
                    </div>
                </section>
            </main>
            <ScrollRestoration />
            <Footer />

        </>
    )
}

export default AboutPage
