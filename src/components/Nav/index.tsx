import { Link } from "react-router-dom";
import style from "./style.module.css"

const Nav = () => {
    return (
        <nav className={style.container}>
                <Link to="/catalog">Каталог</Link>
                <Link to="/about">О нас</Link>
                <Link to="/quiz">Подбор товара</Link>
                <Link to="/team">Наша команда</Link>
                <Link to="/">Доставка и оплата</Link>
                <Link to="/">Контакты</Link>
        </nav>
    );
};

export default Nav;