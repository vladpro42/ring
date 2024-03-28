import { Link } from "react-router-dom"

const ItemList = () => {
    return (
        <ul className="footer__item-list">
            <li className="item-list__item">
                <Link to="/diamond-as-a-gift" className="item-list__link">Бриллиант в подарок</Link>
            </li>
            <li className="item-list__item">
                <Link to="/how-to-choose" className="item-list__link">Как выбрать обручальные кольца</Link>
            </li>
            <li className="item-list__item">
                <Link to="/wear-an-engagement-ring" className="item-list__link">О помолвочных кольцах</Link>
            </li>
        </ul>
    )
}

export default ItemList
