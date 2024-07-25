import { useCallback, useEffect } from "react";
import NavigationText from "../../../components/NavigationText";
import CartPageCart from "./CartPageCart";
import CartPageTab from "./CartPageTab";
import DescriptionProduct from "./DescriptionProduct";
import RecentlyViewed from "./RecentlyViewed";
import { addBasketCreator } from "../../../redux/basket/basketActions";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/hooks";
import { RootState } from "../../../redux/rootReducer";
import { selectRingById } from "../../../redux/rings/ringsSelects";
import { useParams } from "react-router-dom";
import { BasketRing } from "../../../redux/basket/basketTypes";
import { getItemFromLocalStorage } from "../../../utils";


export default function CartPageOfProduct() {

    const dispatch = useAppDispatch()
    const { id } = useParams();
    const ring = useAppSelector((state: RootState) => selectRingById(state, Number(id))) || null


    const addBasket = useCallback(() => {

        const payload: BasketRing = {
            ring: ring,
            defaultCount: 1,
            model: 1,
            sizeFemale: 14
        }

        dispatch(addBasketCreator(payload))
    }, [ring, dispatch])

    useEffect(() => {
        const recentlyViewedIds: number[] = getItemFromLocalStorage("recentlyViewed")

        if (!recentlyViewedIds.includes(+id)) {
            recentlyViewedIds.push(+id)
        }

        localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewedIds))
    }, [id])


    return <section className="cart-page__section">
        <div className="container">
            <NavigationText />
            <DescriptionProduct id={+id} rating={ring?.raiting} />
            <CartPageCart
                imgSrc={ring?.imgSrc}
                price={ring?.price}
                priceSale={ring?.priceSale}
                onClick={addBasket}
            />
            <CartPageTab />
            <RecentlyViewed />
        </div>
    </section>
}