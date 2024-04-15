import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const HeaderSearch = ({ className }: { className?: string }) => {

    const [isFocus, setIsFocus] = useState(false)
    const [inputId, setInputId] = useState("")

    const navigate = useNavigate()

    const handleFocus = () => {
        setIsFocus(true)
    }
    const handleBlur = () => {
        setIsFocus(false)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputId(e.currentTarget.value)
    }

    const handleClick = () => {
        navigate(`/catalog-weddingRings/${inputId}`)
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            navigate(`/catalog-weddingRings/${inputId}`)
        }
    }

    return (
        <search className={[className, 'header__search'].join(" ")}>
            <input
                onKeyDown={handleKeyDown}
                value={inputId}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                type="number"
                className='header__search-input'
                placeholder='Поиск украшений'
            />
            <svg
                onClick={handleClick}
                className={isFocus ? "header__search-lupa" : ""}
                width="20" height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                    <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#9EAFC2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.5 17.5L13.875 13.875" stroke="#9EAFC2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </svg>
        </search>
    )
}

export default HeaderSearch
