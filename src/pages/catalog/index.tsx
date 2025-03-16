import Header from '../../components/header'
import Footer from '../../components/footer'
import NavigationText from '../../components/NavigationText'

import "./catalog.scss"


import {ScrollRestoration} from 'react-router-dom'
import {useEffect, useState} from 'react'
import FilterMobile from './components/FilterMobile'
import CatalogMainDescription from './components/CatalogMainDescription'

type Props = {
    title: string;
    subtitle: string;
}

const CatalogPage = ({title, subtitle}: Props) => {

    //const sortByAlphabeticalOrder = useAppSelector(selectSortByAlphabeticalOrder)

    const [isFilterMobile, setIsFilterMobile] = useState(false)

    useEffect(() => {
        if (isFilterMobile) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'unset'
        }
    }, [isFilterMobile])

    const toggleFilterMobile = () => {
        setIsFilterMobile(!isFilterMobile)
    }

    return <>
        <Header/>
        <main className="catalog-main">
            <div className="container">
                <NavigationText/>

                <CatalogMainDescription title={title} subtitle={subtitle} toggleFilterMobile={toggleFilterMobile}/>
            </div>
        </main>
        <ScrollRestoration/>
        <FilterMobile className={isFilterMobile ? 'filter-mobile--active' : null} onClose={toggleFilterMobile}/>
        <Footer/>
    </>


}

export default CatalogPage
