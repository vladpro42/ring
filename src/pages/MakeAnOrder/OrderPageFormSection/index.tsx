import Form from "../form/index"

import sale from "../../../assets/images/catalo-sale.jpg"


export default function OrderPageFormSection() {
    return <section className="order-page__form-section">
        <div className="container">
            <div className="order-page__form-wrapper">

                <Form />
                <picture>
                    <source srcSet="/images/banner-mobile.jpg" media="(max-width: 1400px)" />
                    <img className="order-page__sale" src={sale} alt="" />
                </picture>
            </div>
        </div>
    </section>
}