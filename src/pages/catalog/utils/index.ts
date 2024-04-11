import { FilterByPrice, SortByAscendingAndDescending, SortByAscendingAndDescendingAndDefault } from "../../../redux/filter/filterTypes";
import { Ring } from "../../../redux/rings/ringsReducerTypes";

export function sortByAscendingAndDescending(a: Ring, b: Ring, byAscendingDescending: SortByAscendingAndDescending) {
    if (byAscendingDescending === "des") {
        return - a.raiting + b.raiting;
    } else if (byAscendingDescending === 'asc') {
        return a.raiting - b.raiting;
    }
    throw Error('Не допустимое значение переменной byAscendingDescending;')
}

export function filterByJewel(ring: Ring, isJewel: boolean) {

    if (ring.jewel && isJewel) {
        return true
    } else if (!ring.jewel && !isJewel) {
        return true
    }
}

export function filterByPrice(item: Ring, byPrice: FilterByPrice) {
    if (byPrice[0] == null && byPrice[1] == null) {
        throw Error("Hello world!")
    }

    if (byPrice[1] == 0) {
        return item.price < byPrice[0];
    }

    if (byPrice[0] == 0) {
        return item.price > byPrice[1];
    }

    return item.price > byPrice[0] && item.price < byPrice[1];
}

export function sortRingsByPrice(a: Ring, b: Ring, sort: SortByAscendingAndDescendingAndDefault) {
    if (sort === 'asc') {
        return a.price - b.price
    } else if (sort === 'des') {
        return b.price - a.price
    } else if (sort === 'default') {
        return
    }
    throw Error(' Не допустимое значение sort')
}


export function sortRingsByRating(a: Ring, b: Ring, sort: SortByAscendingAndDescendingAndDefault) {
    if (sort === 'asc') {
        return a.raiting - b.raiting
    } else if (sort === 'des') {
        return b.raiting - a.raiting
    } else if (sort === 'default') {
        return
    }
    throw Error(' Не допустимое значение sort')
}