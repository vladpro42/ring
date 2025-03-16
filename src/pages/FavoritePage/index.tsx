import Footer from "../../components/footer"
import Header from "../../components/header"



import "./favoritePage.scss"
import { ScrollRestoration } from "react-router-dom"
import { useAppSelector } from "../../hooks/redux/hooks"
import { selectRingsStatus } from "../../redux/rings/ringsSelects"
import Spinner from "../../components/Spinner"
import FavoriteSection from "./FavoriteSection"

const FavoritePage = () => {

    const status = useAppSelector(selectRingsStatus)


    if (status === 'loading') {
        return <Spinner />
    }

    return (
        <>
            <Header />
            <FavoriteSection />
            <ScrollRestoration />
            <Footer />
        </>
    )
}

export default FavoritePage
