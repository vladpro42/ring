import { memo, useState, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux/hooks";
import { ActionTypes } from "../../../../redux/filter/filterTypes";
import { selectFilterByTags } from "../../../../redux/filter/filterSelectors";

import shape from "../../../../assets/images/shape.svg"

export const tags = [
    { id: 1, name: 'этно' },
    { id: 2, name: 'отпечатки' },
    { id: 3, name: 'бесконечность' },
    { id: 4, name: 'однотонные' },
    { id: 5, name: 'эмаль' },
    { id: 6, name: 'подвижные' },
    { id: 7, name: 'необычные' },
    { id: 8, name: 'широкие' },
    { id: 9, name: 'косичка' },
    { id: 10, name: 'комбинированные' },
    { id: 11, name: 'узкие' },
    { id: 12, name: 'растительный орнамент' },
    { id: 13, name: 'бриллианты' },
    { id: 14, name: 'необычные' },
    { id: 15, name: 'сапфиры' },
]

export const tags2 = tags.map(item => item.name)
const SortTags = memo(() => {
    const dispatch = useAppDispatch();
    const tags = useAppSelector(selectFilterByTags);
    const [selectedTags, setSelectedTags] = useState<string[]>(tags);

    const handleTagChange = useCallback((tag: string) => {
        const newTags = selectedTags.includes(tag)
            ? selectedTags.filter((t) => t !== tag)
            : [...selectedTags, tag];

        setSelectedTags(newTags);
        dispatch({
            type: ActionTypes.changeTags,
            payload: newTags,
        });
    }, [dispatch, selectedTags]);


    const [isShowMore, setIsShowMore] = useState(false);
    const maxElements = isShowMore ? tags2.length : 5;

     

    return (
        <div className="catalog-main__tegs">
            <h3 className="catalog-main__options-title">ТЕГИ</h3>
            <ul className='catalog-main__tags-list'>
                {tags2.slice(0, maxElements).map((item, index) => {
                    const isActive = selectedTags.includes(item);
                    const className = isActive ? 'catalog-main__tags-item--active' : '';
                    return (
                        <li
                            key={item + index}
                            onClick={() => handleTagChange(item)}
                            className={`catalog-main__tags-item ${className}`}
                        >
                            {item}
                        </li>
                    );
                })}
            </ul>
            <button onClick={() => setIsShowMore(prev => !prev)} className='catalog-main__tags-btn'>
                {!isShowMore ? 'показать все' : 'скрыть'}
                <img className={`${isShowMore ? 'active' : ''}`} src={shape} alt="" />
            </button>
        </div>
    );
});

export default SortTags;