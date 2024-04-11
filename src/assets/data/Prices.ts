import { FilterByPrice } from "../../redux/filter/filterTypes";

export const arrayValues = ['до 50 000', '50-70 000', '70-100 000', 'от 100 000']


export type ArrayValues2 = {
    id: number;
    title: string;
    val: FilterByPrice;
}


export const arrayValues2: ArrayValues2[] = [
    {
        id: 1,
        title: 'до 50 000',
        val: [50000, 0]
    },
    {
        id: 2,
        title: '50-70 000',
        val: [50000, 70000]
    },
    {
        id: 3,
        title: '70-100 000',
        val: [70000, 100000]
    },
    {
        id: 4,
        title: 'от 100 000',
        val: [0, 100000]
    },
]

