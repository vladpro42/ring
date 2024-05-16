import { RootState } from "../rootReducer"
import { BasketRing } from "./basketTypes"

export const selectRingsFromBasket = (state: RootState): BasketRing[] => state.basket
export const selectRingsFromBasketLength = (state: RootState): number => state.basket.length