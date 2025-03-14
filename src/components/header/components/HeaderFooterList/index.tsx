import { Link } from "react-router-dom"

const HeaderFooterList = ({ className }: { className?: string }) => {
    return (
        <ul className={[className, "header__footer-list"].join(" ")}>
            <li className="header__footer-item">
                <Link to="../catalog" className="header__footer-link">ОБРУЧАЛЬНЫЕ КОЛЬЦА</Link>
            </li>
            <li className="header__footer-item">
                <Link to="../catalog" className="header__footer-link">ПОМОЛВОЧНЫЕ КОЛЬЦА</Link>
            </li>
            <li className="header__footer-item">
                <Link to="../catalog" className="header__footer-link">СВАДЕБНЫЕ ДУЭТЫ</Link>
            </li>
            <li className="header__footer-item">
                <Link to="../make-an-order" className="header__footer-link">НА ЗАКАЗ</Link>
            </li>
        </ul>
    )
}

export default HeaderFooterList
