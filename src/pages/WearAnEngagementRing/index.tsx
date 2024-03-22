import Footer from "../../components/footer"
import Header from "../../components/header"

import "./wearAnEngagementRing.scss"

import pic from "../../assets/images/wear.png"
import { ScrollRestoration } from "react-router-dom"

const WearAnEngagementRing = () => {
    return (
        <>
            <Header />
            <main className="wear">
                <section className="wear__section">
                    <div className="container">
                        <h1 className="wear__title">КАК ВЫБРАТЬ И НОСИТЬ ПОМОЛВОЧНОЕ КОЛЬЦО?</h1>
                        <div className="wear__top">
                            <div className="wear__text-box">
                                <p className="wear__text">
                                    Конечно же все видели, как в американских фильмах красиво делают предложение руки и сердца: в романтичной обстановке достают коробочку, а там потрясающее кольцо с бриллиантом!
                                </p>
                                <p className="wear__text">
                                    Однако ошибка думать, что помолвка-чисто западная традиция. На Руси существовал обычай "замолвки", "зарока", когда девочку или девушку сватали, а родители обещали выдать за этого молодого человека. В разных местностях "замолвленная", то есть помолвленная девушка носила или особую гривну - шейное украшение, или кольцо, или одежду с определёнными узорами. Это было знаком того, что её через какое-то время обязательно ждёт свадьба. Со временем замолвка перестала сопровождаться дарением украшений или заменилась сватовством, при этом обходились устными договорённостями.
                                </p>
                                <p className="wear__text">  Сказать любимой о силе своих чувств и серьёзности намерений можно, подарив ей помолвочное кольцо.
                                </p>
                                <p className="wear__text">
                                    Помолвочное кольцо выбрать не так сложно.
                                </p>
                            </div>
                            <img className="wear__img" src={pic} alt="" />
                        </div>

                        <ol className="wear__list-text">
                            <li className="wear__item">
                                <span>1</span>
                                <div>
                                    <p className="wear__item-text">
                                        Сначала определитесь с бюджетом. На Западе, например, помолвочное кольцо должно стоить не менее одной месячной зарплаты жениха и чем дороже кольцо, тем серьёзней считаются намерения. Советуем сначала подумать и решить, какую сумму вы готовы потратить, а затем приступать к выбору кольца.
                                    </p>
                                    <p className="wear__item-text">
                                        Классическое помолвочное кольцо сделано из драгоценного металла и одного или нескольких бриллиантов. Так же это может быть камень, например, привезённый из совместного путешествия. Как правило, металл - белое золото, комбинация белого с жёлтым или красным золотом, либо платина.
                                    </p>
                                </div>
                            </li>
                            <li className="wear__item">
                                <span>2</span>
                                <p className="wear__item-text">
                                    Важно знать, каким металлам отдаёт предпочтение ваша любимая, чтобы кольцо не выбивалось из её стиля. В Art-Rings мы сделаем кольцо из любого драгоценного металла, так же возможно изготовление помолвочного кольца по вашему эскизу или идеям.
                                </p>
                            </li>
                            <li className="wear__item">
                                <span>3</span>
                                <p className="wear__item-text">
                                    Подумайте о том, какие бы вам хотелось обручальные кольца, потому что после свадьбы девушка будет одевать помолвочное кольцо рядом с обручальным на правом безымянном или среднем пальце, либо на левой руке (в Art-Rings мы всегда бесплатно изменяем размер колец, сделанных у нас). Есть парные кольца, когда помолвочное и обручальное  сделано в одном стиле.
                                </p>
                            </li>
                            <li className="wear__item">
                                <span>4</span>
                                <div>
                                    <p className="wear__item-text">
                                        Также нужно знать размер кольца.  Помолвочное кольцо носят на безымянном пальце правой руки. Как определить размер кольца так, чтобы девушка не поняла о чем речь? Даже если невзначай, между делом, спросить её или её подругу, любимая может догадаться или подружка всё расскажет, тогда ореол сюрприза и романтики будет потерян.
                                    </p>
                                    <p className="wear__item-text">
                                        Поэтому здесь вам придётся прибегнуть к хитрости. Можно примерить кольцо, которое девушка носит на среднем пальце, ей на безымянный. Прикинуть, насколько оно велико, а затем померить на свой палец, например, на мизинец. Запомните свои ощущения, а в Art-Rings мы поможем определить, какой у неё размер безымянного пальца. Можно померить на левый безымянный, если девушка правша, разница составляет пол-размера. Были случаи, когда размер приходилось измерять по кольцу из конфетной обёртки или фольги. Такой способ легко преподнести как игру, угостив девушку конфетой и скрутить из фантика для неё колечко. В любом случае, в Art-Rings бесплатно подкорректируют размер кольца.
                                    </p>
                                </div>
                            </li>
                        </ol>
                        <p className="wear__item-text wear__item-text--down">
                            После свадьбы помолвочное кольцо можно одевать часто либо отложить для особого случая. Помолвочное кольцо хорошо смотрится с обручальным, если они выполнены в едином стиле, а на пальце между ними нет промежутков, когда они рядом.  Изменив размер кольца, можно носить помолвочное на среднем пальце или безымянном левой руки.  Строгих правил на этот счёт не существует.
                        </p>
                    </div>
                </section>
            </main>
            <ScrollRestoration />
            <Footer />
        </>
    )
}

export default WearAnEngagementRing
