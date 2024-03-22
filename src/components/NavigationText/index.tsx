import { Link, useLocation } from "react-router-dom"
import "../../pages/catalog/catalog.scss"


const NavigationText = () => {

    const location = useLocation()
    const pathNameArr = location.pathname.split('/')

    return (
        <div className="catalog-main__navigation">
            <Link to='/' className='catalog-main__navigation-text'>Главная<span>›</span></Link>
            <Link to='/catalog-weddingRings' className='catalog-main__navigation-text'>Каталог<span>›</span></Link>
            {
                pathNameArr.length === 3 ? <Link to={location.pathname} className='catalog-main__navigation-text'>Обручальные кольца<span>›</span></Link> : null
            }
        </div>
    )
}

export default NavigationText
