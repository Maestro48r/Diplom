import style from "./style.module.css";
import image1 from "../../Media/1gt2.jpeg";
import image2 from "../../Media/2yt2.jpeg";
import image3 from "../../Media/3gt2.jpeg";
import image4 from "../../Media/4re2.jpeg";
import image5 from "../../Media/6tr2.jpeg";
import { useState } from "react";

const Questions = () => {

    const [ name, setName ] = useState('');
    const [ phone, setPhone] = useState('')

    return (
        <>
                <div className={style.container}>
                    <div className={style.form}>
                    <h2>Есть вопросы?</h2>
            <p>Заполните форму и наш менеджер свяжется с вами</p>
            <form action="" method="post">
<input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} placeholder="Ваше имя" />
<input type="tel" id="phone" name="phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Номер телефона" />
<button type="submit">Отправить</button>
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