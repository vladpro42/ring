import NavigationText from "../../components/NavigationText"
import Footer from "../../components/footer"
import Header from "../../components/header"

import picture from "../../assets/images/catalo-sale.jpg"
import ProductCart from "../../components/ProductCart"


import "./favoritePage.scss"
import Pagination from "../../components/Pagination/"
import { useState } from "react"
import { ScrollRestoration } from "react-router-dom"
import { getItemFromLocalStorage } from "../../utils"
import { useAppSelector } from "../../hooks/redux/hooks"
import { selectRingByIds } from "../../redux/rings/ringsReducer"

const FavoritePage = () => {


    const [ringsIds] = useState<number[]>(() => getItemFromLocalStorage("favoriteRings"))
    const rings = useAppSelector(state => selectRingByIds(state, ringsIds))

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
            <ScrollRestoration />
            <Footer />
        </>
    )
}

export default FavoritePage
