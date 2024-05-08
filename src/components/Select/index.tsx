import { useState } from "react"
import "./select.scss"
import { useCustomScroll } from "../../hooks/UseCustomScroll"
import 'overlayscrollbars/overlayscrollbars.css';


const arr = new Array(15).fill(14).map((item, index) => item = item + (index) * 0.25)

type Props = {
    gender: string,
}

const Select = ({ gender, }: Props) => {

    const [value, setValue] = useState(14)
    const [isActive, setIsActive] = useState(false)

    const { offsetY: offset, offsetYMobile } = useCustomScroll()

    const handleValueClick = (item: number) => {
        setValue(item)
        setIsActive(false)
    }

    const handleClick = () => {
        setIsActive(!isActive)
    }

    const maxOffSet = 118
    const max = offset <= maxOffSet

    const maxMobile = offsetYMobile <= maxOffSet

    return (
        <div className="select">

            <h4 className="select__title">Размер ({gender}.)</h4>
            <button onClick={handleClick} className={isActive ? "select__open select__open--active" : "select__open"}>
                <span>{value}</span>
                <svg className="select__open-svg" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2" />
                </svg>
            </button>

            <div className={isActive ? "select__list-container select__list-container-active" : "select__list-container"}>
                <ul
                    style={{
                        transform: offset <= 0 ?
                            'translateY(${0}px)'
                            : max ?
                                `translateY(${-offset * 0.6}px)`
                                : `translateY(${-maxOffSet * 0.6}px)`
                    }}
                    className="select__list"
                >
                    {
                        arr.map(item => <li
                            onClick={() => handleValueClick(item)}
                            key={item}
                            className={value === item ? "select__item select__item--active" : "select__item"}
                        >
                            {item}
                        </li>)
                    }
                </ul>
                <div className="select__scroll-bar">

                    <span
                        style={{
                            transform: offset <= 0 ?
                                'translateY(${0}px)'
                                : max ?
                                    `translateY(${offset}px)`
                                    : `translateY(${maxOffSet}px)`
                        }}
                        className="select__scroll"></span>

                </div>
            </div>
        </div>
    )
}

export default Select
