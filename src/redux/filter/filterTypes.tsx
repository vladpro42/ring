export type Inserts = "with" | "without"
export type SortByAscendingAndDescending = 'des' | 'asc'

export type FilterState = {
    contentPerPage: number,
    sortByAscendingDescending: SortByAscendingAndDescending,
    byPrice: number,
    inserts: Inserts,
    tags: string[],
}

export enum ActionTypes {
    changeContentPerPage = "filter/changeContentPerPage",
    sortByAscendingDescending = 'filter/sortByAscendingDescending',
    byPrice = 'filter/byPrice',
    changeInserts = 'filter/inserts',
    changeTags = 'filter/tags'
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
    payload: number
}
export type ChangeInserts = {
    type: ActionTypes.changeInserts,
    payload: Inserts
}
export type ChangeTags = {
    type: ActionTypes.changeTags,
    payload: string[]
}

export type Action = ChangeContentPerPage | SortByAscendingDescending | ByPrice | ChangeInserts 