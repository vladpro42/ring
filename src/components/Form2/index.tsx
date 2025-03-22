import { useState } from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { EMAIL_REGEXP, PHONE_REGEXP } from "../../utils/constants";
import { validateTrim, validateFileType } from "../../utils/validates";
import { Inputs } from "./types";

const OderForm = () => {
    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const [isSubmitted, setIsSubmitted] = useState(false);
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        setIsSubmitted(true);
    };

    const selectedFile = watch("file");
    if (isSubmitted) {
        return (
            <div className="thanks-message">
                <p>Ваша заявка отправлена успешно.</p>
            </div>
        );
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="order-page__form">
            <h2 className="order-page__form-title">ОСТАВИТЬ ЗАЯВКУ</h2>
            <div className="order-page__form-header">
                <label className="order-page__label">
                    <span className={"order-page__span"}>Ваше имя *</span>
                    <input
                        placeholder=" Ваше имя"
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Имя обязательный параметр",
                            },
                            validate: (value) => validateTrim("Имя", value),
                        })}
                        className="order-page__input"
                        type="text"
                    />
                    {errors.name && <p className="order-page__span--error">{errors.name.message}</p>}
                </label>
                <div>
                    <label className="cart-page__input-file">
                        <Controller
                            name="file"
                            control={control}
                            rules={{
                                required: "Файл обязательный",
                                validate: validateFileType,
                            }}
                            render={({ field }) => (
                                <input /*{...field}*/ type="file" onChange={(e) => {
                                    const file = e.target.files?.[0] || null
                                    field.onChange(file)
                                }} />
                            )}
                        />
                        ЗАГРУЗИТЬ ФОТО *
                    </label>
                    {selectedFile && <span>Выбран файл: {selectedFile.name}</span>}
                    {errors.file && <span className="order-page__span--error">{errors.file.message}</span>}
                </div>
            </div>
            <div className="order-page__block">
                <label className="order-page__label">
                    <span className="order-page__span">Ваш e-mail</span>
                    <input
                        {...register("email", {
                            pattern: {
                                value: EMAIL_REGEXP,
                                message: "Некорректный e-mail",
                            },
                        })}
                        placeholder="Ваш e-mail"
                        className="order-page__input"
                        type="text"
                    />
                    {errors.email && <p className="order-page__span--error">{errors.email.message}</p>}
                </label>
                <label className="order-page__label">
                    <span className={"order-page__span"}>Ваш телефон *</span>
                    <input
                        {...register("phone", {
                            pattern: {
                                value: PHONE_REGEXP,
                                message: "Некорректный телефон",
                            },
                            required: {
                                value: true,
                                message: "Телефон обязательное поле",
                            },
                        })}
                        placeholder="Ваш телефон"
                        className="order-page__input"
                        type="text"
                    />
                    {errors.phone && <p className="order-page__span--error">{errors.phone.message}</p>}
                </label>
            </div>
            <span className={"order-page__span"}>Комментарий</span>
            <textarea
                {...register("message", {
                    maxLength: {
                        message: "Ваше сообщение не может превышать более 2000 символов",
                        value: 2000,
                    },
                })}
                placeholder="Ваш комментарий"
                className="order-page__textarea"
            ></textarea>
            {errors.message && <p className="order-page__span--error">{errors.message.message}</p>}
            <button className="order-page__submit">РАССЧИТАТЬ СТОИМОСТЬ</button>
        </form>
    );
};

export default OderForm;
