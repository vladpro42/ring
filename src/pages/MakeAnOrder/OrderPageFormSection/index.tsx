import sale from "../../../assets/images/catalo-sale.jpg"
import Form2 from "../../../components/Form2/index"


export default function OrderPageFormSection() {
    return <section className="order-page__form-section">
        <div className="container">
            <div className="order-page__form-wrapper">

                <Form2 />
                <picture>
                    <source srcSet="/images/banner-mobile.jpg" media="(max-width: 1400px)" />
                    <img className="order-page__sale" src={sale} alt="" />
                </picture>
            </div>
        </div>
    </section>
}