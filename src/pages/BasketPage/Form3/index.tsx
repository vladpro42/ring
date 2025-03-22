
import { memo, useState } from "react"
import { Link } from "react-router-dom"
import { Inputs } from "./types"
import { useForm, SubmitHandler } from "react-hook-form"
import { validateTrim } from "../../../utils/validates"
import { EMAIL_REGEXP, PHONE_REGEXP } from "../../../utils/constants"
import { CATALOG } from "../../../utils/routes"

const Form3 = memo(({ onClick }: { onClick: () => void }) => {

    const [isStatus, setIsStatus] = useState(false)

    const { handleSubmit, register, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        setIsStatus(true)
    }


    if (isStatus) {
        return <div className="basket__container--state2">
            <h1 className='basket__send-title'>ВАША ЗАЯВКА ПРИНЯТА!</h1>
            <p className='basket__send-subtitle'>В ближайшее время с вами свяжется оператор для подтверждения заказа.</p>
            <Link onClick={onClick} to={`/${CATALOG}`} className='basket__send-btn'>ВЕРНУТЬСЯ В КАТАЛОГ</Link>
        </div>
    }

    return (
        <div className="basket__container--state1">
            <h1 className='basket__popup-title'>ОСТАВЬТЕ ЗАЯВКУ</h1>
            <p className="basket__popup-subtitle">И мы свяжемся с вами для уточнения деталей заказа</p>
            <form onSubmit={handleSubmit(onSubmit)} className='basket__popup-form'>
                <label htmlFor="" className='basket__popup-label'>
                    <span
                        className={"basket__popup-span"}
                    >
                        Ваше имя *
                    </span>
                    <input
                        {...register('name', {
                            required: { value: true, message: 'Имя обязательное для заполнения поле' },
                            validate: value => validateTrim('Имя', value),
                        })}
                        placeholder="Ваше имя"
                        type="text"
                        className='basket__popup-input'
                    />
                    {errors.name && <span className="basket__popup-span--error">{errors.name.message}</span>}
                </label>
                <div className="basket__popup-wrap">

                    <label className='basket__popup-label'>
                        <span
                            className={"basket__popup-span"}
                        >
                            Ваш телефон *
                        </span>
                        <input
                            {...register('phone', {
                                pattern: {
                                    value: PHONE_REGEXP,
                                    message: 'Некорректный телефон'
                                },
                                required: { value: true, message: 'Телефон обязательный для заполнения поле' },
                                validate: value => validateTrim('Телефон', value),
                            })}
                            className='basket__popup-input'
                            placeholder='+7 (   )'
                            type="tel"
                        />
                        {errors.phone && <span className="basket__popup-span--error">{errors.phone.message}</span>}
                    </label>

                    <label className='basket__popup-label'>
                        <span
                            className={"basket__popup-span"}
                        >
                            Ваш e-mail *
                        </span>
                        <input
                            {...register('email', {
                                pattern: {
                                    value: EMAIL_REGEXP,
                                    message: 'Некорректный e-mail'
                                },
                                required: { value: true, message: 'e-mail обязательный для заполнения поле' },
                                validate: value => validateTrim('e-mail', value),
                            })}
                            type="text"
                            className='basket__popup-input'
                            placeholder="Ваш e-mail"
                        />
                        {errors.email && <span className="basket__popup-span--error">{errors.email.message}</span>}
                    </label>
                </div>

                <div className="basket__popup-wrap">
                    <label className='basket__popup-label'>
                        <span
                            className={"basket__popup-span"}
                        >
                            Город
                        </span>
                        <input
                            {...register('city', {
                                required: false,
                            })}
                            placeholder="Ваш Город"
                            type="text"
                            className='basket__popup-input'
                        />
                    </label>
                    <label className='basket__popup-label'>
                        <span
                            className={"basket__popup-span"}
                        >
                            Адрес
                        </span>
                        <input
                            placeholder="Ваш Адрес"
                            {...register('address', {
                                required: false,
                            })}
                            type="text"
                            className='basket__popup-input'
                        />
                    </label>
                </div>

                <div className="basket__popup-checkbox">
                    <input
                        placeholder="Ваш Адрес"
                        {...register('isAgree', {
                            required: false,
                        })}
                        id="input-checkbox"
                        className='basket__checkbox-input'
                        type="checkbox"
                    />
                    <label className='basket__custom-input' htmlFor="input-checkbox"></label>
                    <label className="basket__popup-agree" htmlFor="input-checkbox">Даю согласие на обработку персональных данных</label>
                </div>
                <button className='basket__popup-submit'>ПЕРЕЗВОНИТЕ МНЕ</button>

            </form>
        </div >
    )
})

export default Form3
