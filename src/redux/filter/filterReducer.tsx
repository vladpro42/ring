
import { RootState } from "../rootReducer";
import {
    ActionTypes,
    ChangeContentPerPage,
    FilterState,
    SortByAscendingAndDescending,
    SortByAscendingDescending
} from "./filterTypes"

import { Action } from "./filterTypes";

const initialState: FilterState = {
    contentPerPage: 6,
    sortByAscendingDescending: "des",
    byPrice: 50000,
    inserts: "with",
    tags: [],
}


export const filterReducer = (state = initialState, action: Action) => {
    switch (action.type) {

        case ActionTypes.changeContentPerPage: {
            return { ...state, contentPerPage: action.payload }
        }

        case ActionTypes.sortByAscendingDescending: {
            return { ...state, sortByAscendingDescending: action.payload }
        }

        default:
            return { ...state };
    }
}

//selectors 

export const selectContentPerPage = (state: RootState) => state.filter.contentPerPage

//action creators

export const contentPerPageCreator = (value: number): ChangeContentPerPage => ({
    type: ActionTypes.changeContentPerPage,
    payload: value
})

export const changeContentPerPageCreator = (value: SortByAscendingAndDescending): SortByAscendingDescending => ({
    type: ActionTypes.sortByAscendingDescending,
    payload: value
})

