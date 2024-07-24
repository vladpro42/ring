import { Link, useLocation } from "react-router-dom"
import "../../pages/catalog/catalog.scss"
import { memo, useState } from "react"


const NavigationText = memo(() => {

    const location = useLocation()
    const pathNameArr = location.pathname.split('/')

    const [text] = useState<string>(() => initState())

    function initState() {
        if (location.state === "catalog-weddingDuets") {
            return "Свадебные дуэты"
        } else if (location.state === "catalog-engagementRings") {
            return "Помолвочные кольца"
        } else if (location.state === "catalog-weddingRings") {
            return "Обручальные кольца"
        } else {
            return ''
        }
    }

    return (
        <div className="catalog-main__navigation">
            <Link to='/' className='catalog-main__navigation-text'>Главная<span>›</span></Link>
            <Link to='/catalog-weddingRings' className='catalog-main__navigation-text'>Каталог<span>›</span></Link>
            {
                pathNameArr.length === 3 ? <Link
                    to={location.pathname}
                    className='catalog-main__navigation-text'
                >
                    {text}
                    <span>›</span>
                </Link>
                    : null
            }
        </div>
    )
})

export default NavigationText
