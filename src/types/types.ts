
export interface ICart {
    id: number;
    raiting: number;
    imgSrc: string;
    price: number;
    priceSale: number;
    favorite?: boolean;
}
export type typeDataForCart = ICart[]