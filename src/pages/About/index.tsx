import style from "./style.module.css";
import image from "../../Media/sn1ek.jpeg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
    <div className={style.nav}><Link to="/">Главная страница</Link></div>
      <h3>О нас</h3>
      <div className={style.container}>
        <div>
          <h1>Пара слов о нас</h1>
          <p>
            Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через
            спорт мы можем менять жизни. В том числе с помощью воодушевляющих
            историй спортсменов. Чтобы помочь тебе подняться и двигаться вперед.{" "}
          </p>
          <h2> - SneakMax</h2>
        </div>
        <img src={image} alt="" />
      </div>
    </>
  );
};

export default About;
