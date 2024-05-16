import { decrementCount, incrementCount } from "./basketFeatures";
import { ActionsTypes, BasketRing, PayloadAction } from "./basketTypes";


const initialState: BasketRing[] = []


export const basketReducer = (state = initialState, action: PayloadAction) => {
    switch (action.type) {

        case ActionsTypes.add: {

            const is = state.find(item => item.ring.id === action.payload.ring.id)

            if (is) {
                return incrementCount(state, action.payload.ring.id)
            }
            return [...state, action.payload]
        }

        case ActionsTypes.removeAll: {
            return []
        }

        case ActionsTypes.removeOne: {
            const newState = state.filter(item => item.ring.id !== action.payload)
            return newState
        }

        case ActionsTypes.decrementCount: {
            return decrementCount(state, action.payload)
        }

        case ActionsTypes.incrementCount: {
            return incrementCount(state, action.payload)
        }

        default:
            return state;
    }
}




