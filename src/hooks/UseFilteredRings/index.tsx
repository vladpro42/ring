import { useMemo } from "react";
import { useAppSelector } from "../redux/hooks";
import { selectRings } from "../../redux/rings/ringsSelects";
import { selectByPrice, selectIsJewel, selectSortByAscendingDescending, selectSortByPrice, selectSortByRating } from "../../redux/filter/filterSelectors";
import { Ring } from "../../redux/rings/ringsReducerTypes";
import { filterByJewel, filterByPrice, sortByAscendingAndDescending, sortRingsByPrice, sortRingsByRating } from "../../pages/catalog/utils";



export const useFilteredRings = () => {

    const rings = useAppSelector(selectRings)
    const byPrice = useAppSelector(selectByPrice)
    const byAscendingDescending = useAppSelector(selectSortByAscendingDescending)
    const isJewel = useAppSelector(selectIsJewel)
    const sortByPrice = useAppSelector(selectSortByPrice)
    const sortByRating = useAppSelector(selectSortByRating)

    const filteredRings = useMemo(
        () => rings
            .sort((a: Ring, b: Ring) => sortByAscendingAndDescending(a, b, byAscendingDescending))
            .filter((ring: Ring) => filterByPrice(ring, byPrice))
            .filter((ring: Ring) => filterByJewel(ring, isJewel))
            .sort((a: Ring, b: Ring) => sortRingsByPrice(a, b, sortByPrice))
            .sort((a: Ring, b: Ring) => sortRingsByRating(a, b, sortByRating)
            ), [byAscendingDescending, byPrice, isJewel, rings, sortByPrice, sortByRating]
    )

    return filteredRings

}