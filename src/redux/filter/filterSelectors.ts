import { RootState } from "../rootReducer"

export const selectContentPerPage = (state: RootState) => state.filter.contentPerPage
export const selectByPrice = (state: RootState) => state.filter.byPrice
export const selectIsJewel = (state: RootState) => state.filter.jewel
export const selectSortByAscendingDescending = (state: RootState) => state.filter.sortByAscendingDescending
export const selectSortByPrice = (state: RootState) => state.filter.sortByPrice
export const selectSortByRating = (state: RootState) => state.filter.sortByRating
export const selectSortByAlphabeticalOrder = (state: RootState) => state.filter.sortByAlphabeticalOrder
export const selectFilterByTags = (state: RootState) => state.filter.tags

