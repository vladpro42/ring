import { useAppSelector } from "../../../hooks/redux/hooks";
import { selectisFavoriteRings } from "../../../redux/rings/ringsSelects";
import Pagination from "../../catalog/components/Pagination/index";
import { NavigationText } from "../../CartPageOfProduct/components";
import { CartOfProduct } from "../../../components/CartOfProduct";
import usePagination from "../../../hooks/UsePagination";

export default function FavoriteSection() {
  const rings = useAppSelector(selectisFavoriteRings);

  const pagination = usePagination({
    contentPerPage: 6, 
    count: rings.length, 
  });

  const currentRings = rings.slice(
    pagination.firstContentIndex,
    pagination.lastContentIndex
  );

  return (
    <main className="favorite">
      <section className="favorite__section">
        <div className="container">
          <NavigationText />
          <h1 className="favorite__title">Избранное</h1>
          <div className="favorite__inner">
            <ul className="favorite__list">
              {currentRings.length > 0 ? (
                currentRings.map((item) => (
                  <CartOfProduct
                    className="favorite-cart"
                    cart={item}
                    key={item.id}
                  />
                ))
              ) : (
                <p>Нет избранных товаров</p>
              )}
            </ul>
          </div>
        </div>
        <Pagination pagination={pagination} />
      </section>
    </main>
  );
}