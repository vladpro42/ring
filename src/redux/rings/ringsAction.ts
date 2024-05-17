
//action creators 

import { ActionTypes, ChangeFavorite, Ring, RingsLoaded, RingsLoading } from "./ringsReducerTypes"

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

