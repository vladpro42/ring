import { FormEvent, useState } from "react"
import { Link } from "react-router-dom"

const Form3 = ({ onClick }: { onClick: () => void }) => {

    const state = {
        pending: "pending",
        fullfield: "fullfield",
    }

    const [status, setStatus] = useState("pending")

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus(state.fullfield)
    }

    const state2 = <>
        <h1 className='basket__send-title'>ВАША ЗАЯВКА ПРИНЯТА!</h1>
        <p className='basket__send-subtitle'>В ближайшее время с вами свяжется оператор для подтверждения заказа.</p>
        <Link onClick={onClick} to="/catalog-weddingRings" className='basket__send-btn'>ВЕРНУТЬСЯ В КАТАЛОГ</Link>
    </>

    const state1 = <>
        <h1 className='basket__popup-title'>ОСТАВЬТЕ ЗАЯВКУ</h1>
        <p className="basket__popup-subtitle">И мы свяжемся с вами для уточнения деталей заказа</p>
        <form onSubmit={handleSubmit} className='basket__popup-form' action="">
            <label htmlFor="" className='basket__popup-label'>
                <span className='basket__popup-span'>Ваше имя</span>
                <input type="text" className='basket__popup-input' />
            </label>
            <div className="basket__popup-wrap">

                <label htmlFor="" className='basket__popup-label'>
                    <span className='basket__popup-span'>Ваш телефон</span>
                    <input className='basket__popup-input' placeholder='+7 (   )' type="text" />
                </label>

                <label htmlFor="" className='basket__popup-label'>
                    <span className='basket__popup-span'>Ваш e-mail</span>
                    <input type="text" className='basket__popup-input' />
                </label>
            </div>

            <div className="basket__popup-wrap">
                <label htmlFor="" className='basket__popup-label'>
                    <span className='basket__popup-span'>Город</span>
                    <input type="text" className='basket__popup-input' />
                </label>
                <label htmlFor="" className='basket__popup-label'>
                    <span className='basket__popup-span'>Адрес</span>
                    <input type="text" className='basket__popup-input' />
                </label>
            </div>

            <div className="basket__popup-checkbox">
                <input id="input-checkbox" className='basket__checkbox-input' type="checkbox" name="" />
                <label className='basket__custom-input' htmlFor="input-checkbox"></label>
                <label className="basket__popup-agree" htmlFor="input-checkbox">Даю согласие на обработку персональных данных</label>
            </div>
            <button className='basket__popup-submit'>ПЕРЕЗВОНИТЕ МНЕ</button>
        </form>
    </>
    return (
        <>
            {status === state.pending ? state1 : state2}
        </>

    )
}

export default Form3
