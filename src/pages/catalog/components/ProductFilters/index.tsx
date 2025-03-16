import BtnAnimation from "../BtnAnimation";
import Select from "../../../../components/Show";
import SortRaiting from "../SortRaiting";
import SortPrice from "../SortPrice";
import SortCompound from "../SortCompound";
import SortTags from "../SortTags";
import { options } from "../../../../assets/Options";





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