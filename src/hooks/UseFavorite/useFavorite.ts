import { useCallback, useEffect, useState } from "react";
import { getItemFromLocalStorage, setItemToLocalStorage } from "../../utils";

export interface UseFavoriteProps {
    id: number
}

export interface UseFavoriteReturn {
    isFavorite: boolean,
    toggleAddFavorite: (id: number) => void
}

export type UseFavorite = (key: string, id: number) => (UseFavoriteReturn);

export const useFavorite: UseFavorite = (key: string, id) => {

    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        const ringsids: number[] = getItemFromLocalStorage(key) || []
        if (ringsids.includes(id)) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }, [id, key])



    const handleClick = useCallback((id: number) => {

        const ringsIds: number[] = getItemFromLocalStorage(key) || []
        if (ringsIds.includes(id)) {
            const newRingsIds = ringsIds.filter(itemId => itemId !== id)
            localStorage.setItem(key, JSON.stringify(newRingsIds))
            setIsActive(false)
            return
        }
        setItemToLocalStorage(key, id)
        setIsActive(true)
    }, [key])

    return {
        toggleAddFavorite: handleClick,
        isFavorite: isActive,
    }

}