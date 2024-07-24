import { memo } from 'react'
import { Link } from 'react-router-dom'

const NavMenu = memo(() => {
    return (
        <ul className="header__nav-menu">
            <li className="header__nav-item">
                <Link to="/studio-two" className="header__nav-link">
                    Студия
                </Link>
            </li>
            <li className="header__nav-item">
                <Link to="/about" className="header__nav-link">
                    О нас
                </Link>
            </li>
            <li className="header__nav-item">
                <Link to="/delivery" className="header__nav-link">
                    Доставка и Оплата
                </Link>
            </li>
            <li className="header__nav-item">
                <Link to="/guarantee" className="header__nav-link">
                    Гарантии
                </Link>
            </li>
            <li className="header__nav-item">
                <Link to="/" className="header__nav-link">
                    Отзывы
                </Link>
            </li>
        </ul>
    )
})

export default NavMenu
