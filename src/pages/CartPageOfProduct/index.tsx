import Header from "../../components/header"
import Footer from "../../components/footer"
import NavigationText from "../../components/NavigationText"
import DescriptionProduct from "./components/DescriptionProduct"
import CartPageCart from "./components/CartPageCart"
import CartPageTab from "./components/CartPageTab"
import RecentlyViewed from "./components/RecentlyViewed"

import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../hooks/redux/hooks"

import { selectRings } from "../../redux/rings/ringsReducer"
import { BasketRing, addBasketCreator } from "../../redux/basket/basketReducer"



import "./cartPageOfProduct.scss"
import { useEffect } from "react"
import { setItemToLocalStorage } from "../../utils"




const CartPageOfProduct = () => {


    const dispatch = useAppDispatch()

    const rings = useSelector(selectRings)
    const { id } = useParams();
    const [ring] = rings.filter(ring => {
        if (ring.id === Number(id)) {
            return ring
        }
    })

    useEffect(() => {

        setItemToLocalStorage('recentlyViewed', ring)

    }, [ring])

    const addBasket = () => {

        const payload: BasketRing = {
            ring: ring,
            defaultCount: 1,
            model: 1,
            sizeFemale: 14
        }

        dispatch(addBasketCreator(payload))
    }

    return (
        <>
            <Header />
            <main className="cart-page">
                <section className="cart-page__section">
                    <div className="container">
                        <NavigationText />

                        <DescriptionProduct id={ring.id} />
                        <CartPageCart
                            imgSrc={ring.imgSrc}
                            price={ring.price}
                            priceSale={ring.priceSale}
                            onClick={addBasket}
                        />
                        <CartPageTab />
                        <RecentlyViewed />
                    </div>
                </section>
            </main >
            <Footer />
        </>
    )
}

export default CartPageOfProduct
