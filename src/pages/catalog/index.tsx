import Header from '../../components/header'
import Footer from '../../components/footer'
import NavigationText from '../../components/NavigationText'

import "./catalog.scss"


import { useAppSelector } from '../../hooks/redux/hooks'

import { selectRingsStatus } from '../../redux/rings/ringsSelects'
import { ScrollRestoration } from 'react-router-dom'
import Spinner from '../../components/Spinner'
import { useEffect, useState } from 'react'
import FilterMobile from './components/FilterMobile'
import CatalogMainDescription from './components/CatalogMainDescription'


type Props = {
    title: string;
    subtitle: string;
}


const CatalogPage = ({ title, subtitle }: Props) => {

    const status = useAppSelector(selectRingsStatus)

    //const sortByAlphabeticalOrder = useAppSelector(selectSortByAlphabeticalOrder)

    const [isFilterMobile, setIsFilterMobile] = useState(false)

    useEffect(() => {
        if (isFilterMobile) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'initial'
        }
    }, [isFilterMobile])

    const toggleFilterMobile = () => {
        setIsFilterMobile(!isFilterMobile)
    }


    if (status === 'loading') {
        return <Spinner />
    }

    return <>
        <Header />
        <main className="catalog-main">
            <div className="container">
                <NavigationText />

                <CatalogMainDescription title={title} subtitle={subtitle} toggleFilterMobile={toggleFilterMobile} />
            </div >
        </main >
        <ScrollRestoration />
        <FilterMobile className={isFilterMobile ? 'filter-mobile--active' : null} onClose={toggleFilterMobile} />
        <Footer />
    </>



}

export default CatalogPage
