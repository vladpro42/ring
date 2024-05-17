import { ActionsTypes, BasketRing, decrementCount, incrementCount } from "./basketTypes"

export const addBasketCreator = (payload: BasketRing) => ({
    type: ActionsTypes.add,
    payload
})

export const removeOneCreator = (payload: number) => ({
    type: ActionsTypes.removeOne,
    payload,
})

export const removeAllCreators = () => ({
    type: ActionsTypes.removeAll
})

export const decrementCountCreator = (id: number): decrementCount => ({
    type: ActionsTypes.decrementCount,
    payload: id,
})

export const incrementCountCreator = (id: number): incrementCount => ({
    type: ActionsTypes.incrementCount,
    payload: id,
})