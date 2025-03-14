
import Footer from "../../components/footer";
import Header from "../../components/header";
import { ScrollRestoration } from "react-router-dom";

import "./start-page.scss"


import Top from "./components/Top";
import Catalog from "./components/Catalog";
import NewItemsSlider from "./components/NewItemsSlider";
import RingViewer from "../../components/RingModel";


const StartPage = () => {



    return (
        <>
            <RingViewer />
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

