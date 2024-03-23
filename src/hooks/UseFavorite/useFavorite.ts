import { useCallback, useEffect, useState } from "react";
import { RootState } from "../../redux/rootReducer";
import { selectRingById } from "../../redux/rings/ringsReducer";
import { useAppSelector } from "../redux/hooks";
import { Ring } from "../../redux/rings/ringsReducerTypes";
import { getItemFromLocalStorage, setItemToLocalStorage } from "../../utils";
import { useParams } from "react-router-dom";

export interface UseFavoriteReturn {
    isFavorite: boolean,
    toggleAddFavorite: (id: number) => void
}

export type UseFavorite = () => (UseFavoriteReturn);

export const useFavorite: UseFavorite = () => {
    const params = useParams()
    const numId = +params.id

    const [isActive, setIsActive] = useState(false)
    const ring = useAppSelector((state: RootState) => selectRingById(state, numId))

    useEffect(() => {
        const items: Ring[] = getItemFromLocalStorage("favoriteRings") || []
        if (items.find(ring => ring.id == numId)) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }, [numId])

    const handleClick = useCallback((numId: number) => {

        const rings: Ring[] = getItemFromLocalStorage('favoriteRings') || []
        if (rings.find(ring => ring.id == numId)) {
            const newRings = rings.filter(ring => ring.id != numId)
            localStorage.setItem('favoriteRings', JSON.stringify(newRings))
            setIsActive(false)
            return
        }
        setItemToLocalStorage('favoriteRings', ring)
        setIsActive(true)
    }, [ring])

    return {
        toggleAddFavorite: handleClick,
        isFavorite: isActive,
    }

}