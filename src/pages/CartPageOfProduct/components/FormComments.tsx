import { useState } from 'react'
import { Rating2 } from '../../../components/Raiting'
import { Comment } from './CartPageTab';

enum Status {
    rating = 'rating',
    name = 'name',
    review = 'review',
}

const FormComments = () => {

    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0)

    const [status, setStatus] = useState("")

    const [statusFetch, setStatusFetch] = useState<Response>()

    const isValidForm = status === ''

    const handleChangeRating = (_: React.SyntheticEvent, value: number) => {
        setRating(value)
        setStatus('')
    }

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        setStatus('')
    }

    const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReview(e.currentTarget.value)
        setStatus('')
    }

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        if (name.trim() === '') {
            setStatus(Status.name)
            return
        }

        if (review.trim() === '') {
            setStatus(Status.review)
            return
        }

        if (rating === 0) {
            setStatus(Status.rating)
            return
        }

        const date = new Date()
        const num = date.getDay()
        const month = date.getMonth()
        const year = date.getFullYear()



        const payload: Comment = {
            name: name.trim(), text: review.trim(), rating, imgSrc: [], data: `${num}.${month}.${year}`
        }

        const response = await fetch("https://65f83983b4f842e808873cd9.mockapi.io/Comments", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
        })

        setStatusFetch(response)

        setName('')
        setReview('')
        handleChangeRating(e, 0)

    }

    return (
        <>
            {statusFetch?.ok ? <h1>Thanks for your review</h1> : <form className="cart-page__form" >
                <div className="cart-page__form-header">
                    <label className="cart-page__form-label">
                        <span className={status === Status.name ? "cart-page__form-span cart-page__form-span--error" : "cart-page__form-span"}>Ваше имя</span>
                        <input
                            value={name}
                            onChange={handleChangeName}
                            onClick={e => e.currentTarget.focus()}
                            className='cart-page__form-input'
                            type="text"
                        />
                    </label>
                    <label className="cart-page__input-file">
                        ЗАГРУЗИТЬ ФОТО
                        <input type="file" />
                    </label>
                </div>
                <label className="cart-page__textarea-label">
                    <span className={status === Status.review ? 'cart-page__form-span cart-page__form-span--error' : 'cart-page__form-span'}>Ваш отзыв</span>
                    <textarea
                        className='cart-page__textarea'
                        onClick={e => e.currentTarget.focus()}
                        value={review}
                        onChange={handleChangeTextArea}
                        maxLength={2000}></textarea>
                </label>
                <div className="cart-page__form-footer">
                    <label className="cart-page__form-label">
                        <span className={status === Status.rating ? "cart-page__form-span cart-page__form-span--error" : "cart-page__form-span"}>Ваша оценка</span>
                        <div className="cart-page__form-raiting">
                            <Rating2 value={rating} onChange={handleChangeRating} size="large" precision={0.5} />
                        </div>
                    </label>
                    <button
                        disabled={!isValidForm}
                        className="cart-page__form-submit"
                        onClick={e => handleSubmit(e)}
                    >ОСТАВИТЬ ОТЗЫВ</button>
                </div>
            </form >}
        </>

    )
}

export default FormComments
