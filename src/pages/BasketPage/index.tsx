import Header from '../../components/header'
import Footer from '../../components/footer'
import Form3 from './Form3'

import logoBasket from "../../assets/images/logo-basket.png"

import "./basket.scss"


import { useCallback, useEffect, useState } from 'react'
import {
    removeAllCreators,
} from '../../redux/basket/basketActions'
import { useAppDispatch } from '../../hooks/redux/hooks'
import { ScrollRestoration } from 'react-router-dom'
import Basket from './Basket'
import Popup from '../../UI/Popup'


const BasketPage = () => {


    const [isPopup, setIsPropup] = useState(false)
    const dispatch = useAppDispatch()


    const handlePopupClosePopup = useCallback(() => {
        setIsPropup(false)
    }, [])

    const handleClickRemoveAll = useCallback(() => {
        dispatch(removeAllCreators())
    }, [dispatch])

    const handlePopupOpenClick = useCallback(() => setIsPropup(true), [])

    useEffect(() => {
        if (isPopup) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "initial"
        }
    }, [isPopup])

    const popup = <Popup handleClickClosePopup={handlePopupClosePopup}>
        <div className="basket__popup-header">
            <button onClick={handlePopupClosePopup} className='basket__popup-close'></button>
            <a href="#" className="basket__popup-logo">
                <img src={logoBasket} alt="" />
            </a>
        </div>
        <Form3 onClick={handleClickRemoveAll} />
    </Popup>

    return (
        <>
            {isPopup && popup}
            <Header />
            <Basket handlePopupClick={handlePopupOpenClick} handleClickRemoveAll={handleClickRemoveAll} />
            <ScrollRestoration />
            <Footer />
        </>
    )
}

export default BasketPage
