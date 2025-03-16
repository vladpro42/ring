import React, { memo, useCallback, useRef, useState } from "react";
import { useAppDispatch } from "../../../../hooks/redux/hooks";
import { contentPerPageCreator } from "../../../../redux/filter/filterActions";
import styles from "./show.module.css";

const options = [
    { id: 1, value: 6, text: '' },
    { id: 2, value: 12, text: '' },
    { id: 3, value: 15, text: '' },
    { id: 4, value: 21, text: '' },
];

type Option = typeof options[number];

const Show = memo(() => {
    const dispatch = useAppDispatch();
    const menuRef = useRef<HTMLDivElement>(null);
    const pRef = useRef<HTMLParagraphElement>(null);
    const [optionValue, setOptionValue] = useState(6);
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = useCallback((value: number) => {
        dispatch(contentPerPageCreator(value));
    }, [dispatch]);

    const handleClick = (_: React.MouseEvent<HTMLButtonElement>, options: Option) => {
        setOptionValue(options.value);
        setIsOpen(false);
        handleChange(options.value);
    };

    const handleOpenMenu = (event) => {
        console.log(event)
        event.stopPropagation();
        setIsOpen(prev => !prev);
    };

    /*useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }

            if (pRef.current && !pRef.current.contains(event.target as Node)) {
                return
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]); */

    return (
        <div className="catalog-main__show">
            <p ref={pRef} onClick={handleOpenMenu} className={styles.label}>
                Показать: <span>{optionValue}</span>
            </p>
            {isOpen && (
                <div ref={menuRef} className={styles.select}>
                    {options.map((button) => (
                        <button
                            data-value={button.value}
                            key={button.id}
                            onClick={event => handleClick(event, button)}
                            className={styles.options}
                        >
                            {button.value}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
});

export default Show;