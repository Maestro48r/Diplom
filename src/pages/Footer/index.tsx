import style from "./style.module.css";
import Nav from "../../components/Nav";
import Logo from "../../components/Logo/Logo";

const Footer = () => {
    return (
<div className={style.container}>
    <Logo />
    <Nav />
</div>
    )
}

export default Footer;