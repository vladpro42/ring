
import Footer from "../../components/footer"
import Header from "../../components/header"

import "./garanteePage.scss"

const GuaranteePage = () => {
    return (
        <>
            <Header />

            <main className="main-garantee">
                <section className="main-garantee__section">
                    <div className="container">
                        <h1 className="main-garantee__title">ГАРАНТИИ</h1>
                        <p className="main-garantee__text">
                            Art - Rings предоставляет своим клиентам пожизненную гарантию на подлинность материалов и камней, из которых изготовлены наши ювелирные изделия.
                            Все ювелирные изделия Art - Rings клеймированы в соответствии с требованиями Пробирной палаты Российской Федерации, камни прошли геммологическую экспертизу.
                        </p>
                        <p className="main-garantee__text">
                            Гарантия на форму кольца, полировку, гальванические покрытия и закрепку камней до 0,01 Кт составляет 1 год.
                        </p>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    )
}

export default GuaranteePage

