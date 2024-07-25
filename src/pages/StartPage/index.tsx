
import Footer from "../../components/footer";
import Header from "../../components/header";
import { ScrollRestoration } from "react-router-dom";

import "./start-page.scss"


import Top from "./components/Top";
import Catalog from "./components/Catalog";
import NewItemsSlider from "./components/NewItemsSlider";


const StartPage = () => {



    return (
        <>
            <Header />
            <main className='main'>
                <Top />
                <Catalog />
                <NewItemsSlider />
                <ScrollRestoration />
            </main >
            <Footer />
        </>
    )

}

export default StartPage

