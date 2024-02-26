import './App.css'
import './scss/style.scss'

import CatalogPage from './pages/catalog'
import StartPage from './pages/StartPage'
import newItemsSlider1 from "./assets/images/new-items-1.png"
import newItemsSlider2 from "./assets/images/new-items-2.png"
import newItemsSlider3 from "./assets/images/new-items-3.png"
import CartPageOfProduct from './pages/CartPageOfProduct'
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'
import BasketPage from './pages/BasketPage'
import FavoritePage from './pages/FavoritePage'
import MakeAnOrder from './pages/MakeAnOrder'
import Studia2 from './pages/Studia2'
import HowToChoose from './pages/HowToChoose'
import DiamondAsAGift from './pages/DiamondAsAGift'
import ContactsPage from './pages/Contacts'
import WearAnEngagementRing from './pages/WearAnEngagementRing'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'
import Delivery from './pages/Delivery'
import GaranteePage from './pages/GaranteePage'
import GuaranteePage from './pages/GaranteePage'



export interface ICart {
    id: number;
    raiting: number;
    imgSrc: string;
    price: number;
    priceSale: null;
}
export type typeDataForCart = ICart[]

const dataForCart: typeDataForCart = [
    {
        id: 1, raiting: 3, imgSrc: newItemsSlider1, price: 59600, priceSale: null
    },
    {
        id: 2, raiting: 4.5, imgSrc: newItemsSlider2, price: 59600, priceSale: null
    },
    {
        id: 3, raiting: 5, imgSrc: newItemsSlider3, price: 59600, priceSale: null
    },
]

const router = createBrowserRouter([
    {
        path: '/',
        element: <StartPage data={dataForCart} />
    },
    {
        path: 'catalog',
        element: <CatalogPage data={dataForCart} />
    },
    {
        path: 'catalog2',
        element: <CartPageOfProduct />
    },
    {
        path: 'basket',
        element: <BasketPage />
    },
    {
        path: 'favorite',
        element: <FavoritePage />
    },
    {
        path: 'MakeAnOrder',
        element: <MakeAnOrder />
    },
    {
        path: 'DiamondAsAGift',
        element: <DiamondAsAGift />
    },
    {
        path: 'MakeAnOrder',
        element: <MakeAnOrder />
    },
    {
        path: 'HowToChoose',
        element: <HowToChoose />
    },
    {
        path: 'contacts',
        element: <ContactsPage />
    },
    {
        path: 'WearAnEngagementRing',
        element: <WearAnEngagementRing />
    },
    {
        path: 'AboutPage',
        element: <AboutPage />
    },
    {
        path: 'delivery',
        element: <Delivery />
    },
    {
        path: 'guarantee',
        element: <GuaranteePage />
    },
    {
        path: '/*',
        element: <NotFoundPage />
    },
])


function App() {

    return (
        <RouterProvider router={router} />
    )

}

export default App
