import { Ring } from "../rings/ringsReducer"
import basket from "../assets/images/basket-1.png"
import { RootState } from "../rootReducer";


export type BasketRing = {
    ring: Ring,
    model: number,
    defaultCount: number,
    sizeMale?: number,
    sizeFemale?: number,
}

const initialState: BasketRing[] = [
    {
        ring: {
            id: 1,
            imgSrc: basket,
            price: 59600,
            priceSale: 59600,
            raiting: 5,
        },
        model: 1,
        defaultCount: 100,
        sizeFemale: 14,
        sizeMale: 14,
    },
    {
        ring: {
            id: 2,
            imgSrc: basket,
            price: 59600,
            priceSale: 59600,
            raiting: 5,
        },
        model: 1,
        defaultCount: 100,
        sizeFemale: 14,
        sizeMale: 14,
    },
]

enum ActionsTypes {
    add = 'basket/addRing',
    removeOne = 'basket/removeRing',
    removeAll = 'basket/removeAll',
}


type AddBasket = {
    type: ActionsTypes.add,
    payload: BasketRing,
}

type RemoveOne = {
    type: ActionsTypes.removeOne,
    payload: number
}

type RemoveAll = {
    type: ActionsTypes.removeAll,
}

type PayloadAction = AddBasket | RemoveOne | RemoveAll



export const basketReducer = (state = initialState, action: PayloadAction) => {
    switch (action.type) {

        case ActionsTypes.add: {
            return [...state, action.payload]
        }

        case ActionsTypes.removeAll: {
            return []
        }

        case ActionsTypes.removeOne: {
            const newState = [...state].filter(item => item.ring.id !== action.payload)
            return newState
        }

        default:
            return state;
    }
}

// selects

export const selectRingsFromBasket = (state: RootState): BasketRing[] => state.basket


// action creators 

export const addBasketCreator = (payload: BasketRing) => ({
    type: ActionsTypes.add, payload
})

export const removeOneCreator = (payload: number) => ({
    type: ActionsTypes.removeOne, payload,
})

export const removeAllCreators = () => ({
    type: ActionsTypes.removeAll
})