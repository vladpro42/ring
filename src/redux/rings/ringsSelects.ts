import { createSelector } from "reselect"
import { RootState } from "../rootReducer"
import {RingObject} from "./ringsReducerTypes.ts";

export const selectAllRings = (state: RootState): RingObject => state.rings.rings;

export const selectNewsRings = (state: RootState) => {
    const rings = selectAllRings(state);

    return Object.values(rings).filter(ring => ring.isNew === 1)
}

export const selectNewRingsMemo = createSelector(selectAllRings, rings => {
    return Object.values(rings).filter(ring => ring.isNew === 1)
})

export const selectArrRings = (state: RootState) => {
    const rings = selectAllRings(state)
    if (rings) {
        return Object.values(rings)
    }
}

export const selectAllRingsMemo = createSelector([selectAllRings], (rings) => {
    return Object.values(rings)
})

export const selectRings = createSelector(selectAllRings, (rings) => {
    if (rings) {
        return Object.values(rings)
    } else {
        return []
    }
})


export const selectRingById = (state: RootState, ringId: number) => {
    return selectAllRings(state)[ringId]
}

export const selectRingByIdsMemo = (_: RootState, ids: number[]) => ids

export const selectByIdsMemo = createSelector([selectAllRings, selectRingByIdsMemo], (rings, ids) => {
    const res = ids.map(id => rings[id])
    return res
})

export const selectRingByIds = (state: RootState, ringIds: number[]) => {

    const result = ringIds.map(id => selectAllRings(state)[id])
    return result
}

export const selectRingsStatus = (state: RootState) => state.rings.status