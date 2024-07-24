import { memo } from "react"
import { CartOfProduct } from "../../../../components/CartOfProduct"
import { UsePaginationReturn } from "../../../../hooks/UsePagination/type"
import { Ring } from "../../../../redux/rings/ringsReducerTypes"

type Props = {
    rings: Ring[],
    pagination: UsePaginationReturn
}

const ProductList = memo(({ rings, pagination }: Props) => {

    return <ul className="catalog-main__product-list">
        {
            rings
                .slice(pagination.firstContentIndex, pagination.lastContentIndex)
                .map((item: Ring) => (
                    <CartOfProduct cart={item} key={item.id} />
                ))
        }
    </ul>
})

export default ProductList