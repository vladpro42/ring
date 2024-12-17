import { useEffect, useRef, useState } from "react"
import { useAppDispatch } from "../../../../hooks/redux/hooks"
import { contentPerPageCreator } from "../../../../redux/filter/filterActions"
import { Option } from "../.."

export type CustomSelectProps = {
    options: Option[]
    placeholder: string | 'Выберите значение',
    defaultValue: string | '',
}


const Select = ({ options, placeholder = "Выберите значение", defaultValue = '' }: CustomSelectProps) => {

    const dispatch = useAppDispatch()

    const handleChange = (value: number) => {
        dispatch(contentPerPageCreator(value))
    }

    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(defaultValue);
    const selectRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const handleOptionClick = (value) => {
        setSelectedValue(value);
        setIsOpen(false);
        handleChange(Number(selectedValue))
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="catalog-main__show">
            Показать:
            <div className="custom-select" ref={selectRef}>
                <div className="custom-select-trigger" onClick={toggleDropdown}>
                    {selectedValue
                        ? options.find((o) => o.value === selectedValue.toString())?.label
                        : placeholder}
                    <span className={`arrow ${isOpen ? "up" : "down"}`}>▼</span>
                </div>
                {isOpen && (
                    <div className="custom-select-options">
                        {options.map((option) => (
                            <div
                                key={option.value}
                                className={`custom-select-option ${option.value === selectedValue ? "selected" : ""
                                    }`}
                                onClick={() => handleOptionClick(option.value)}
                            >
                                {option.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Select;
