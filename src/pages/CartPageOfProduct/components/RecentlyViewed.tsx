import { useState } from 'react'
import { getItemFromLocalStorage } from '../../../utils'
import SwiperWithScrollbar from '../../../components/SwiperWithScrollbar'
import { Ring } from '../../../redux/rings/ringsReducer'

const RecentlyViewed = () => {

    const [rings, setRings] = useState<Ring[]>(() => getItemFromLocalStorage("recentlyViewed"))



    return (
        <section className='new-items'>
            <div className="container">
                <h3 className="new-items__title">
                    НЕДАВНО ПРОСМОТРЕННЫЕ
                </h3>
                <ul className="new-items__slider">
                    <SwiperWithScrollbar setRings={setRings} rings={rings} />
                </ul>
            </div>
        </section>
    )
}

export default RecentlyViewed
