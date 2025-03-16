
export interface Ring {
    id: number;
    raiting: number;
    imgSrc: string;
    price: number;
    priceSale: number;
    jewel: boolean;
    isNew: number;
    article: number;
    tags: string[];
    url: string;
    isFavorite: number;
    isBasket: number;
    categoryId: number;
    h1: string;
    favorite?: boolean;
}

export type RingObject = {
    [id: number | string]: Ring;
};

export interface RingsState {
    rings: RingObject;
    status: string;
    error: string | null;
}

export enum ActionTypes {
    changeFavorite = "rings/changeFavorite",
    ringsLoaded = 'rings/ringsLoaded',
    ringsLoading = 'rings/Loadig',
    ringsError = 'rings/Error',
    updateRing = 'ring/update',
    getRing = 'ring/ringLoaded',
}

export type ChangeFavorite = {
    type: ActionTypes.changeFavorite,
    payload: number
}

export type RingsLoaded = {
    type: ActionTypes.ringsLoaded,
    payload: Ring[]
}

export type RingLoaded = {
    type: ActionTypes.getRing,
    payload: Ring
}

export type RingsLoading = {
    type: ActionTypes.ringsLoading,
}

export type RingUpdate = {
    type: ActionTypes.updateRing,
    payload: Ring
}
export type Action = ChangeFavorite | RingsLoaded | RingsLoading | RingUpdate | RingLoaded