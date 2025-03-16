import { combineReducers } from "redux";
import { ringsReducer } from "./rings/ringsReducer";
import { store } from "./store"
import { basketReducer } from "./basket/basketReducer";
import { filterReducer } from "./filter/filterReducer";
import {RingsState} from "./rings/ringsReducerTypes.ts";
import {BasketRing} from "./basket/basketTypes.ts";
import {FilterState} from "./filter/filterTypes.tsx";


export const rootReducer = combineReducers({
    rings: ringsReducer,
    basket: basketReducer,
    filter: filterReducer,
})

export interface RootState {
    rings: RingsState;
    basket: BasketRing[]
    filter: FilterState
}
// export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch