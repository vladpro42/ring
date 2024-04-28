import { rootReducer } from "./rootReducer";
import { createStore } from "redux";
import { thunk } from "redux-thunk";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

export const store = createStore(rootReducer, undefined, composedEnhancer)
export const { dispatch } = store


export type AppStore = typeof store