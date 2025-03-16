
import { Action, ActionTypes, RingsState } from "./ringsReducerTypes";
import { Ring } from "./ringsReducerTypes";


const initialState: RingsState = {
    status: 'loading',
    rings: {},
    error: null
}


export const ringsReducer = (state = initialState, action: Action) => {
    switch (action.type) {

        case ActionTypes.changeFavorite: {
            return {
                ...state, rings: {
                    ...state.rings,
                    [action.payload]: { ...state.rings[action.payload], favorite: !state.rings[action.payload].isFavorite }
                }
            }
        }

        case ActionTypes.getRing: {
            return {
               [action.payload.id]: action.payload
            }
        }

        case ActionTypes.updateRing: {
            return {
                ...state, 
                rings: {
                    ...state.rings,
                    [action.payload.id]: {
                        ...state.rings[action.payload.id],
                        ...action.payload,
                    }
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


