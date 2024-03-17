import NavigationText from "../../components/NavigationText"
import Footer from "../../components/footer"
import Header from "../../components/header"

import picture from "../../assets/images/catalo-sale.jpg"
import ProductCart from "../../components/ProductCart"

import { Ring } from "../../redux/rings/ringsReducer"

import "./favoritePage.scss"
import Pagination from "../../components/Pagination/"
import { useState } from "react"

const FavoritePage = () => {

    const getInitialStateFromLocalStorage = (key: string) => {
        const ringsJSON = localStorage.getItem(key)
        if (ringsJSON) {
            return JSON.parse(ringsJSON)
        }
        return []
    }
    const [rings] = useState<Ring[]>(() => getInitialStateFromLocalStorage("favoriteRings"))

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
                                {(rings.length > 0) && rings.map(item => <ProductCart cart={item} />)}
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
