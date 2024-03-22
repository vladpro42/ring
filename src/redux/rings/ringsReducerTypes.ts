export type Ring = {
    id: number,
    raiting: number,
    imgSrc: string,
    price: number,
    priceSale: number,
    favorite?: boolean,
    jewel: boolean,
}

export type RingsState = {
    status: string,
    rings: {
        [id: number | string]: Ring
    }
}

export enum ActionTypes {
    changeFavorite = "rings/changeFavorite",
    ringsLoaded = 'rings/ringsLoaded',
    ringsLoading = 'rings/Loadig',
}

export type ChangeFavorite = {
    type: ActionTypes.changeFavorite,
    payload: number
}

export type RingsLoaded = {
    type: ActionTypes.ringsLoaded,
    payload: Ring[]
}

export type RingsLoading = {
    type: ActionTypes.ringsLoading,
}

export type Action = ChangeFavorite | RingsLoaded | RingsLoading