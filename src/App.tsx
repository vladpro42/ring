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

const weddingRings = {
    title: "обручальные кольца",
    subtitle: 'Эксклюзивные обручальные кольца с оригинальным дизайном от «Арт-Рингз» — отличный выбор для закрепления союза Вашей любви. В такой важный день все должно быть идеально и ключевой деталью являются обручальные кольца для «нее» и «него» — будущих счастливых супругов.',
}

const engagementRings = {
    title: "Помолвочные кольца",
    subtitle: 'В магазине «Арт-Рингз» можно выбрать идеальное помолвочное кольцо, которое выразит чувства мужчины, делающего предложение руки и сердца своей любимой. Будущей невесте может посчастливиться стать обладательницей не только лучшего мужа на свете, но и изысканного колечка, выполненного из золота и украшенного бриллиантами.',
}

const weddingDuets = {
    title: "Помолвочные кольца",
    subtitle: '',
}




const router = createBrowserRouter([
    {
        path: '/',
        element: <StartPage />,
    },
    {
        path: '/catalog-weddingRings',
        element: <CatalogPage {...weddingRings} data={dataForCart} />,
    },
    {
        path: '/catalog-weddingRings/:id',
        element: <CartPageOfProduct />,
    },
    {
        path: '/catalog-engagementRings',
        element: <CatalogPage {...engagementRings} data={dataForCart} />,
    },
    {
        path: '/catalog-engagementRings/:id',
        element: <CartPageOfProduct />,
    },
    {
        path: '/catalog-weddingDuets',
        element: <CatalogPage {...weddingDuets} data={dataForCart} />,
    },
    {
        path: '/catalog-weddingDuets/:id',
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
        path: 'make-an-order',
        element: <MakeAnOrder />
    },
    {
        path: 'diamond-as-a-gift',
        element: <DiamondAsAGift />
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
        path: 'wear-an-engagement-ring',
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

import { useEffect } from 'react'
import { fetchRings } from './redux/rings/ringsReducer'
import { useAppDispatch } from './hooks/redux/hooks'

function App() {

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchRings)
    }, [dispatch])


    return (
        <div>
            <RouterProvider router={router} >
            </RouterProvider>
        </div>
    )

}

export default App
