import { useState } from "react";
import { useAppSelector } from "../../../hooks/redux/hooks";
import { selectRingByIds } from "../../../redux/rings/ringsSelects";
import { getItemFromLocalStorage } from "../../../utils";
import Pagination from "../../catalog/components/Pagination/index"
import { NavigationText } from "../../CartPageOfProduct/components";
import { CartOfProduct } from "../../../components/CartOfProduct";
import usePagination from "../../../hooks/UsePagination";

import picture from "../../../assets/images/catalo-sale.jpg"


export default function FavoriteSection() {

    const [ringsIds] = useState<number[]>(() => getItemFromLocalStorage("favoriteRings"))
    const rings = useAppSelector(state => selectRingByIds(state, ringsIds))

    const pagination = usePagination({ contentPerPage: 6, count: 1 });

    return <main className="favorite">
        <section className="favorite__section">
            <div className="container">
                <NavigationText />
                <h1 className="favorite__title">избранное</h1>
                <div className="favorite__inner">
                    <ul className="favorite__list">
                        {(rings.length > 0) && rings.map(item => <CartOfProduct cart={item} key={item.id} />)}
                    </ul>
                    <img className="favorite__img-sale" src={picture} alt="" />
                </div>
            </div>
            <Pagination pagination={pagination} />
        </section>
    </main>
}