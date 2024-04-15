import { useEffect, useState } from 'react'

import sale from "../../../assets/images/catalo-sale.jpg"

import "swiper/css"
import "swiper/css/navigation"
import FormComments from './FormComments'
import Description from './Description'
import Reviews from './Reviews'


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

    const width = document.documentElement.clientWidth < 912
    const PC = keyTab.description === tab ? (<Description />) : <>
        <Reviews comments={comments} />
        <FormComments />
    </>

    const Mobile = <>
        <Description />
        <Reviews comments={comments} />
        <h3 className="cart-page__form-title">НАПИСАТЬ ОТЗЫВ</h3>
        <FormComments />
    </>

  


    if (!comments) {
        return <div>Loading...</div>
    }


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
        <picture>
            <source srcSet='/images/banner-mobile.jpg' media="(max-width: 992px)" />
            <img className="cart-page__sale-img" src={sale} alt="" />
        </picture>
        {width ? Mobile : PC}

    </div>

}
export default CartPageTab
