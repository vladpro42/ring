
import {
    Header,
    Footer,
    CartPage
} from "./components/index"

import { ScrollRestoration } from "react-router-dom"


import "./cartPageOfProduct.scss"


const CartPageOfProduct = () => {


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
