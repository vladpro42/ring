import SwiperWithScrollbar from '../../../components/SwiperWithScrollbar'

const RecentlyViewed = () => {




    return (
        <section className='new-items'>
            <div className="container">
                <h3 className="new-items__title">
                    НЕДАВНО ПРОСМОТРЕННЫЕ
                </h3>
                <ul className="new-items__slider">
                    <SwiperWithScrollbar />
                </ul>
            </div>
        </section>
    )
}

export default RecentlyViewed
