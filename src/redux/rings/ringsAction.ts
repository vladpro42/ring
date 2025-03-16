
//action creators 

import {ActionTypes, ChangeFavorite, Ring, RingLoaded, RingsLoaded, RingsLoading} from "./ringsReducerTypes"

export const changeFavoriteCreator = (id: number): ChangeFavorite => ({
    type: ActionTypes.changeFavorite,
    payload: id
})

export const fetchRingsCreator = (payload: Ring[]): RingsLoaded => ({
    type: ActionTypes.ringsLoaded,
    payload,
})

export const fetchRingCreator = (payload: Ring): RingLoaded => ({
    type: ActionTypes.getRing,
    payload,
})


export const ringsLoadingCreator = (): RingsLoading => ({
    type: ActionTypes.ringsLoading
})


export const fetchNewsRingsCreator = (payload: Ring[]): RingsLoaded => ({
    type: ActionTypes.ringsLoaded,
    payload,
})

export const ringsError = (error: string) => ({
    type: ActionTypes.ringsError,
    payload: error,
});

export const updateRingCreator = (payload: Ring) => ({
    type: ActionTypes.updateRing,
    payload,
})