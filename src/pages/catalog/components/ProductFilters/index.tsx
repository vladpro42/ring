import BtnAnimation from "../BtnAnimation";
import Select from "../../../../components/Show";
import SortRaiting from "../SortRaiting";
import SortPrice from "../SortPrice";
import SortCompound from "../SortCompound";
import SortTags from "../SortTags";


export type Option = { value: string, label: string }
export const options: Option[] = [
    { value: "6", label: "6" },
    { value: "12", label: "12" },
    { value: "15", label: "15" },
    { value: "21", label: "21" },
];

export const ProductFilters = () => {


    return <div className="catalog-main__options">
        <BtnAnimation />
        <Select defaultValue={options[0].value} options={options} placeholder='Выберите значение' />
        <SortRaiting />
        <SortPrice />
        <SortCompound />
        <SortTags />
    </div>
}