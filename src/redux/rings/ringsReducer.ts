
/* import newItemsSlider1 from "../../assets/images/new-items-1.png"
import newItemsSlider2 from "../../assets/images/new-items-2.png"
import newItemsSlider3 from "../../assets/images/new-items-3.png" */

import { createSelector } from "reselect";

import { AppDispatch, RootState } from "../rootReducer";
import { Action, ActionTypes, ChangeFavorite, RingsLoaded, RingsState, RingsLoading } from "./ringsReducerTypes";
import { Ring } from "./ringsReducerTypes";



/* const initialState: RingsState = {
    status: "idle",
    rings: {
        1: {
            id: 1, raiting: 3, imgSrc: newItemsSlider1, price: 59600, priceSale: 57000
        },
        2: {
            id: 2, raiting: 4.5, imgSrc: newItemsSlider2, price: 59600, priceSale: 57000
        },
        3: {
            id: 3, raiting: 3, imgSrc: newItemsSlider3, price: 59600, priceSale: 57000
        },
        4: {
            id: 4, raiting: 3, imgSrc: newItemsSlider1, price: 59600, priceSale: 57000
        },
        5: {
            id: 5, raiting: 4.5, imgSrc: newItemsSlider2, price: 59600, priceSale: 57000
        },
        6: {
            id: 6, raiting: 3, imgSrc: newItemsSlider3, price: 59600, priceSale: 57000
        },
        7: {
            id: 7, raiting: 3, imgSrc: newItemsSlider1, price: 59600, priceSale: 57000
        },
        8: {
            id: 8, raiting: 4.5, imgSrc: newItemsSlider2, price: 59600, priceSale: 57000
        },
        9: {
            id: 9, raiting: 3, imgSrc: newItemsSlider3, price: 59600, priceSale: 57000
        },
    }
} */

const initialState: RingsState = {
    status: 'loading',
    rings: {}
}


export const ringsReducer = (state = initialState, action: Action) => {
    switch (action.type) {

        case ActionTypes.changeFavorite: {
            return {
                ...state, rings: {
                    ...state.rings,
                    [action.payload]: { ...state.rings[action.payload], favorite: !state.rings[action.payload].favorite }
                }
            }
        }

        case ActionTypes.ringsLoading: {
            return { ...state, status: 'loading' }
        }

        case ActionTypes.ringsLoaded: {

            const newRings: {
                [id: string | number]: Ring;
            } = {}

            action.payload.forEach(item => {
                newRings[item.id] = item
            })

            return {
                ...state,
                status: 'idle',
                rings: newRings
            }

        }

        default:
            return { ...state };
    }
}

export const selectAllRings = (state: RootState) => state.rings.rings

export const selectArrRings = (state: RootState) => {
    const rings = selectAllRings(state)
    if (rings) {
        return Object.values(rings)
    }
}

export const selectRings = createSelector(selectAllRings, (rings) => {
    if (rings) {
        return Object.values(rings)
    } else {
        return []
    }
})

export const selectRingById = (state: RootState, ringId: number) => {
    return selectAllRings(state)[ringId]
}

export const selectRingsStatus = (state: RootState) => state.rings.status


//action creators 

export const changeFavoriteCreator = (id: number): ChangeFavorite => ({
    type: ActionTypes.changeFavorite,
    payload: id
})

export const fetchRingsCreator = (payload: Ring[]): RingsLoaded => ({
    type: ActionTypes.ringsLoaded,
    payload,
})

export const ringsLoadingCreator = (): RingsLoading => ({
    type: ActionTypes.ringsLoading
})


//thunk func 

// Добавить обработку ошибок!!! 

export async function fetchRings(dispatch: AppDispatch) {
    dispatch({ type: ActionTypes.ringsLoading })
    const response = await fetch("https://65f83983b4f842e808873cd9.mockapi.io/rings")
    dispatch(fetchRingsCreator(await response.json()))
}