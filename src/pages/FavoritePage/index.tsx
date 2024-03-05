import NavigationText from "../../components/NavigationText"
import Footer from "../../components/footer"
import Header from "../../components/header"

import picture from "../../assets/images/catalo-sale.jpg"
import ProductCart from "../../components/ProductCart"

import { dataForCart } from "../../App"

import "./favoritePage.scss"
import Pagination from "../../components/Pagination/"

const FavoritePage = () => {
    return (
        <>
            <Header />
            <main className="favorite">
                <section className="favorite__section">
                    <div className="container">
                        <NavigationText />
                        <h1 className="favorite__title">избранное</h1>
                        <div className="favorite__inner">
                            <ul className="favorite__list">
                                {dataForCart.map(item => <ProductCart cart={item} />)}
                                <li className="favorite__item"></li>
                                <li className="favorite__item"></li>
                                <li className="favorite__item"></li>
                            </ul>
                            <img className="favorite__img-sale" src={picture} alt="" />
                        </div>
                    </div>
                    <Pagination />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default FavoritePage
