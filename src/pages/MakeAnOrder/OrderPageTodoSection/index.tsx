

export default function OrderPageTodoSection() {
    return <section className="order-page__todo">
        <div className="container">
            <h2 className="order-page__todo-title">КАК МЫ ЭТО ДЕЛАЕМ</h2>
            <ul className="order-page__todo-list">
                <li className="order-page__todo-item">
                    <p className="order-page__item-stage">1 этап</p>
                    <h3 className="order-page__item-title">СОЗДАНИЕ КОНЦЕПЦИИ</h3>
                    <p className="order-page__item-text">На этом этапе мы помогаем Вам определиться с концепцией будущего украшения, металлом, подбираем вставки, рассчитываем примерную стоимость готового изделия.</p>
                    <p className="order-page__item-time">1-3 дня</p>
                </li>
                <li className="order-page__todo-item">
                    <p className="order-page__item-stage">2 этап</p>
                    <h3 className="order-page__item-title">РАЗРАБОТКА ДИЗАЙНА</h3>
                    <p className="order-page__item-text">Исходя из информации, полученной от Вас ранее, дизайнеры готовят эскизы будущего изделия.</p>
                    <p className="order-page__item-time">5-15 дней</p>
                </li>
                <li className="order-page__todo-item">
                    <p className="order-page__item-stage">3 этап</p>
                    <h3 className="order-page__item-title">изготовление</h3>
                    <p className="order-page__item-text">Согласованный дизайн передается ювелирам, которые изготавливают будущее украшение. </p>
                    <p className="order-page__item-time">1-3 дня</p>
                </li>
                <li className="order-page__todo-item">
                    <p className="order-page__item-stage">4 этап</p>
                    <h3 className="order-page__item-title">ДОСТАВКА и оплата</h3>
                    <p className="order-page__item-text">Выполненный заказ передается клиенту. Заказ комплектуется всеми необходимыми сертификатами (при наличии), гарантией, подарочным футляром.</p>
                    <p className="order-page__item-time">1-3 дня</p>
                </li>
            </ul>
        </div>
    </section>
}