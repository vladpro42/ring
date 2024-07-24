
import {
    Header,
    Footer,
    CartPage
} from "./components/index"

import { ScrollRestoration } from "react-router-dom"
import { useAppSelector } from "../../hooks/redux/hooks"


import "./cartPageOfProduct.scss"
import { RootState } from "../../redux/rootReducer"
import Spinner from "../../components/Spinner"

const CartPageOfProduct = () => {


    const status = useAppSelector((state: RootState) => state.rings.status)

    if (status === 'loading') {
        return <Spinner />
    }



    return (
        <>
            <Header />
            <main className="cart-page">
                <CartPage />
            </main >
            <ScrollRestoration />
            <Footer />
        </>
    )
}

export default CartPageOfProduct
