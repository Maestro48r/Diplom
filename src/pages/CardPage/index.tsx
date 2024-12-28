import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./style.module.css";
import image from "../../Media/star.png";

const CardPage = (props) => {

  const {
    id,
    title,
    imgUrl,
    vendorСode,
    size,
    price
  } = props;
  
  const [sneak, setSneak] = useState(null);

  const params = useParams();
  let sneakId = params.id;

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData(url) {
      try {
        const response = await axios.get(url);
        setSneak(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching : ", error.massage);
      }
    }

    const url = "https://1a1752655ec9a214.mokky.dev/sneakers/" + sneakId;
    fetchData(url);
  }, [sneakId]);

  return (
    <>
      <div>
        <button onClick={() => navigate("/")}>Назад</button>
        Страница товара № {sneakId} кроссовки
        {sneak && (
          <div className={style.card_page}>
            <img src={sneak.imgUrl} alt="" />
            <div className={style.card_text}>
              <div className={style.card_group1}>
                <p>Артикул: {sneak.vendorСode}</p>
                <p>В наличии: {sneak.inStock} шт.</p>
              </div>

              <h2>
                {sneak.gender} ассортимент: кроссовки {sneak.title}
              </h2>
              <div className={style.card_star}>
                <h4>{sneak.stars}</h4>
                <img src={image} alt="звезда" />
              </div>
              <h2>Размеры:</h2>
              <div className={style.card_size}>
              {sneak.sizes.map((size) => (
                <div key={size}><input
                type="button" name="size" value={size}
                checked={size}
                onChange={() => setSize(!size)}
              /></div>
              ))}
              </div>
              
              <div className={style.card_price}>
                <h3>
                  Новая цена: <br></br>
                  {sneak.price} ₽
                </h3>
                <h4>
                  Старая цена: <br></br>
                  {sneak.oldPrice} ₽
                </h4>
              </div>
              <button>Заказать</button>
              
            </div>
            <div className={style.card_footer}>
            <div className={style.card_description}>
              <h2>Описание:</h2>
            <p>{sneak.description}</p>
            </div>
            <div className={style.card_specification}>
              <h2>Характеристики:</h2>
             <p>Пол: {sneak.gender}</p>
             <p>Цвета: {sneak.color}</p>
             <p>Состав: {sneak.compound}</p>
             <p>Страна: {sneak.country}</p>
            </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CardPage;
