import Footer from "../../components/footer"
import Header from "../../components/header"

import { ScrollRestoration } from "react-router-dom"
import OrderPageSection from "./OrderPageSetion"
import OrderPageTodoSection from "./OrderPageTodoSection"
import OrderPageFormSection from "./OrderPageFormSection"

import "./makeAnOrder.scss"
import OrderPageExample from "./OrderPageExample"

const MakeAnOrder = () => {

    return (
        <>
            <Header />
            <main className="order-page">
                <OrderPageSection />
                <OrderPageTodoSection />
                <OrderPageFormSection />
                <OrderPageExample />
            </main >
            <ScrollRestoration />
            <Footer />
        </>
    )
}

export default MakeAnOrder
