import { useRef, useState } from "react"
import "./select.scss"
import { useCustomScroll } from "../../hooks/UseCustomScroll"
import 'overlayscrollbars/overlayscrollbars.css';


const arr: number[] = new Array(15).fill(14).map((item, index) => item = item + (index) * 0.25)

type Props = {
    gender: string,
}

const Select = ({ gender, }: Props) => {

    const [value, setValue] = useState(14)
    const [isActive, setIsActive] = useState(false)

    const containerRef = useRef<HTMLDivElement>(null);
    const offset = useCustomScroll(containerRef)

    const handleValueClick = (e: React.MouseEvent<HTMLLIElement>, item: number) => {
        e.stopPropagation()
        setValue(item);
        setIsActive(false);
    };

    const handleClick = () => {
        setIsActive(!isActive)
    }

    const maxOffSet = 118
    const max = offset <= maxOffSet

    return (
        <div className="select">

            <h4 className="select__title">Размер ({gender}.)</h4>
            <button onClick={handleClick} className={isActive ? "select__open select__open--active" : "select__open"}>
                <span>{value}</span>
                <svg className="select__open-svg" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2" />
                </svg>
            </button>

            <div ref={containerRef} className={isActive ? "select__list-container select__list-container-active" : "select__list-container"}>
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
                            onClick={(e) => handleValueClick(e, item)}
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

                        className="select__scroll"
                    /*  onPointerDown={(event) => {
                         if (event.target instanceof HTMLLIElement ) return;
                         const span: HTMLElement = document.querySelector(".select__scroll")
                         span.setPointerCapture(event.pointerId)
                         span.onpointermove = (event) => {
                             let newTop = event.clientY - document.querySelector(".select__scroll-bar").getBoundingClientRect().top
                             console.log(event.clientY, document.querySelector(".select__scroll-bar").getBoundingClientRect().top)
                             if (newTop > 118) {
                                 newTop = 118
                             } else if (newTop < 0) {
                                 newTop = 0
                             }
                             span.style.top = `${newTop}px`
                         }
                         span.onpointerup = function () {
                             this.onpointerdown = null
                             this.onpointerup = null
                         }
                     }} */

                    ></span>

                </div>
            </div>
        </div>
    )
}

export default Select
