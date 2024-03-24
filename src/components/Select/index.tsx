import { useCallback, useEffect, useRef, useState } from "react"
import "./select.scss"

const arr = new Array(15).fill(14).map((item, index) => item = item + (index) * 0.25)

const Select = () => {

    const [isActive, setIsActive] = useState(false)
    const [result, setResult] = useState(0);
    const [value, setValue] = useState(14)

    const handleValueClick = (item: number) => {
        setValue(item)
        setIsActive(false)
    }

    const handleClick = () => {
        setIsActive(!isActive)
    }


    const dragging = useRef(false);
    const previousClientY = useRef(0);

    const handleSpanMouseDown = useCallback((e: MouseEvent) => {
        e.preventDefault()
        previousClientY.current = e.clientY
        dragging.current = true
    }, [])

    const handlevSpanMouseMove = useCallback((e: MouseEvent) => {
        if (!dragging.current) {
            return
        }

        setResult(result => {
            const change = e.clientY - previousClientY.current
            previousClientY.current = e.clientY;
            return result + change
        })

    }, [])

    const handlevSpanMouseUp = useCallback(() => {
        dragging.current = false
    }, [])

    useEffect(() => {
        window.addEventListener("mousedown", handleSpanMouseDown);
        window.addEventListener("mouseup", handlevSpanMouseUp);
        window.addEventListener("mousemove", handlevSpanMouseMove);

        return () => {
            window.removeEventListener("mousedown", handleSpanMouseDown);
            window.removeEventListener("mouseup", handlevSpanMouseUp);
            window.removeEventListener("mousemove", handlevSpanMouseMove);
        };
    }, [handleSpanMouseDown, handlevSpanMouseUp, handlevSpanMouseMove]);

    const maxOffSet = 118
    const max = result <= maxOffSet

    return (
        <div className="select">

            <h4 className="select__title"> Размер (жен.)</h4>
            <button onClick={handleClick} className={isActive ? "select__open select__open--active" : "select__open"}>
                <span>{value}</span>
                <svg className="select__open-svg" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2" />
                </svg>
            </button>

            <div className={isActive ? "select__list-container select__list-container-active" : "select__list-container"}>
                <ul
                    style={{
                        transform: result <= 0 ?
                            'translateY(${0}px)'
                            : max ?
                                `translateY(${-result}px)`
                                : `translateY(${-maxOffSet * 1.1}px)`
                    }} className="select__list">
                    {
                        arr.map(item => <li onClick={() => handleValueClick(item)} key={item} className={value === item ? "select__item select__item--active" : "select__item"}>
                            {item}
                        </li>)
                    }
                </ul>
                <div className="select__scroll-bar">

                    <span
                        style={{
                            transform: result <= 0 ?
                                'translateY(${0}px)'
                                : max ?
                                    `translateY(${result}px)`
                                    : `translateY(${maxOffSet}px)`
                        }}
                        className="select__scroll"></span>
                </div>
            </div>
        </div>
    )
}

export default Select
