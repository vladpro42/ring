import { ActionTypes, ByPrice, ChangeContentPerPage, ChangeInserts, ChangeJewel, ChangeTags, FilterByPrice, Inserts, SortByAlphabeticalOrder, SortByAscendingAndDescending, SortByAscendingAndDescendingAndDefault, SortByAscendingDescending, SortByPriceValue, SortByRatingValue } from "./filterTypes"

export const contentPerPageCreator = (value: number): ChangeContentPerPage => ({
    type: ActionTypes.changeContentPerPage,
    payload: value
})
export const changeContentPerPageCreator = (value: SortByAscendingAndDescending): SortByAscendingDescending => ({
    type: ActionTypes.sortByAscendingDescending,
    payload: value
})

export const filterByPriceCreator = (payload: FilterByPrice): ByPrice => ({
    type: ActionTypes.byPrice,
    payload,
})

export const filterByJewelCreator = (payload: boolean): ChangeJewel => ({
    type: ActionTypes.changeJewel,
    payload,
})
export const sortByPriceValueCreator = (payload: SortByAscendingAndDescendingAndDefault): SortByPriceValue => ({
    type: ActionTypes.sortByPriceValue,
    payload,
})
export const sortByRatingValueCreator = (payload: SortByAscendingAndDescendingAndDefault): SortByRatingValue => ({
    type: ActionTypes.sortByRatingValue,
    payload,
})
export const sortByAlphabeticalOrderCreator = (payload: SortByAscendingAndDescendingAndDefault): SortByAlphabeticalOrder => ({
    type: ActionTypes.sortByAlphabeticalOrder,
    payload,
})
export const changeInsertsCreator = (payload: Inserts): ChangeInserts => ({
    type: ActionTypes.changeInserts,
    payload,
})

export const filterByTagsCreator = (payload: string[]): ChangeTags => ({
    type: ActionTypes.changeTags,
    payload,
})