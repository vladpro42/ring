import Footer from "../../components/footer"
import Header from "../../components/header"


import "./delivery.scss"



const Delivery = () => {
    return (
        <>
            <Header />

            <main className="main-delivery">
                <section className="main-delivery__section">
                    <div className="container">
                        <h1 className="main-delivery__title">ДОСТАВКА И ОПЛАТА</h1>
                        <p className="main-delivery__text">
                            Все ювелирные изделия Art-Rings изготовляются после получения компанией информации по следующим параметрам: материал изделия (изделий), цвет изделия (изделий), размер изделия (изделий), материал вставок, а также после осуществления предоплаты в размере 50% от стоимости заказа.
                        </p>
                        <p className="main-delivery__text">
                            Доставка в регионы России (кроме Москвы) осуществляется транспортной компанией согласно правил транспортировки ювелирных изделий и производится БЕСПЛАТНО.
                        </p>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    )
}

export default Delivery
