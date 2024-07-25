import { ScrollRestoration } from "react-router-dom"
import Footer from "../../components/footer"
import Header from "../../components/header"


import "./delivery.scss"
import DeliverySection from "./DeliverySection"



const Delivery = () => {
    return (
        <>
            <Header />
            <DeliverySection />
            <ScrollRestoration />
            <Footer />
        </>
    )
}

export default Delivery
