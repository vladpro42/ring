
import { ActionTypes, FilterState, } from "./filterTypes"
import { Action } from "./filterTypes";

const initialState: FilterState = {
    contentPerPage: 6,
    sortByAscendingDescending: "des",
    byPrice: [50000, 0],
    inserts: "with",
    tags: [],
    jewel: true,
    sortByPrice: 'default',
    sortByRating: 'default',
    sortByAlphabeticalOrder: 'default',
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

        case ActionTypes.sortByPriceValue: {
            return { ...state, sortByPrice: action.payload }
        }
        case ActionTypes.sortByRatingValue: {
            return { ...state, sortByRating: action.payload }
        }
        case ActionTypes.sortByAlphabeticalOrder: {
            return { ...state, sortByAlphabeticalOrder: action.payload }
        }

        case ActionTypes.changeInserts: {
            return { ...state, inserts: action.payload }
        }

        default:
            return { ...state };
    }
}

