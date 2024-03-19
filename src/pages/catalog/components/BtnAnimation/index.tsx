import { useState } from 'react'

const BtnAnimation = () => {
    const [isbtnActive, setIsBtnActive] = useState(false)

    const handleClickBtnAnimation = () => {
        setIsBtnActive(!isbtnActive)
    }

    return (
        <div onClick={handleClickBtnAnimation} className="catalog-main__btn-animation">
            <div className="btn-animation">
                <span className={isbtnActive ? "btn-animation--unactive" : ""}></span>
            </div>
            <p className="catalog-main__btn-text">Анимация</p>
        </div>
    )
}

export default BtnAnimation
