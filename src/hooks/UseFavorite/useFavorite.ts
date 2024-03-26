import { useCallback, useEffect, useState } from "react";
import { RootState } from "../../redux/rootReducer";
import { selectRingById } from "../../redux/rings/ringsReducer";
import { useAppSelector } from "../redux/hooks";
import { Ring } from "../../redux/rings/ringsReducerTypes";
import { getItemFromLocalStorage, setItemToLocalStorage } from "../../utils";

export interface UseFavoriteProps {
    id: number
}

export interface UseFavoriteReturn {
    isFavorite: boolean,
    toggleAddFavorite: (id: number) => void
}

export type UseFavorite = (id: number) => (UseFavoriteReturn);

export const useFavorite: UseFavorite = (id) => {

    const [isActive, setIsActive] = useState(false)
    const ring = useAppSelector((state: RootState) => selectRingById(state, id))

    useEffect(() => {
        const items: Ring[] = getItemFromLocalStorage("favoriteRings") || []
        if (items.find(ring => ring.id == id)) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }, [id])

    const handleClick = useCallback((id: number) => {

        const rings: Ring[] = getItemFromLocalStorage('favoriteRings') || []
        if (rings.find(ring => ring.id == id)) {
            const newRings = rings.filter(ring => ring.id != id)
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