import Footer from "../../components/footer"
import Header from "../../components/header"

import "./notFoundPage.scss"

import pic from "../../assets/images/notFound.svg"
import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <>
            <Header />
            <main className="not-found">
                <section className="not-found__section">
                    <div className="container">
                        <img className="not-found__img" src={pic} alt="" />
                        <p className="not-found__text">Страница, которую вы ищете, устарела или не существует.</p>
                        <Link to="/" className="not-found__btn">НА ГЛАВНУЮ</Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default NotFoundPage
