
import { AppDispatch } from "../rootReducer"
import { fetchRingsCreator } from "./ringsAction"
import { ActionTypes } from "./ringsReducerTypes"

// Добавить обработку ошибок!!! 

export async function fetchRings(dispatch: AppDispatch) {
    dispatch({ type: ActionTypes.ringsLoading })
    try {
        const response = await fetch("https://65f83983b4f842e808873cd9.mockapi.io/rings")

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()

        dispatch(fetchRingsCreator(data))
    } catch (error) {
        console.error("Error fetching rings:", error);

        // Состояние ошибки
    }
}

