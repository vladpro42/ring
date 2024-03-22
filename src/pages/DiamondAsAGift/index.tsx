import Footer from "../../components/footer"
import Header from "../../components/header"

import picture from "../../assets/images/diamond.png"
import briliant from "../../assets/images/briliant.svg"

import "./diamondAsAGift.scss"
import { ScrollRestoration } from "react-router-dom"


const DiamondAsAGift = () => {
    return (
        <>
            <Header />

            <main className="diamond">
                <section className="diamond__section">

                    <div className="top__briliant">
                        <div>
                            <img src={briliant} alt="" />
                        </div>
                        <p className="top__briliant-text">Бриллиант в подарок</p>
                    </div>

                    <p className="diamond__text">
                        На свадьбу все дарят подарки, и у Art-Rings для молодожёнов приготовлено нечто особенное!
                    </p>
                    <p className="diamond__text">Мы дарим подарок, который всегда будет с Вами!</p>
                    <p className="diamond__text">  Бриллиант в каждое обручальное кольцо с нашей эмблемой совершенно бесплатно!</p>
                    <p className="diamond__text">Мы дарим подарок, который всегда будет с Вами!</p>
                    <p className="diamond__link">
                        Для более подробной информации, пожалуйста, свяжитесь с менеджерами по телефону
                        +7 (499) 940-87-77, приезжайте в наш офис: Большой Кисловский переулок, 5-7с1 или пишите  info@art-rings.ru
                    </p>
                    <img className="diamond__img" src={picture} alt="" />
                </section>
            </main>
            <ScrollRestoration />
            <Footer />
        </>
    )
}

export default DiamondAsAGift
