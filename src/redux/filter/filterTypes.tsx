export type Inserts = "with" | "without"
export type SortByAscendingAndDescending = 'des' | 'asc'
export type SortByAscendingAndDescendingAndDefault = SortByAscendingAndDescending | 'default'
export type FilterByPrice = [number, number]

export type FilterState = {
    contentPerPage: number,
    sortByAscendingDescending: SortByAscendingAndDescending,
    byPrice: FilterByPrice,
    inserts: Inserts,
    tags: string[],
    jewel: boolean,
    sortByPrice: SortByAscendingAndDescendingAndDefault,
    sortByRating: SortByAscendingAndDescendingAndDefault,
    sortByAlphabeticalOrder: SortByAscendingAndDescendingAndDefault,
}

export enum ActionTypes {
    changeContentPerPage = "filter/changeContentPerPage",
    sortByAscendingDescending = 'filter/sortByAscendingDescending',
    byPrice = 'filter/byPrice',
    changeInserts = 'filter/inserts',
    changeTags = 'filter/tags',
    changeJewel = 'filter/jewel',
    sortByPriceValue = 'filter/sortByPriceValue',
    sortByRatingValue = 'filter/sortByRatingValue',
    sortByAlphabeticalOrder = 'filter/sortByAlphabeticalOrder',
}

export type ChangeContentPerPage = {
    type: ActionTypes.changeContentPerPage,
    payload: number
}
export type SortByAscendingDescending = {
    type: ActionTypes.sortByAscendingDescending,
    payload: SortByAscendingAndDescending
}
export type ByPrice = {
    type: ActionTypes.byPrice,
    payload: FilterByPrice
}
export type ChangeInserts = {
    type: ActionTypes.changeInserts,
    payload: Inserts
}
export type ChangeTags = {
    type: ActionTypes.changeTags,
    payload: string[]
}

export type ChangeJewel = {
    type: ActionTypes.changeJewel,
    payload: boolean
}
export type SortByPriceValue = {
    type: ActionTypes.sortByPriceValue,
    payload: SortByAscendingAndDescendingAndDefault
}
export type SortByRatingValue = {
    type: ActionTypes.sortByRatingValue,
    payload: SortByAscendingAndDescendingAndDefault
}
export type SortByAlphabeticalOrder = {
    type: ActionTypes.sortByAlphabeticalOrder,
    payload: SortByAscendingAndDescendingAndDefault
}

export type Action = ChangeContentPerPage |
    SortByAscendingDescending |
    ByPrice |
    ChangeInserts |
    ChangeJewel |
    SortByPriceValue |
    SortByRatingValue |
    SortByAlphabeticalOrder | ChangeTags 
