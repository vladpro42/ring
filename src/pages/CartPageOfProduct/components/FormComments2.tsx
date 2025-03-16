import { Rating2 } from "../../../components/Raiting";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

type Inputs = {
  name: string;
  text: string;
  rating: number;
  data: string;
  productId: string;
  image?: File; // Используем File вместо FileList
};

enum Status {
  rating = "rating",
  name = "name",
  review = "review",
}

const FormComments2 = ({ ringId }: { ringId: number }) => {
  const [rating, setRating] = useState(5);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [status, setStatus] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const getFormattedDate = () => {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    return `${formattedDay}.${formattedMonth}.${year}`;
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
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
      setStatus('success')
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
    {status === 'success' ? <p className="cart-page__form-success">Форма успешно отправлена</p> :<form onSubmit={handleSubmit(onSubmit)} className="cart-page__form">
        <div className="cart-page__form-header">
          <label className="cart-page__form-label">
            <span
              className={
                status === Status.name
                  ? "cart-page__form-span cart-page__form-span--error"
                  : "cart-page__form-span"
              }
            >
              Ваше имя
            </span>
            <input
              {...register("name", { required: true })}
              onClick={(e) => e.currentTarget.focus()}
              className="cart-page__form-input"
              type="text"
            />
            <span className={"cart-page__err"}>
              {errors.name && <span>This field is required</span>}
            </span>
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
                  style={{ /*maxWidth: "100%", height: "auto"*/ objectFit: 'cover' }}
                />
              </div>
            )}
        </div>
        <label className="cart-page__textarea-label">
          <span
            className={
              status === Status.review
                ? "cart-page__form-span cart-page__form-span--error"
                : "cart-page__form-span"
            }
          >
            Ваш отзыв
          </span>
          <textarea
            {...register("text", { maxLength: 2000 })}
            className="cart-page__textarea"
          ></textarea>
          <span className={"cart-page__err"}>
            {errors.text && <span>Max length: 2000 symbols</span>}
          </span>
        </label>
        <div className="cart-page__form-footer">
          <label className="cart-page__form-label">
            <span
              className={
                status === Status.rating
                  ? "cart-page__form-span cart-page__form-span--error"
                  : "cart-page__form-span"
              }
            >
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
          <button className="cart-page__form-submit">ОСТАВИТЬ ОТЗЫВ</button>
        </div>
      </form>}
      
    </>
  );
};

export default FormComments2;