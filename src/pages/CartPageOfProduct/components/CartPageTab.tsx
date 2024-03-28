import { useEffect, useState } from 'react'
import { Rating2 } from '../../../components/Raiting'

import sale from "../../../assets/images/catalo-sale.jpg"
import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from 'swiper/modules'
import FormComments from './FormComments'


export type Comment = {
    id?: number,
    name: string,
    text: string,
    data: string,
    imgSrc?: string[],
    rating: number
}



// const comments: Comments[] = [
//     {
//         id: 1,
//         title: "Андрей и Екатерина",
//         text: `Долго искали обручальные кольца. Тут нам не навязывали ничего, мы просто выбрали. Всё приятно. Кольцами очень довольны.`,
//         data: '29.10.2017',
//         imgSrc: [reviewImg1, reviewImg2, reviewImg3, reviewImg4]
//     },
//     {
//         id: 1,
//         title: "Андрей и Екатерина",
//         text: `Долго искали обручальные кольца. Тут нам не навязывали ничего, мы просто выбрали. Всё приятно. Кольцами очень довольны.`,
//         data: '29.10.2017',
//         imgSrc: []
//     },
// ]

const CartPageTab = () => {

    const keyTab = { description: 'description', review: 'review' }
    const [tab, setTab] = useState(keyTab.description)

    const handleClickDescription = (e: React.MouseEvent<HTMLButtonElement>) => {

        if (!e.currentTarget.classList.contains("cart-page__description-btn--active")) {
            e.currentTarget.classList.add("cart-page__description-btn--active")
        }
        setTab(keyTab.description)
    }

    const handleClickReview = (e: React.MouseEvent<HTMLButtonElement>) => {

        if (!e.currentTarget.classList.contains("cart-page__description-btn--active")) {
            e.currentTarget.classList.add("cart-page__description-btn--active")
        }
        setTab(keyTab.review)
    }

    const getComments = async () => {
        const json = await fetch("https://65f83983b4f842e808873cd9.mockapi.io/Comments")
        const comments: Comment[] = await json.json()
        return comments
    }

    const [comments, setComments] = useState<Comment[]>()

    useEffect(() => {
        getComments().then((data: Comment[]) => setComments(data))
    }, [])


    return <div className="cart-page__description">
        <div className="cart-page__description-btns">
            <button
                onClick={handleClickDescription}
                className={tab === keyTab.description
                    ? "cart-page__description-btn cart-page__description-btn--active"
                    : "cart-page__description-btn"}
            >
                ОПИСАНИЕ
            </button>
            <button
                onClick={handleClickReview}
                className={tab === keyTab.review ?
                    "cart-page__description-btn cart-page__description-btn--active" :
                    "cart-page__description-btn"}
            >
                ОТЗЫВЫ (2)
            </button>
        </div>
        <img className="cart-page__sale-img" src={sale} alt="" />
        {
            keyTab.description === tab ? (<div className="cart-page__content">
                <p className="cart-page__content-text">
                    Прекрасные обручальные кольца с инкрустацией дорожками бриллиантов в женском кольце.
                </p>
                <p className="cart-page__content-text">
                    Это замечательный образец современной классики. Бриллианты в кольце расположены под углом к шинке. Камни при столь необычном расположении сияют по-особенному. Их блеск заметен лучше всего когда рука находится в движении.
                </p>
                <p className="cart-page__content-text">
                    Мужское кольцо без инкрустации, оно более строгое. Скосы шинки имеют другую, матированную, фактуру. В целом дизайн этих парных колец очень изысканный и современный.
                </p>
                <p className="cart-page__content-text">
                    Такие кольца обязательно понравятся тем, кто ищет что-то классическое и в то же время особенное, не такое, как у всех!
                </p>

            </div>) : <>
                <div className="cart-page__reviews">
                    <Swiper modules={[Navigation]} navigation slidesPerView={2} spaceBetween={10} >
                        {
                            comments.map(comment => <SwiperSlide key={comment.id}>
                                <div className="cart-page__reviews-cart">
                                    <h4 className="cart-page__reviews-title">{comment.name}</h4>
                                    <p className="raiting">
                                        <Rating2 defaultValue={comment.rating} precision={0.5} readOnly />
                                    </p>
                                    <p className="cart-page__reviews-text">{comment.text}</p>
                                    <div className="cart-page__reviews-images">
                                        {comment.imgSrc?.map(img => <img key={img} src={img} alt='' />)}
                                    </div>
                                    <p className="cart-page__reviews-data">{comment.data}</p>
                                </div>
                            </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>
                <FormComments />
            </>
        }
    </div>

}
export default CartPageTab
