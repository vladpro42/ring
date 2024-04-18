import { arrTagForFilter } from '../../../../assets/data/tagsArr'
import BtnClose from '../../../../UI/BtnClose'
import { ArrayValues2, arrayValues2 } from '../../../../assets/data/Prices'
import { useState } from 'react'
import { ScrollRestoration } from 'react-router-dom'
import { useAppDispatch } from '../../../../hooks/redux/hooks'
import { changeInsertsCreator, filterByPriceCreator } from '../../../../redux/filter/filterReducer'

const FilterMobile = ({ onClose, className }: { onClose: () => void, className: string }) => {

    const [priceActive, setPriceActive] = useState(0)
    const [tagsActive, setTagsActive] = useState<string[]>([])
    const [insert, setInsert] = useState(0)

    const dispatch = useAppDispatch()

    const handlePriceActiveClick = (index: number, item: ArrayValues2) => {
        dispatch(filterByPriceCreator(item.val))
        setPriceActive(index)
    }
    const handleInsertClick = (index: number) => {
        dispatch(changeInsertsCreator(index === 0 ? 'with' : 'without'))
        setInsert(index)
    }
    const toggleTagsActive = (tag: string) => {
        if (tagsActive.includes(tag)) {
            setTagsActive(tagsActive.filter(item => item !== tag))
            return
        }
        setTagsActive([...tagsActive, tag])
    }

    const resetFilters = () => {

        //default value
        dispatch(filterByPriceCreator(arrayValues2[0].val))
        setPriceActive(0)
        dispatch(changeInsertsCreator('with'))
        setInsert(0)
        setTagsActive([])
    }
    return (
        <div className={["filter-mobile", className].join(' ')}>
            <div className="filter-mobile__header">
                <button onClick={onClose} className='filter-mobile__close'>
                    <BtnClose />
                </button>
                <p className="filter-mobile__text">Фильтры</p>
                <button onClick={resetFilters} className='filter-mobile__btn-reset'>Сбросить</button>
            </div>
            <ul className="filter-mobile__list-filters">
                <li className="filter-mobile__item">
                    <p className="filter-mobile__item-title">Цена, ₽</p>
                    <button className='filter-mobile__item-close'>
                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2" />
                        </svg>
                    </button>
                </li>
                <li className="filter-mobile__open-menu">

                    <ul className='list-filters list-filters--active'>
                        {
                            arrayValues2.map((item, index) => <li
                                onClick={() => handlePriceActiveClick(index, item)}
                                className='list-filters__item'
                                key={item.id}
                            >
                                <p className="list-filters__item-price">{item.title}</p>
                                <div className='list-filters__checkbox'>
                                    <span
                                        className={priceActive === index ?
                                            'list-filters__checkbox-span list-filters__checkbox-span--active' :
                                            'list-filters__checkbox-span'}
                                    ></span>
                                </div>
                            </li>)
                        }
                    </ul>

                </li>
                <li className="filter-mobile__item">
                    <p className="filter-mobile__item-title">Вставки</p>
                    <button className='filter-mobile__item-close'>
                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2" />
                        </svg>
                    </button>
                </li>
                <li className="filter-mobile__open-menu">
                    <ul className='list-filters list-filters--active'>
                        {
                            ['с камнями', 'без камней'].map((item, index) => <li
                                onClick={() => handleInsertClick(index)}
                                key={item}
                                className='list-filters__item'
                            >
                                <p className="list-filters__item-price">{item}</p>
                                <div className='list-filters__checkbox'>
                                    <span
                                        className={insert === index ? 'list-filters__checkbox-span list-filters__checkbox-span--active' : 'list-filters__checkbox-span'}
                                    ></span>
                                </div>
                            </li>)
                        }
                    </ul>
                </li>
                <li className="filter-mobile__item">
                    <p className="filter-mobile__item-title">Теги</p>
                    <button className='filter-mobile__item-close'>
                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2" />
                        </svg>
                    </button>
                </li>
                <li className="filter-mobile__open-menu">
                    <ul className='list-filters list-filters--active'>
                        {
                            arrTagForFilter.map((item) => <li
                                onClick={() => toggleTagsActive(item)}
                                className='list-filters__item'
                                key={item}
                            >
                                <p className="list-filters__item-price">{item}</p>
                                <div
                                    className={tagsActive.includes(item) ? 'list-filters__multicheckbox list-filters__multicheckbox--active' : 'list-filters__multicheckbox'}
                                >
                                    <svg className='list-filters__multicheckbox-span' width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 1L7.048 9L1 1" stroke="white" strokeWidth="2" />
                                    </svg>
                                </div>
                            </li>)
                        }
                    </ul>
                </li>
            </ul>

            <button onClick={onClose} className='filter-mobile__btn'>СМОТРЕТЬ ТОВАРЫ</button>
            <ScrollRestoration />
        </div>
    )
}

export default FilterMobile
