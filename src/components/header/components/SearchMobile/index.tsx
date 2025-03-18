import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SearchMobile = ({ className, }: { className: string }) => {


    const [inputId, setInputId] = useState("")

    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputId(e.currentTarget.value)
    }

    const handleClick = () => {
        navigate(`/product/${inputId}`)
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            navigate(`/product/${inputId}`)
        }
    }

    return (
        <div className={[className, "search"].join(" ")} >
            <div className="search__label">
                <input
                    onKeyDown={handleKeyDown}
                    className="search__input"
                    value={inputId}
                    onChange={handleChange}
                    type="number"
                    placeholder="Введите артикул"
                />
                <button onClick={() => setInputId("")} className="search__btn-clear">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="14.8491" width="21" height="21" rx="10.5" transform="rotate(-45 0 14.8491)" fill="#9EAFC2" />
                        <path d="M18.8492 8.48516L8.24264 19.0918L10.364 21.2131L20.9706 10.6065L18.8492 8.48516Z" fill="white" />
                        <path d="M20.9706 19.0918L10.364 8.48516L8.24264 10.6065L18.8492 21.2131L20.9706 19.0918Z" fill="white" />
                    </svg>
                </button>
            </div>
            <button onClick={handleClick} className="search__btn">найти</button>
        </div >
    )
}

export default SearchMobile
