import { useState } from "react";
import style from "./style.module.css";
import Example from "../../components/Exemple";

const Faq = () => {

    
    return (
        <>
        <div className={style.container}>
        <h2>Часто задаваемые вопросы</h2>
        <hr />
        <br />
        <Example />
        </div>
        </>
    )
};

export default Faq;