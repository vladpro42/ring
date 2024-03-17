import { useState } from "react"

const arr = new Array(15).fill(14).map((item, index) => item = item + (index) * 0.25)

const SelectRing = ({ text }: { text: string }) => {

    const [popup, setPopup] = useState(false)
    const [size, setSize] = useState(14)

    const togglePopup = () => setPopup(!popup)

    const chooseSize = (item: number) => {
        togglePopup()
        setSize(item)
    }

    return (
        <div className="cart-page__size">
            <span>Размер ({text})</span>
            <select onChange={(e) => chooseSize(+e.target.value)} className="cart-page__size-select">
                {
                    arr.map(item => <option

                        className={size === item ? "cart-page__size-item cart-page__size-item--active" : "cart-page__size-item"}
                        value={item}>
                        {item}
                    </option>)
                }
            </select>
        </div>
    )
}

export default SelectRing
