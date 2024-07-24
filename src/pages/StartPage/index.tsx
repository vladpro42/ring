
import Footer from "../../components/footer";
import Header from "../../components/header";
import { ScrollRestoration } from "react-router-dom";

import "./start-page.scss"

import { useAppSelector } from "../../hooks/redux/hooks";
import { selectRingsStatus } from "../../redux/rings/ringsSelects";
import Spinner from "../../components/Spinner";

import Top from "./components/Top";
import Catalog from "./components/Catalog";
import NewItemsSlider from "./components/NewItemsSlider";


const StartPage = () => {
    const status = useAppSelector(selectRingsStatus)


    if (status === 'loading') {
        return <Spinner />
    }

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

