
import { AppDispatch } from "../rootReducer"
import { fetchRingsCreator } from "./ringsAction"
import { ActionTypes } from "./ringsReducerTypes"
import rings from "../../assets/data/rings-100.json"

const ringsArr = Array.from(rings);
let count = 1

const newsRingsArr = ringsArr.map(ring => {
    ring.imgSrc = "/images/new-items-" + count + ".jpg"
    if (count == 10) {
        count = 1
        return ring
    } 
    count++
    return ring
})



// Добавить обработку ошибок!!! 

export async function fetchRings(dispatch: AppDispatch) {
    dispatch({ type: ActionTypes.ringsLoading })
    try {
        const response = await fetch("https://65f83983b4f842e808873cd9.mockapi.io/rings")

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()

       // dispatch(fetchRingsCreator(data))
        dispatch(fetchRingsCreator(newsRingsArr))

    } catch (error) {
        console.error("Error fetching rings:", error);

        // Состояние ошибки
    }
}

