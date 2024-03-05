import Footer from "../../components/footer"
import Header from "../../components/header"

import "./notFoundPage.scss"

import pic from "../../assets/images/notFound.svg"

const NotFoundPage = () => {
    return (
        <>
            <Header />
            <main className="not-found">
                <section className="not-found__section">
                    <div className="container">
                        <img className="not-found__img" src={pic} alt="" />
                        <p className="not-found__text">Страница, которую вы ищете, устарела или не существует.</p>
                        <button className="not-found__btn">НА ГЛАВНУЮ</button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default NotFoundPage
