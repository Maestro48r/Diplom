import { Link } from "react-router-dom";
import style from "./style.module.css";

const Contacts = () => {
  return (
    <>
    <div className={style.nav}><Link to="/">Главная страница</Link></div>
    <div className={style.container}>
      <div className={style.contact}>
        <h2> Контакты:</h2>
        <p>Главный офис</p>
        <h2>+7 800 789 89 89</h2>
        <span>г. Липецк, проспект Победы, 19А</span>
        <p>Отдел продаж</p>
        <h2>+7 800 789 89 89</h2>
        <span>г. Липецк, проспект Победы, 19А</span>
      </div>
      <div className={style.map}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A6bab9a6b1ef1fe56fbda6fe57ba5b008b2b0ecedd90a7841696e4d92283f8f54&amp;source=constructor"
          width="600"
          height="500"
          
        ></iframe>
      </div>
    </div>
    </>
  );
};

export default Contacts;
