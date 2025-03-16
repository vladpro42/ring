
import { AppDispatch } from "../rootReducer"
<<<<<<< HEAD
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


=======
import { fetchNewsRingsCreator, fetchRingsCreator, ringsError } from "./ringsAction"
import { ActionTypes, Ring } from "./ringsReducerTypes"
>>>>>>> dev

// Добавить обработку ошибок!!! 

export const url = "https://65f83983b4f842e808873cd9.mockapi.io/rings"

export async function fetchRings(dispatch: AppDispatch) {
    dispatch({ type: ActionTypes.ringsLoading });

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

<<<<<<< HEAD
        const data = await response.json()

       // dispatch(fetchRingsCreator(data))
        dispatch(fetchRingsCreator(newsRingsArr))

=======
        const data: Ring[] = await response.json();
        dispatch(fetchRingsCreator(data));
>>>>>>> dev
    } catch (error) {
        console.error("Error fetching rings:", error);
        // Обработка ошибки, например, dispatch({ type: ActionTypes.ringsError, payload: error.message });
    }
}

export const fetchOneRing = async (dispatch: AppDispatch) => {
    console.log(url + `/${1}`)
    dispatch({ type: ActionTypes.ringsLoading });

    try {
        const response = await fetch(url + `/${1}`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: Ring[] = await response.json();
        dispatch(fetchRingsCreator(data));
    } catch (error) {
        console.error("Error fetching rings:", error);
        dispatch({ type: ActionTypes.ringsError, payload: error.message });
    }
};


export async function fetchNewsRings(dispatch: AppDispatch) {
     dispatch({ type: ActionTypes.ringsLoading });

    const fullUrl = new URL(url);
    fullUrl.searchParams.append('isNew', '1');

    try {
        const response = await fetch(fullUrl);
        if(!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const rings: Ring[] = await response.json();
        dispatch(fetchNewsRingsCreator(rings))

    } catch (error) {

        if(error instanceof Error) {
            dispatch(ringsError(error.message))
        } else {
            dispatch(ringsError("An unknown error occurred"));
        }

        
    }
}