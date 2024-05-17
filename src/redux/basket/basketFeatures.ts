import { BasketRing } from "./basketTypes"

export function incrementCount(state: BasketRing[], id: number) {
    return state.map(item => {
        if (item.ring.id === id) {
            item.defaultCount++
        }
        return item
    })
}

export function decrementCount(state: BasketRing[], id: number) {
    const newState = state.map(item => {
        if (item.ring.id === id) {
            if (item.defaultCount > 0) {
                item.defaultCount--
            }
        }
        return item
    })
    return newState
}
