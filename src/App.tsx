import './scss/style.scss'
import "./pages/StartPage/start-page.scss"


import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Pages from "./pages"
import { useAppDispatch } from "./hooks/redux/hooks.ts";
import { useEffect } from "react";
import { fetchRings } from "./redux/rings/ringsThunk.ts";
import { BASKET, DIAMOND_AS_A_GIFT, FAVORITE, HOW_TO_CHOOSE, MAKE_AN_ORDER, PRODUCT } from './utils/routes.ts';


const weddingRings = {
    title: "Обручальные кольца",
    subtitle: 'Эксклюзивные обручальные кольца с оригинальным дизайном от «Арт-Рингз» — отличный выбор для закрепления союза Вашей любви. В такой важный день все должно быть идеально и ключевой деталью являются обручальные кольца для «нее» и «него» — будущих счастливых супругов.',
}

const engagementRings = {
    title: "Помолвочные кольца",
    subtitle: 'В магазине «Арт-Рингз» можно выбрать идеальное помолвочное кольцо, которое выразит чувства мужчины, делающего предложение руки и сердца своей любимой. Будущей невесте может посчастливиться стать обладательницей не только лучшего мужа на свете, но и изысканного колечка, выполненного из золота и украшенного бриллиантами.',
}

const weddingDuets = {
    title: "Свадебные дуэты",
    subtitle: '',
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <Pages.StartPage />,
    },
    {
        path: '/catalog',
        element: <Pages.CatalogPage {...weddingRings} />,
    },
    {
        path: `/${PRODUCT}/:id`,
        element: <Pages.CartPageOfProduct />,
    },
    {
        path: '/catalog-engagementRings',
        element: <Pages.CatalogPage {...engagementRings} />,
    },
    {
        path: '/catalog-engagementRings/:id',
        element: <Pages.CartPageOfProduct />,
    },
    {
        path: '/catalog-weddingDuets',
        element: <Pages.CatalogPage {...weddingDuets} />,
    },
    {
        path: '/catalog-weddingDuets/:id',
        element: <Pages.CartPageOfProduct />,
    },
    {
        path: `/${BASKET}`,
        element: <Pages.BasketPage />
    },
    {
        path: `/${FAVORITE}`,
        element: <Pages.FavoritePage />
    },
    {
        path: `/${MAKE_AN_ORDER}`,
        element: <Pages.MakeAnOrder />
    },
    {
        path: `/${DIAMOND_AS_A_GIFT}`,
        element: <Pages.DiamondAsAGift />
    },
    {
        path: `/${HOW_TO_CHOOSE}`,
        element: <Pages.HowToChoose />
    },
    {
        path: 'contacts',
        element: <Pages.ContactsPage />
    },
    {
        path: 'wear-an-engagement-ring',
        element: <Pages.WearAnEngagementRing />
    },
    {
        path: 'about',
        element: <Pages.AboutPage />
    },
    {
        path: 'delivery',
        element: <Pages.Delivery />
    },
    {
        path: 'guarantee',
        element: <Pages.GuaranteePage />
    },
    {
        path: 'studio-two',
        element: <Pages.Studio2Page />
    },
    {
        path: 'politics',
        element: <Pages.PoliticsPage />
    },
    {
        path: '/*',
        element: <Pages.NotFoundPage />
    },

])


function App() {

    const dispatch = useAppDispatch();
    // const status = useAppSelector(selectRingsStatus);

    useEffect(() => {
        dispatch(fetchRings);
    }, [dispatch]);

    // if(status == 'loading') {
    //     return <Spinner />
    // }

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )

}

export default App
