import axios from "axios";
import style from "./style.module.css";
import React, { useEffect, useState, useContext } from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/Cart";
import Cart from "../Cart";
import shoppingCart from "../../Media/icons8-shopping-cart-50.png";

const Products = (prop) => {

  const [showModal, setShowModal] = useState(false);
  const toggle = () => {
    setShowModal(!showModal)
  }

  const { cartItems, addToCart } = useContext(CartContext);

  const navigate = useNavigate();

  const [sneakers, setSneakers] = useState(null);
  const [loading, setLoading] = useState(true);

  const [min, setMin] = useState(1850);
  const [max, setMax] = useState(27999);

  const [man, setMan] = useState(true);
  const [woman, setWoman] = useState(true);

  const [size35, setSize35] = useState(false);
  const [size36, setSize36] = useState(false);
  const [size37, setSize37] = useState(false);
  const [size38, setSize38] = useState(false);
  const [size39, setSize39] = useState(false);
  const [size40, setSize40] = useState(false);
  const [size41, setSize41] = useState(false);
  const [size42, setSize42] = useState(false);
  const [size43, setSize43] = useState(false);

  async function fetchData(url: string) {
    try {
      const response = await axios.get(url);
      setSneakers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching : ", error.massage);
    }
  }
  useEffect(() => {
    const url = "https://1a1752655ec9a214.mokky.dev/sneakers";
    fetchData(url);
  }, []);

  const filter = () => {
    let gender = "";
    let sizes = "";

    if (man && !woman) {
      gender = "&gender=Мужской";
    } else if (!man && woman) {
      gender = "&gender=Женский";
    }

    if (size35) {
      sizes += "&sizes[]=35";
    }
    if (size36) {
      sizes += "&sizes[]=36";
    }
    if (size37) {
      sizes += "&sizes[]=37";
    }
    if (size38) {
      sizes += "&sizes[]=38";
    }
    if (size39) {
      sizes += "&sizes[]=39";
    }
    if (size40) {
      sizes += "&sizes[]=40";
    }
    if (size41) {
      sizes += "&sizes[]=41";
    }
    if (size42) {
      sizes += "&sizes[]=42";
    }
    if (size43) {
      sizes += "&sizes[]=43";
    }

    const url =
      "https://1a1752655ec9a214.mokky.dev/sneakers?price[from]=" +
      min +
      "&price[to]=" +
      max +
      gender +
      sizes;
    fetchData(url);
  };

  return (
    <>
      <div className={style.nav}>
        <Link to="/">Главная страница</Link>
      </div>
      <h3>Каталог</h3>
      <div className={style.container}>
        <div className={style.form}>
          <div className={style.filter}>
            <h2>Подбор по параметрам</h2>
            <h3>Цена: руб.</h3>
            <div className={style.price}>
              <div>{min}</div>
              <div>{max}</div>
            </div>
            <Nouislider
              range={{ min: 1850, max: 27999 }}
              start={[1850, 27999]}
              connect
              onUpdate={(slider) => {
                setMin(Number(slider[0]));
                setMax(Number(slider[1]));
              }}
            />
          </div>
          <h3>Пол</h3>
          <br />
          <div className={style.gender}>
            <div>
              <input
                type="checkbox"
                checked={man}
                onChange={() => setMan(!man)}
              />
              мужская
            </div>
            <div>
              <input
                type="checkbox"
                checked={woman}
                onChange={() => setWoman(!woman)}
              />
              женская
            </div>
          </div>
          <div className={style.size}>
            <div className={style.size_box}>
              <input
                type="checkbox"
                checked={size35}
                onChange={() => setSize35(!size35)}
              />
              35
            </div>
            <div className={style.size_box}>
              <input
                type="checkbox"
                checked={size36}
                onChange={() => setSize36(!size36)}
              />
              36
            </div>
            <div className={style.size_box}>
              <input
                type="checkbox"
                checked={size37}
                onChange={() => setSize37(!size37)}
              />
              37
            </div>
            <div className={style.size_box}>
              <input
                type="checkbox"
                checked={size38}
                onChange={() => setSize38(!size38)}
              />
              38
            </div>
            <div className={style.size_box}>
              <input
                type="checkbox"
                checked={size39}
                onChange={() => setSize39(!size39)}
              />
              39
            </div>
            <div className={style.size_box}>
              <input
                type="checkbox"
                checked={size40}
                onChange={() => setSize40(!size40)}
              />
              40
            </div>
            <div className={style.size_box}>
              <input
                type="checkbox"
                checked={size41}
                onChange={() => setSize41(!size41)}
              />
              41
            </div>
            <div className={style.size_box}>
              <input
                type="checkbox"
                checked={size42}
                onChange={() => setSize42(!size42)}
              />
              42
            </div>
            <div className={style.size_box}>
              <input
                type="checkbox"
                checked={size43}
                onChange={() => setSize43(!size43)}
              />
              43
            </div>
          </div>
          <button onClick={filter}>Применить фильтры</button>
        </div>
        <div className={style.cart}>
          <h2>Корзина</h2>
          {!showModal && <button onClick={toggle}>
          <span className={style.productsCount}>{cartItems.length}</span>
          <img src={shoppingCart} className={style.shoppingCart} alt="" /></button>}
        </div>
        <div className={style.cards}>
          {sneakers &&
            sneakers.map((item) => (
              <div className={style.card} key={item.id}>
                <img src={item.imgUrl} alt="" />
                <h2>{item.title}</h2>
                <h2>Размеры:</h2>
                {item.sizes.map((size) => (
                  <span key={size}> ({size})</span>
                ))}
                <h4>
                  Старая цена: <br></br>
                  {item.oldPrice} ₽
                </h4>
                <h3>
                  Новая цена: <br></br>
                  {item.price} ₽
                </h3>
                <div className={style.card_button}>
                  <button onClick={() => navigate("/card_page" + "/" + item.id)}>
                  Посмотреть
                </button>
                <button onClick={() => addToCart(item)}>Добавить в корзину</button>
                </div>
              </div>
            ))}
        </div>
        <Cart showModal={showModal} toggle={toggle} />
      </div>
    </>
  );
};

export default Products;
