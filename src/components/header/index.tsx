
import map from "../../assets/images/map.svg"
import mail from "../../assets/images/mail.svg"
import logo from "../../assets/images/logo.png"

import { Link } from 'react-router-dom'
import { useAppSelector } from "../../hooks/redux/hooks"
import { selectRingsFromBasketLength } from "../../redux/basket/basketReducer"
import { getItemFromLocalStorage } from "../../utils"
import UserActionsLinks from "./components/UserActionsLinks"
import HeaderSearch from "./components/HeaderSearch"
import { useState } from "react"
import { Modal } from "@mui/material"
import NavMenu from "./components/NavMenu"
import ItemListItem from "../footer/components/ItemListItem"
import ItemList from "../footer/components/ItemList"

import "./header.scss"
import HeaderCompany from "./components/HeaderCompany"
import BtnClose from "../../UI/BtnClose"
import HeaderFooterList from "./components/HeaderFooterList"
import SearchMobile from "./components/SearchMobile"

const Header = () => {

    const lenBasket = useAppSelector(selectRingsFromBasketLength)
    const lenFavorite = getItemFromLocalStorage("favoriteRings").length

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open, setOpen] = useState(false);

    const [isSearch, setIsSearch] = useState(false)


    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                className='modal'
            >
                <div className="container">
                    <div className="modal__inner">
                        <button onClick={handleClose} className="modal__close">
                            <BtnClose />
                        </button>
                        <img src="/images/logo_modal.png" alt="" />
                        <nav className="modal__nav">
                            <NavMenu />
                            <HeaderFooterList className="header__footer-list--mobile" />
                        </nav>
                        <footer className="modal__footer">
                            <ItemListItem />
                            <NavMenu />
                            <div className="modal__actions">
                                <ItemList />
                                <UserActionsLinks />
                            </div>
                            <div className="modal__contacts--mobile">
                                <h4 className="modal__contacts-title">КОНТАКТЫ</h4>
                                <div className="modal__contacts-inner">
                                    <div className="modal__contacts-column">
                                        <a href="#" className="modal__contacts-link modal__contacts-link--phone">+7(977) 841 23 40</a>
                                        <a href="#" className="modal__contacts-link modal__contacts-link--phone">+7(499) 940 87 77</a>
                                        <a href="#" className="modal__contacts-link modal__contacts-link--email">info@art-rings.ru</a>
                                    </div>
                                    <div className="modal__contacts-column">
                                        <a href="#" className="modal__contacts-link modal__contacts-link--map">Москва, Большой Кисловский переулок, 5-7с1</a>
                                        <a href="#" className="modal__contacts-link">пн-пт 11:00-20:00</a>
                                        <a href="#" className="modal__contacts-link">сб, вс 11:00-17:00</a>
                                    </div>
                                </div>
                            </div>
                        </footer>

                    </div>
                </div>
            </Modal>
            <>
                <header className='header'>
                    <div className="header__bg">
                        <div className="container">
                            <ul className="header__items">
                                <li className="header__item">
                                    <a href="" className="header__item-link">
                                        <img src={map} alt="" />
                                        Москва, Большой Кисловский переулок, 5-7с1
                                    </a>
                                    <a href="mailto:info@art-rings.ru" className="header__item-link">
                                        <img src={mail} alt="" />
                                        info@art-rings.ru
                                    </a>
                                </li>
                                <li className="header__item oclock">
                                    <p className="header__item-link">пн-пт 11:00-20:00</p>
                                    <p className="header__item-link">сб, вс 11:00-17:00</p>
                                </li>
                                <li className="header__item phone">
                                    <a href="tel:+74999408777" className="header__item-link">+7 (499) 940-87-77</a>
                                    <a href="tel:+79778412340" className="header__item-link">+7 (977) 841-23-40</a>
                                </li>
                                <UserActionsLinks />
                                <svg
                                    onClick={() => setIsSearch(!isSearch)}
                                    className="header__search--mobile header__search-lupa"
                                    width="20" height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.5">
                                        <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#9EAFC2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M17.5 17.5L13.875 13.875" stroke="#9EAFC2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                </svg>
                            </ul>
                        </div>
                    </div>
                    <div className="container">

                        <div className="header__inner">
                            <nav className="header__nav">
                                <NavMenu />
                            </nav>

                            <HeaderSearch />
                        </div>
                    </div>
                    <div className="container">
                        <HeaderCompany />
                        <div className="header__footer">
                            <Link to="/" className="logo">
                                <img src={logo} alt="" />
                            </Link>
                            <div onClick={handleOpen} className="burger__container">
                                <span className="burger__line"></span>
                                <span className="burger__line"></span>
                                <span className="burger__line"></span>
                            </div>
                            <HeaderCompany className="header__company--mobile" />
                            <HeaderFooterList />
                            <div className="user__actions">
                                <Link to="/basket" className="user__actions-link">
                                    {lenBasket === 0 ? null : <div className="user__actions-circle">{lenBasket}</div>}
                                    <svg className="user__actions-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="#020F59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="#020F59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L22.2 10.195L23 6H6M5 1L6.00075 6M6.00075 6L7.68 14.39L8.38755 15.5583M6.00075 6H23L22.2 10.195M6.00075 6H6M9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583" stroke="#020F59" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M8.38755 15.5583C8.02191 15.264 7.77144 14.8504 7.68 14.39L6 6H23L22.2 10.195L21.4 14.39C21.3086 14.8504 21.0581 15.264 20.6925 15.5583C20.3268 15.8526 19.8693 16.009 19.4 16H9.68C9.2107 16.009 8.75318 15.8526 8.38755 15.5583Z" fill="#020F59" />
                                        <path d="M7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583M7.68 14.39L6 6H23L22.2 10.195L21.4 14.39C21.3086 14.8504 21.0581 15.264 20.6925 15.5583C20.3268 15.8526 19.8693 16.009 19.4 16H9.68C9.2107 16.009 8.75318 15.8526 8.38755 15.5583M7.68 14.39L8.38755 15.5583" stroke="#020F59" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </Link>
                                <Link to="/favorite" className="user__actions-link">
                                    {lenFavorite === 0 ? null : <div className="user__actions-circle">{lenFavorite}</div>}
                                    <svg className="user__actions-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="24" height="24" fill="white" />
                                        <path d="M20.8401 4.61012C20.3294 4.09912 19.7229 3.69376 19.0555 3.4172C18.388 3.14064 17.6726 2.99829 16.9501 2.99829C16.2276 2.99829 15.5122 3.14064 14.8448 3.4172C14.1773 3.69376 13.5709 4.09912 13.0601 4.61012L12.0001 5.67012L10.9401 4.61012C9.90843 3.57842 8.50915 2.99883 7.05012 2.99883C5.59109 2.99883 4.19181 3.57842 3.16012 4.61012C2.12843 5.64181 1.54883 7.04108 1.54883 8.50012C1.54883 9.95915 2.12843 11.3584 3.16012 12.3901L4.22012 13.4501L12.0001 21.2301L19.7801 13.4501L20.8401 12.3901C21.3511 11.8794 21.7565 11.2729 22.033 10.6055C22.3096 9.93801 22.4519 9.2226 22.4519 8.50012C22.4519 7.77763 22.3096 7.06222 22.033 6.39476C21.7565 5.7273 21.3511 5.12087 20.8401 4.61012Z" fill="#020F59" />
                                    </svg>

                                </Link>
                            </div>
                        </div>
                    </div>
                    <SearchMobile className={isSearch ? '' : 'search--none'} />
                </header >

            </>
        </>
    )
}

export default Header
