import { createSelector } from "reselect"
import { RootState } from "../rootReducer"
import {Ring} from "./ringsReducerTypes.ts";
export const selectAllRings = (state: RootState) => {
    console.log(state.rings.rings)
    return state.rings.rings
};

export const selectNewsRings = (state: RootState) => {
    const rings = selectAllRings(state);
    return Object.values(rings).filter((ring: Ring) => ring.isNew === 1);
};


export const selectisFavoriteRings = (state: RootState) => {
    const rings = selectAllRings(state);
    return Object.values(rings).filter((ring: Ring) => ring.isFavorite === 1);
};
export const selectCountIsFavorite = (state: RootState) => {
    const rings = selectisFavoriteRings(state)
    return rings.length
};

export const selectNewRingsMemo = createSelector(selectAllRings, rings => {
    return Object.values(rings).filter((ring: Ring) => ring.isNew === 1);
});

export const selectArrRings = (state: RootState) => {
    const rings = selectAllRings(state);
    return rings ? Object.values(rings) : [];
};

export const selectAllRingsMemo = createSelector([selectAllRings], rings => {
    return Object.values(rings);
});

export const selectRings = createSelector(selectAllRings, rings => {
    return rings ? Object.values(rings) : [];
});

export const selectRingById = (state: RootState, ringId: number) => {
    return selectAllRings(state)[ringId];
};

export const selectRingByIdsMemo = (_: RootState, ids: number[]) => ids;

export const selectByIdsMemo = createSelector(
    [selectAllRings, selectRingByIdsMemo],
    (rings, ids) => {
        return ids.map(id => rings[id]);
    }
);

export const selectRingByIds = (state: RootState, ringIds: number[]) => {
    return ringIds.map(id => selectAllRings(state)[id]);
};

export const selectRingsStatus = (state: RootState): string => state.rings.status as string;