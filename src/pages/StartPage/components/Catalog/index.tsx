import { Link } from "react-router-dom";


export default function Catalog() {
    return <section className="catalog">
        <div className="container">
            <h3 className="catalog__title">КАТАЛОГ</h3>
            <div className="catalog__menu">
                <div className='catalog__menu-item'>
                    <Link to="catalog-weddingRings" className="catalog__menu-link">ОБРУЧАЛЬНЫЕ КОЛЬЦА</Link>
                </div>
                <div className='catalog__menu-item'>
                    <Link to="catalog-engagementRings" className="catalog__menu-link">ПОМОЛВОЧНЫЕ КОЛЬЦА</Link>
                </div>
                <div className='catalog__menu-item'>
                    <Link to="catalog-weddingDuets" className="catalog__menu-link">СВАДЕБНЫЕ ДУЭТЫ</Link>
                </div>
                <div className='catalog__menu-item'>
                    <Link to="make-an-order" className="catalog__menu-link">НА ЗАКАЗ</Link>
                </div>
            </div>
        </div>
    </section>
}