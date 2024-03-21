export type Inserts = "with" | "without"
export type SortByAscendingAndDescending = 'des' | 'asc'
export type FilterByPrice = [number, number]

export type FilterState = {
    contentPerPage: number,
    sortByAscendingDescending: SortByAscendingAndDescending,
    byPrice: FilterByPrice,
    inserts: Inserts,
    tags: string[],
    jewel: boolean,
}

export enum ActionTypes {
    changeContentPerPage = "filter/changeContentPerPage",
    sortByAscendingDescending = 'filter/sortByAscendingDescending',
    byPrice = 'filter/byPrice',
    changeInserts = 'filter/inserts',
    changeTags = 'filter/tags',
    changeJewel = 'filter/jewel'
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

export type Action = ChangeContentPerPage | SortByAscendingDescending | ByPrice | ChangeInserts | ChangeJewel