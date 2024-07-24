
import { memo, useState } from "react"
import { arrTagForFilter } from "../../../../assets/data/tagsArr"

const SortTags = memo(() => {

    const [isActive] = useState(0)

    return (
        <div className="catalog-main__tegs">
            <h3 className="catalog-main__options-title">ТЕГИ</h3>
            <ul className='catalog-main__tags-list'>
                {
                    arrTagForFilter.map((item, index) => <li
                        key={item}
                        className={index === isActive ? "catalog-main__tags-item catalog-main__tags-item--active" : "catalog-main__tags-item"}
                    >
                        {item}
                    </li>)
                }
                <li className="catalog-main__tags-item">этно</li>
                <li className="catalog-main__tags-item catalog-main__tags-item--active">отпечатки</li>
                <li className="catalog-main__tags-item">бесконечность</li>
                <li className="catalog-main__tags-item">однотонные</li>
                <li className="catalog-main__tags-item">эмаль</li>
                <li className="catalog-main__tags-item">подвижные</li>
                <li className="catalog-main__tags-item">необычные</li>
                <li className="catalog-main__tags-item">широкие</li>
                <li className="catalog-main__tags-item">косичка</li>
                <li className="catalog-main__tags-item">комбинированные</li>
                <li className="catalog-main__tags-item">узкие</li>
                <li className="catalog-main__tags-item">растительный орнамент</li>
                <li className="catalog-main__tags-item">бриллианты</li>
                <li className="catalog-main__tags-item">сапфиры</li>
            </ul>
            <button className='catalog-main__tags-btn'>показать все</button>
        </div >
    )
})

export default SortTags
