import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { Rating2 } from "../../../components/Raiting"


import "swiper/css"
import "swiper/css/navigation"
import { Comment } from "./CartPageTab"
import { useState } from "react"


const Reviews = ({ comments, className }: { comments: Comment[], className: string }) => {

    const [showComments, setShowComments] = useState(2)

    const showMoreComments = () => {
        if (showComments < comments.length) {
            setShowComments(showComments + 2)
            return
        }
        return
    }

    const isDisable = showComments >= comments.length

    const MobileComments = comments.map((comment: Comment, index) => {

        if (index < showComments) {
            return (<div key={comment.id} className="cart-page__reviews-cart cart-page__reviews-cart--mobile">
                <h4 className="cart-page__reviews-title">{comment.name}</h4>
                <p className="raiting">
                    <Rating2 defaultValue={comment.rating} precision={0.5} readOnly />
                </p>
                <p className="cart-page__reviews-text">{comment.text}</p>
                <div className="cart-page__reviews-images">
                    {comment.imgSrc ?<img src={comment.imgSrc} alt="" /> : ""}
                </div>
                <p className="cart-page__reviews-data">{comment.data}</p>
            </div>)
        }
    })

    const SwiperComments = <Swiper modules={[Navigation]} navigation slidesPerView={comments.length > 1 ? 2 : 1} spaceBetween={10} >
        {
            comments.map((comment: Comment) => <SwiperSlide key={comment.id}>
                <div className="cart-page__reviews-cart cart-page__reviews-cart--desktop">
                    <h4 className="cart-page__reviews-title">{comment.name}</h4>
                    <p className="raiting">
                        <Rating2 defaultValue={comment.rating} precision={0.5} readOnly />
                    </p>
                    <p className="cart-page__reviews-text">{comment.text}</p>
                    <div className="cart-page__reviews-images">
                        {comment.imgSrc ?<img src={comment.imgSrc} alt="" /> : ""}
                    </div>
                    <p className="cart-page__reviews-data">{comment.data}</p>
                </div>
            </SwiperSlide>
            )
        }
    </Swiper>


    return (
        <div className={className}>
            <h4 className="cart-page__content-title">ОТЗЫВЫ ({comments.length})</h4>
            <div className="cart-page__reviews">
                {SwiperComments}
                {MobileComments}

                <button onClick={showMoreComments}
                    className={!isDisable ? "cart-page__show-more new-items__show-more" :
                        "cart-page__show-more new-items__show-more cart-page__show-more--disable"}
                >
                    ПОКАЗАТЬ ЕЩЁ
                    <svg className="new-items__shape" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Reviews
