import { Ring } from "../rings/ringsReducerTypes";

export type BasketRing = {
    ring: Ring,
    model: number,
    defaultCount: number,
    sizeMale?: number,
    sizeFemale?: number,
}

export enum ActionsTypes {
    add = 'basket/addRing',
    removeOne = 'basket/removeRing',
    removeAll = 'basket/removeAll',
    incrementCount = 'basket/incrementCount',
    decrementCount = 'basket/decrementCount'
}


export type AddBasket = {
    type: ActionsTypes.add,
    payload: BasketRing,
}

export type RemoveOne = {
    type: ActionsTypes.removeOne,
    payload: number
}

export type RemoveAll = {
    type: ActionsTypes.removeAll,
}

export type incrementCount = {
    type: ActionsTypes.incrementCount;
    payload: number
}

export type decrementCount = {
    type: ActionsTypes.decrementCount;
    payload: number
}

export type PayloadAction = AddBasket | RemoveOne | RemoveAll | incrementCount | decrementCount
