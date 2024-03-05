import './App.css'
import './scss/style.scss'

import CatalogPage from './pages/catalog'
import StartPage from './pages/StartPage'

import CartPageOfProduct from './pages/CartPageOfProduct'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BasketPage from './pages/BasketPage'
import FavoritePage from './pages/FavoritePage'
import MakeAnOrder from './pages/MakeAnOrder'
import HowToChoose from './pages/HowToChoose'
import DiamondAsAGift from './pages/DiamondAsAGift'
import ContactsPage from './pages/Contacts'
import WearAnEngagementRing from './pages/WearAnEngagementRing'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'
import Delivery from './pages/Delivery'
import GuaranteePage from './pages/GaranteePage'
import Studio2Page from './pages/Studio2'
import PoliticsPage from './pages/PoliticsPage'


import { dataForCart } from './data/data'




const router = createBrowserRouter([
    {
        path: '/',
        element: <StartPage />,
    },
    {
        path: '/catalog',
        element: <CatalogPage data={dataForCart} />,
    },
    {
        path: '/catalog/:id',
        element: <CartPageOfProduct />,
    },
    {
        path: '/basket',
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
        path: 'diamond-as-a-gift',
        element: <DiamondAsAGift />
    },
    {
        path: 'MakeAnOrder',
        element: <MakeAnOrder />
    },
    {
        path: 'how-to-choose',
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
        path: 'about',
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
        path: 'studio-two',
        element: <Studio2Page />
    },
    {
        path: 'politics',
        element: <PoliticsPage />
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
