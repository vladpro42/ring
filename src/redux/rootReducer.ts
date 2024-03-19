import { combineReducers } from "redux";
import { ringsReducer } from "./rings/ringsReducer";
import { store } from "./store"
import { basketReducer } from "./basket/basketReducer";
import { filterReducer } from "./filter/filterReducer";


export const rootReducer = combineReducers({
    rings: ringsReducer,
    basket: basketReducer,
    filter: filterReducer,
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch