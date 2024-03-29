
import { RootState } from "../rootReducer";
import {
    ActionTypes,
    ByPrice,
    ChangeContentPerPage,
    ChangeJewel,
    FilterByPrice,
    FilterState,
    SortByAscendingAndDescending,
    SortByAscendingDescending
} from "./filterTypes"

import { Action } from "./filterTypes";

const initialState: FilterState = {
    contentPerPage: 6,
    sortByAscendingDescending: "des",
    byPrice: [50000, 0],
    inserts: "with",
    tags: [],
    jewel: true,
}


export const filterReducer = (state = initialState, action: Action) => {
    switch (action.type) {

        case ActionTypes.changeContentPerPage: {
            return { ...state, contentPerPage: action.payload }
        }

        case ActionTypes.sortByAscendingDescending: {
            return { ...state, sortByAscendingDescending: action.payload }
        }

        case ActionTypes.byPrice: {
            return { ...state, byPrice: action.payload }
        }

        case ActionTypes.changeJewel: {
            return { ...state, jewel: action.payload }
        }

        default:
            return { ...state };
    }
}

//selectors 

export const selectContentPerPage = (state: RootState) => state.filter?.contentPerPage
export const selectByPrice = (state: RootState) => state.filter.byPrice
export const selectIsJewel = (state: RootState) => state.filter.jewel
export const selectSortByAscendingDescending = (state: RootState) => state.filter.sortByAscendingDescending


//action creators

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