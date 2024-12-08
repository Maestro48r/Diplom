import style from "./style.module.css";
import image2 from "../../Media/4f5.jpg";
import image1 from "../../Media/fjy21.jpg";
import image3 from "../../Media/lj76.jpg";
import image4 from "../../Media/gt43.jpg";
import image5 from "../../Media/87gh.jpg";
import image6 from "../../Media/8h7g.jpeg";
import { Link } from "react-router-dom";

const Quiz = () => {
  return (
    <>
    <div className={style.nav}><Link to="/">Главная страница</Link></div>
    <h3>Подбор товара</h3>
    <div className={style.container}>
      <h1>Мы подберем идеальную пару для вас</h1>
      <p>
        Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас
        моделями
      </p>
      <hr />
      <h2>Какой тип кросовок рассматриваете?</h2>
      <form>
        <div>
        <img src={image1} alt="" />
        <label htmlFor="sneak">Кросовки</label>
        <input type="checkbox" id="sneak"/>
        </div>


        <div>
        <img src={image2} alt="" />
        <label htmlFor="cud">Кеды</label>
        <input type="checkbox" />
        </div>

        <div>
        <img src={image3} alt="" />
        <label htmlFor="boot">Ботинки</label>
        <input type="checkbox" />
        </div>

        <div>
        <img src={image4} alt="" />
        <label htmlFor="slates">Сланцы</label>
        <input type="checkbox" />
        </div>

        <div>
        <img src={image5} alt="" />
        <label htmlFor="boots">Бутсы</label>
        <input type="checkbox" />
        </div>

        <div>
        <img src={image6} alt="" />
        <label htmlFor="sandals">Сандалии</label>
        <input type="checkbox" />
        </div>
      </form>
      <hr />
      <button>Следующий шаг</button>
    </div>
    </>
  );
};

export default Quiz;
