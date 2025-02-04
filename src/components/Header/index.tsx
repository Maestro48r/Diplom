import Logo from "../Logo/Logo";
import Nav from "../Nav";
import style from "./style.module.css";
import Inform from "../Inform";


const Header = () => {

  return (
    <>
    <header className={style.container}>
      <Logo />
      <Nav />
      <Inform />
    </header>
    </>
  );
};

export default Header;
