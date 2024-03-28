import { useState } from "react"

enum Error {
    name = 'name',
    email = 'email',
    numberPhone = 'numberPhone',
    review = 'review',
}

const Form = () => {

    // const [files, setFiles] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [numberPhone, setNumberPhone] = useState('')
    const [review, setReview] = useState('')

    const [error, setError] = useState('')

    const isDisable = error === ''

    const [isStatus, setIsStatus] = useState(false)

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        setError('')
    }
    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
        setError('')
    }
    const handleChangeNumberPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumberPhone(e.currentTarget.value)
        setError('')
    }
    const handleChangeReview = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReview(e.currentTarget.value)
        setError('')
    }

    const handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault()

        if (name.trim() === '') {
            setError(Error.name)
            return
        }
        if (email.trim() === '') {
            setError(Error.email)
            return
        }
        if (numberPhone.trim() === '') {
            setError(Error.numberPhone)
            return
        }
        if (review.trim() === '') {
            setError(Error.review)
            return
        }

        // send from succes!
        setIsStatus(true)
    }


    return (<>
        {isStatus ? <h1>Thanks!!!</h1> : <form className="order-page__form">
            <h2 className="order-page__form-title">ОСТАВИТЬ ЗАЯВКУ</h2>
            <div className="order-page__form-header">
                <label className="order-page__label">
                    <span
                        className={error === Error.name ? "order-page__span order-page__span--error" : "order-page__span"}
                    >
                        Ваше имя
                    </span>
                    <input
                        value={name}
                        onChange={handleChangeName}
                        className="order-page__input" type="text" />
                </label>
                <label className="cart-page__input-file">
                    ЗАГРУЗИТЬ ФОТО
                    <input type="file" />
                </label>
            </div>
            <div className="order-page__block">
                <label className="order-page__label">
                    <span
                        className={error === Error.email ? "order-page__span order-page__span--error" : "order-page__span"}
                    >
                        Ваш e-mail
                    </span>
                    <input
                        value={email}
                        onChange={handleChangeEmail}
                        className="order-page__input" type="text" />
                </label>
                <label className="order-page__label">
                    <span
                        className={error === Error.numberPhone ? "order-page__span order-page__span--error" : "order-page__span"}
                    >
                        Ваш телефон
                    </span>
                    <input
                        value={numberPhone}
                        onChange={handleChangeNumberPhone}
                        className="order-page__input" type="text" />
                </label>
            </div>
            <span
                className={error === Error.review ? "order-page__span order-page__span--error" : "order-page__span"}
            >
                Комментарий
            </span>
            <textarea
                value={review}
                onChange={handleChangeReview}
                maxLength={2000} className="order-page__textarea"></textarea>
            <button onClick={handleSubmit} disabled={!isDisable} className="order-page__submit">РАССЧИТАТЬ СТОИМОСТЬ</button>
        </form>}
    </>

    )
}

export default Form
