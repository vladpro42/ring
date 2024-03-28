import { memo, useState } from "react"
import { Link } from "react-router-dom"

enum Status {
    pending = "pending",
    fullfield = "fullfield",
}

enum ErrorValid {
    name = 'name',
    email = 'email',
    phoneNumber = 'phoneNumber',
    city = 'city',
    address = 'address',
}

const Form3 = memo(({ onClick }: { onClick: () => void }) => {

    const [status, setStatus] = useState(Status.pending)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [checkbox, setCheckbox] = useState('')
    const [errorValid, setErrorValid] = useState('')

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const handleChangePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value.replace(/[^+\d]/g, '')
        setPhoneNumber(value)
    }
    const handleChangeCity = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.currentTarget.value)
    }
    const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.currentTarget.value)
    }
    const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckbox(e.currentTarget.value)
    }
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (name.trim() === '') {
            setErrorValid(ErrorValid.name)
            return
        }
        if (email.trim() === '') {
            setErrorValid(ErrorValid.email)
            return
        }
        if (phoneNumber.trim() === '') {
            setErrorValid(ErrorValid.phoneNumber)
            return
        }
        if (city.trim() === '') {
            setErrorValid(ErrorValid.city)
            return
        }
        if (address.trim() === '') {
            setErrorValid(ErrorValid.address)
            return
        }

        setStatus(Status.fullfield)
    }

    const state2 = <>
        <h1 className='basket__send-title'>ВАША ЗАЯВКА ПРИНЯТА!</h1>
        <p className='basket__send-subtitle'>В ближайшее время с вами свяжется оператор для подтверждения заказа.</p>
        <Link onClick={onClick} to="/catalog-weddingRings" className='basket__send-btn'>ВЕРНУТЬСЯ В КАТАЛОГ</Link>
    </>

    const state1 = <>
        <h1 className='basket__popup-title'>ОСТАВЬТЕ ЗАЯВКУ</h1>
        <p className="basket__popup-subtitle">И мы свяжемся с вами для уточнения деталей заказа</p>

        <form className='basket__popup-form' action="">
            <label htmlFor="" className='basket__popup-label'>
                <span
                    className={errorValid === ErrorValid.name ? "basket__popup-span basket__popup-span--error" : "basket__popup-span"}
                >
                    Ваше имя
                </span>
                <input
                    onChange={handleChangeName}
                    value={name}
                    type="text"
                    className='basket__popup-input'
                />
            </label>
            <div className="basket__popup-wrap">

                <label htmlFor="" className='basket__popup-label'>
                    <span
                        className={errorValid === ErrorValid.phoneNumber ? "basket__popup-span basket__popup-span--error" : "basket__popup-span"}
                    >
                        Ваш телефон
                    </span>
                    <input
                        value={phoneNumber}
                        onChange={handleChangePhoneNumber}
                        className='basket__popup-input'
                        placeholder='+7 (   )'
                        type="tel"
                    />
                </label>

                <label htmlFor="" className='basket__popup-label'>
                    <span
                        className={errorValid === ErrorValid.email ? "basket__popup-span basket__popup-span--error" : "basket__popup-span"}
                    >
                        Ваш e-mail
                    </span>
                    <input
                        value={email}
                        onChange={handleChangeEmail}
                        type="text"
                        className='basket__popup-input'
                    />
                </label>
            </div>

            <div className="basket__popup-wrap">
                <label htmlFor="" className='basket__popup-label'>
                    <span
                        className={errorValid === ErrorValid.city ? "basket__popup-span basket__popup-span--error" : "basket__popup-span"}
                    >
                        Город
                    </span>
                    <input
                        value={city}
                        onChange={handleChangeCity}
                        type="text"
                        className='basket__popup-input'
                    />
                </label>
                <label htmlFor="" className='basket__popup-label'>
                    <span
                        className={errorValid === ErrorValid.address ? "basket__popup-span basket__popup-span--error" : "basket__popup-span"}
                    >
                        Адрес
                    </span>
                    <input
                        value={address}
                        onChange={handleChangeAddress}
                        type="text"
                        className='basket__popup-input'
                    />
                </label>
            </div>

            <div className="basket__popup-checkbox">
                <input

                    value={checkbox}
                    onChange={handleChangeCheckbox}
                    id="input-checkbox"
                    className='basket__checkbox-input'
                    type="checkbox"
                />
                <label className='basket__custom-input' htmlFor="input-checkbox"></label>
                <label className="basket__popup-agree" htmlFor="input-checkbox">Даю согласие на обработку персональных данных</label>
            </div>
            <button onClick={handleSubmit} className='basket__popup-submit'>ПЕРЕЗВОНИТЕ МНЕ</button>

        </form>
    </>
    return (
        <>
            {status === Status.pending ? state1 : state2}
        </>

    )
})

export default Form3
