
import newItemsSlider1 from "../assets/images/new-items-1.png"
import newItemsSlider2 from "../assets/images/new-items-2.png"
import newItemsSlider3 from "../assets/images/new-items-3.png"
import { createSelector } from "reselect";
import { RootState } from "../rootReducer";

export type Ring = {
    id: number,
    raiting: number,
    imgSrc: string,
    price: number,
    priceSale: number,
    favorite?: boolean,
}

export type RingsState = {
    status: string,
    rings: {
        [id: number | string]: Ring
    }
}

const initialState: RingsState = {
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
}

enum ActionTypes {
    changeFavorite = "rings/changeFavorite",
}

type ChangeFavorite = {
    type: ActionTypes.changeFavorite,
    payload: number
}

type Action = ChangeFavorite

export const ringsReducer = (state = initialState, action: Action) => {
    switch (action.type) {

        case ActionTypes.changeFavorite: {
            const changedItem = { ...state.rings[action.payload] }
            changedItem.favorite = true
            return {
                ...state, rings: {
                    ...state.rings,
                    [action.payload]: { ...state.rings[action.payload], favorite: true }
                }
            }
        }


        default:
            return { ...state };
    }
}

export const selectAllRings = (state: RootState) => state.rings.rings


export const selectRings = createSelector(selectAllRings, (rings) => Object.values(rings))

export const selectRingById = (state: RootState, ringId: number) => {
    return selectAllRings(state)[ringId]
}

//action creators 

export const changeFavoriteCreator = (id: number): ChangeFavorite => ({
    type: ActionTypes.changeFavorite,
    payload: id
})