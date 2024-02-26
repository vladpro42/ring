import './App.css'
import './scss/style.scss'

import CatalogPage from './pages/catalog'
import StartPage from './pages/StartPage'
import newItemsSlider1 from "./assets/images/new-items-1.png"
import newItemsSlider2 from "./assets/images/new-items-2.png"
import newItemsSlider3 from "./assets/images/new-items-3.png"
import CartPageOfProduct from './pages/CartPageOfProduct'


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


function App() {

    return (
        <div>
            {/* <CatalogPage data={dataForCart} /> */}
            <CartPageOfProduct />
            {/*  <StartPage data={dataForCart} /> */}
        </div>
    )


}

export default App
