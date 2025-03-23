import { Rating2 } from "../../../components/Raiting";
import { useForm, SubmitHandler } from "react-hook-form";
import { useCallback, useState } from "react";
import { Inputs } from "./types"
import { getFormattedDate } from "../../../utils/date";
import { fileToBase64 } from "../../../utils";
import { validateTrim } from "../../../utils/validates";
import { CircularProgress } from "@mui/material";

const FormComments2 = ({ ringId, onSubmitSuccess }: { ringId: number, onSubmitSuccess: () => void }) => {
    const [rating, setRating] = useState(5);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [isStatus, setIsStatus] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<null | Error>(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const handleImageChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedImage(file);
        }
    }, []);

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setIsLoading(true);
        let imgSrcBase64 = "";
        if (selectedImage) {
            imgSrcBase64 = await fileToBase64(selectedImage);
        }

        const payload = {
            name: data.name,
            text: data.text,
            rating: rating,
            productId: ringId,
            data: getFormattedDate(),
            imgSrc: imgSrcBase64,
        };

        const url = "https://65f83983b4f842e808873cd9.mockapi.io/Comments";
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(payload),
            });
            await res.json();
            setIsStatus(true)
            onSubmitSuccess();
        } catch (err) {
            setError(err as Error);
        }
    };

    if (error) {
        return <p className="order-page__span--error">{error.message}</p>
    }

    if (isStatus) {
        return <p className="cart-page__form-success">Форма успешно отправлена</p>
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="cart-page__form">
            <div className="cart-page__form-header">
                <label className="cart-page__form-label">
                    <span
                        className={"cart-page__form-span"}
                    >
                        Ваше имя *
                    </span>
                    <input
                        {...register("name", {
                            required: {
                                value: true, message: "Это поле обязательное"
                            },
                            validate: value => validateTrim("Имя", value)
                        })}
                        onClick={(e) => e.currentTarget.focus()}
                        className="cart-page__form-input"
                        type="text"
                    />
                    {errors.name && <p className="order-page__span--error">{errors.name.message}</p>}
                </label>
                <label className="cart-page__input-file">
                    ЗАГРУЗИТЬ ФОТО
                    <input
                        type="file"
                        {...register("image")}
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </label>
                {selectedImage && (
                    <div>
                        <p>Предпросмотр:</p>
                        <img
                            width={80}
                            height={80}
                            src={URL.createObjectURL(selectedImage)}
                            alt="Предпросмотр"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                )}
            </div>
            <label className="cart-page__textarea-label">
                <span className={"cart-page__form-span"} >
                    Ваш отзыв
                </span>
                <textarea
                    {...register("text", { maxLength: { value: 2000, message: "Максимальная длина 2000 символов" } })}
                    className="cart-page__textarea"
                ></textarea>
                {errors.text && <p className="order-page__span--error">{errors.text.message}</p>}
            </label>
            <div className="cart-page__form-footer">
                <label className="cart-page__form-label">
                    <span className={"cart-page__form-span"} >
                        Ваша оценка
                    </span>
                    <div className="cart-page__form-raiting">
                        <Rating2
                            onChange={(_, newValue) => {
                                setRating(newValue || 0);
                            }}
                            value={rating}
                            size="large"
                            precision={0.5}
                        />
                    </div>
                </label>
                {isLoading ? <CircularProgress /> : <button className="cart-page__form-submit" disabled={isLoading}>
                    ОСТАВИТЬ ОТЗЫВ
                </button>}

            </div>
        </form>
    );
};

export default FormComments2;