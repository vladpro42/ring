
import {
    Header,
    Footer,
<<<<<<< HEAD
    BreadCrumbs,
    DescriptionProduct,
    CartPageCart,
    CartPageTab
=======
    CartPage
>>>>>>> dev
} from "./components/index"

import { ScrollRestoration } from "react-router-dom"


import "./cartPageOfProduct.scss"


const CartPageOfProduct = () => {


    return (
        <>
            <Header />
            <main className="cart-page">
<<<<<<< HEAD
                <section className="cart-page__section">
                    <div className="container">
                        <BreadCrumbs />
                        <DescriptionProduct id={+id} rating={ring?.raiting} />
                        <CartPageCart
                            imgSrc={ring?.imgSrc}
                            price={ring?.price}
                            priceSale={ring?.priceSale}
                            onClick={addBasket}
                        />
                        <CartPageTab />
                        <RecentlyViewed />
                    </div>
                </section>
=======
                <CartPage />
>>>>>>> dev
            </main >
            <ScrollRestoration />
            <Footer />
        </>
    )
}

export default CartPageOfProduct
