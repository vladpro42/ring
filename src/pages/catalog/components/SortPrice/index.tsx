import React from 'react'

const SortPrice = () => {
    return (
        <div className="catalog-main__price">
            <h3 className="catalog-main__options-title">ЦЕНА</h3>
            <ul className='catalog-main__options-list'>
                <li className="catalog-main__options-item catalog-main__options-item--active">до 50 000</li>
                <li className="catalog-main__options-item">50-70 000</li>
                <li className="catalog-main__options-item">70-100 000</li>
                <li className="catalog-main__options-item">от 100 000</li>
            </ul>
        </div>
    )
}

export default SortPrice
