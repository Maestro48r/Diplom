import { Link } from "react-router-dom";
import style from "./style.module.css";

const Checkout = () => {

  return (
    <div className={style.container}>
        <button><Link to="/">Главная</Link></button>
      <form className={style.checkout_form}>
        <h2>Оформление заказа</h2>
        <h3>Введите свои данные</h3>
        <div className={style.form_group}>
          <label htmlFor="name">Имя</label>
          <input type="text" id="name" name="name" required placeholder="Имя" />
        </div>
        <div className={style.form_group}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required placeholder="Email" />
        </div>
        <div className={style.form_group}>
          <label htmlFor="phone">Номер телефона</label>
          <input type="tel" id="phone" name="phone" required placeholder="+7 999 999 99 99" />
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default Checkout;
