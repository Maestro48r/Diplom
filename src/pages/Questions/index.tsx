import style from "./style.module.css";
import image1 from "../../Media/1gt2.jpeg";
import image2 from "../../Media/2yt2.jpeg";
import image3 from "../../Media/3gt2.jpeg";
import image4 from "../../Media/4re2.jpeg";
import image5 from "../../Media/6tr2.jpeg";
import { FormEvent } from "react";

const Questions = () => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
event.preventDefault();
const form = new FormData (event.currentTarget);
const data = Object.fromEntries(form);
const postData = async () => {
    const reg = await fetch(`https://1a1752655ec9a214.mokky.dev/users`, {
        method: "POST",
        body: JSON.stringify(data),
    });
};
postData();
console.log(data);
    };

    return (
        <>
                <div className={style.container}>
                    <div className={style.form}>
                    <h2>Есть вопросы?</h2>
            <p>Заполните форму и наш менеджер свяжется с вами</p>
            <form onSubmit={handleSubmit}>
<label>Имя <input type="text" name="user_name" /></label>
<label>Номер телефона <input type="tel" name="user_phone" placeholder="+7-000-000-00-00" /></label>
<input type="submit" />
            </form>
                    </div>
 <div className={style.insta}>
 <h2>В контакте</h2>
 <div className={style.foto}>
<div className={style.foto_1}><img src={image1} alt="" /></div>
<div className={style.foto_2}><img src={image2} alt="" /></div>
<div className={style.foto_5}><img src={image5} alt="" /></div>
<div className={style.foto_3}><img src={image3} alt="" /></div>
<div className={style.foto_4}><img src={image4} alt="" /></div>
 </div>
 </div>


        </div>
        </>


    )
};

export default Questions;