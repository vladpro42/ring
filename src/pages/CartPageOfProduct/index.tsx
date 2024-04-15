import Header from "../../components/header"
import Footer from "../../components/footer"
import NavigationText from "../../components/NavigationText"
import DescriptionProduct from "./components/DescriptionProduct"
import CartPageCart from "./components/CartPageCart"
import CartPageTab from "./components/CartPageTab"

import { ScrollRestoration, useNavigate, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/redux/hooks"

import { selectRingById } from "../../redux/rings/ringsReducer"
import { BasketRing, addBasketCreator } from "../../redux/basket/basketReducer"

import "./cartPageOfProduct.scss"
import { useCallback, useEffect } from "react"
import { RootState } from "../../redux/rootReducer"
import Spinner from "../../components/Spinner"
import { getItemFromLocalStorage } from "../../utils"

const CartPageOfProduct = () => {

    const dispatch = useAppDispatch()
    const status = useAppSelector((state: RootState) => state.rings.status)
    const { id } = useParams();
    const ring = useAppSelector((state: RootState) => selectRingById(state, Number(id))) || null
    const navigate = useNavigate()

    const addBasket = useCallback(() => {

        const payload: BasketRing = {
            ring: ring,
            defaultCount: 1,
            model: 1,
            sizeFemale: 14
        }

        dispatch(addBasketCreator(payload))
    }, [ring, dispatch])

    useEffect(() => {
        if (!ring) {
            console.log(true)
            navigate('/notFounded')
        }
    }, [navigate, ring])

    useEffect(() => {
        const recentlyViewedIds: number[] = getItemFromLocalStorage("recentlyViewed")

        if (!recentlyViewedIds.includes(+id)) {
            recentlyViewedIds.push(+id)
        }
        // Заполнить 
        // if (recentlyViewedIds.length < 4) {
        //     for (let i = 1; i < 5; i++) {
        //         if (+id !== i) {
        //             recentlyViewedIds.push(i)
        //         }
        //
        //      }
        //  }

        localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewedIds))
    }, [id])

    if (status === 'loading') {
        return <Spinner />
    }



    return (
        <>
            <Header />
            <main className="cart-page">
                <section className="cart-page__section">
                    <div className="container">
                        <NavigationText />
                        <DescriptionProduct id={+id} rating={ring?.raiting} />
                        <CartPageCart
                            imgSrc={ring?.imgSrc}
                            price={ring?.price}
                            priceSale={ring?.priceSale}
                            onClick={addBasket}
                        />
                        <CartPageTab />
                        {/*<RecentlyViewed /> */}
                    </div>
                </section>
            </main >
            <ScrollRestoration />
            <Footer />
        </>
    )
}

export default CartPageOfProduct
