import { Link } from 'react-router-dom'

const ItemListItem = () => {
    return (
        <ul className="footer__item-list">
            <li className="item-list__item">
                <Link to="/catalog" className='item-list__link'>Все обручальные кольца</Link>
            </li>
            <li className="item-list__item">
                <Link to="/make-an-order" className='item-list__link'>Необычные обручальные кольца</Link>
            </li>
            <li className="item-list__item">
                <Link to="/catalog" className='item-list__link'>Классические обручальные кольца</Link>
            </li>
            <li className="item-list__item">
                <Link to="/catalog" className='item-list__link'>Помолвочные кольца</Link>
            </li>
            <li className="item-list__item">
                <Link to="/catalog" className='item-list__link'>Кольца с лебедями</Link>
            </li>
            <li className="item-list__item">
                <Link to="/catalog" className='item-list__link'>Обручальные кольца парные</Link>
            </li>
        </ul>
    )
}

export default ItemListItem
