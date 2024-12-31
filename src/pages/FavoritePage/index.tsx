import NavigationText from "../../components/BreadCrumbs"
import Footer from "../../components/footer"
import Header from "../../components/header"

import picture from "../../assets/images/catalo-sale.jpg"


import "./favoritePage.scss"
import Pagination from "../../components/Pagination/index"
import { useState } from "react"
import { ScrollRestoration } from "react-router-dom"
import { getItemFromLocalStorage } from "../../utils"
import { useAppSelector } from "../../hooks/redux/hooks"
import { selectRingByIds, selectRingsStatus } from "../../redux/rings/ringsSelects"
import usePagination from "../../hooks/UsePagination/index"
import Spinner from "../../components/Spinner"
import { CartOfProduct } from "../../components/CartOfProduct"

const FavoritePage = () => {

    const status = useAppSelector(selectRingsStatus)
    const [ringsIds] = useState<number[]>(() => getItemFromLocalStorage("favoriteRings"))
    const rings = useAppSelector(state => selectRingByIds(state, ringsIds))

    const pagination = usePagination({ contentPerPage: 6, count: 1 });

    if (status === 'loading') {
        return <Spinner />
    }

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
                                {(rings.length > 0) && rings.map(item => <CartOfProduct cart={item} key={item.id} />)}
                            </ul>
                            <img className="favorite__img-sale" src={picture} alt="" />
                        </div>
                    </div>
                    <Pagination pagination={pagination} />
                </section>
            </main>
            <ScrollRestoration />
            <Footer />
        </>
    )
}

export default FavoritePage
