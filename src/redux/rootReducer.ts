import { combineReducers } from "redux";
import { ringsReducer } from "./rings/ringsReducer";
import { store } from "./store"
import { basketReducer } from "./basket/basketReducer";


export const rootReducer = combineReducers({
    rings: ringsReducer,
    basket: basketReducer,
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch