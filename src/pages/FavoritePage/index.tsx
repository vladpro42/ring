import NavigationText from "../../components/NavigationText"
import Footer from "../../components/footer"
import Header from "../../components/header"

import picture from "../../assets/images/catalo-sale.jpg"
import ProductCart from "../../components/ProductCart"


import "./favoritePage.scss"
import Pagination from "../catalog/components/Pagination/index"
import { useState } from "react"
import { ScrollRestoration } from "react-router-dom"
import { getItemFromLocalStorage } from "../../utils"
import { useAppSelector } from "../../hooks/redux/hooks"
import { selectRingByIds, selectRingsStatus } from "../../redux/rings/ringsReducer"
import usePagination from "../../hooks/UsePagination/index"
import Spinner from "../../components/Spinner"

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
                                {(rings.length > 0) && rings.map(item => <ProductCart key={item.id} cart={item} />)}
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
