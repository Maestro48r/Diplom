import { FC } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import useLocalStorageState from "use-local-storage-state";

const Nav: FC = () => {



  return (
    <>
      <nav className={style.container}>
        <Link to="/products">Каталог</Link>
        <Link to="/about">О нас</Link>
        <Link to="/quiz">Подбор товара</Link>
        <Link to="/team">Наша команда</Link>
        <Link to="/">Доставка и оплата</Link>
        <Link to="/contacts">Контакты</Link>
      </nav>
    </>
  );
};

export default Nav;
