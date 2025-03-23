import { memo, useCallback, useEffect, useState } from 'react'

import sale from "../../../assets/images/catalo-sale.jpg"

import "swiper/css"
import "swiper/css/navigation"
import Description from './Description'
import Reviews from './Reviews'
import FormComments2 from "./FormComments2.tsx";
import { CircularProgress } from '@mui/material'


export type Comment = {
    id?: number,
    name: string,
    text: string,
    data: string,
    imgSrc: string,
    rating: number
}

const keyTab = { description: 'description', review: 'review' }

const CartPageTab = memo(({ ringId }: { ringId: number }) => {

    const [tab, setTab] = useState(keyTab.description)
    const [comments, setComments] = useState<Comment[]>([])
    const [error, setError] = useState<null | Error>(null)
    const [isLoading, setIsLoading] = useState(false);

    const handleClickDescription = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {

        if (!e.currentTarget.classList.contains("cart-page__description-btn--active")) {
            e.currentTarget.classList.add("cart-page__description-btn--active")
        }
        setTab(keyTab.description)
    }, [])

    const handleClickReview = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {

        if (!e.currentTarget.classList.contains("cart-page__description-btn--active")) {
            e.currentTarget.classList.add("cart-page__description-btn--active")
        }
        setTab(keyTab.review)
    }, [])

    const getComments = useCallback(async () => {
        setIsLoading(true);
        try {
            const json = await fetch("https://65f83983b4f842e808873cd9.mockapi.io/Comments");
            const comments: Comment[] = await json.json();
            setComments(comments);
        } catch (error) {
            setError(error as Error);
        } finally {
            setIsLoading(false);
        }
    }, []);


    useEffect(() => {
        getComments();
    }, [ringId, getComments]);

    const handleSubmitSuccess = useCallback(() => {
        getComments();
    }, [getComments]);

    if (isLoading) {
        return <div><CircularProgress /></div>;
    }

    if (error) {
        return <div className='cart-page__error-text'>Произошла ошибка при загрузке комментариев.</div>;
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
                ОТЗЫВЫ ({comments?.length})
            </button>
        </div>
        <picture>
            <source srcSet='/images/banner-mobile.jpg' media="(max-width: 992px)" />
            <img className="cart-page__sale-img" src={sale} alt="" />
        </picture>

        <Description className={keyTab.description === tab ? "db" : "dn"} />
        {!comments.length ? <div className='cart-page__error-text'>Отзывов еще нет.</div> : <Reviews className={keyTab.review === tab ? "db" : "dn"} comments={comments} />}

        <h3 className="cart-page__form-title">НАПИСАТЬ ОТЗЫВ</h3>
        <FormComments2 ringId={ringId} onSubmitSuccess={handleSubmitSuccess} />

    </div>

})

export default CartPageTab
