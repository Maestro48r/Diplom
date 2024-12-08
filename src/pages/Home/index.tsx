import Header from "../../components/Header";
import About from "../About";
import Catalog from "../Catalog";
import Quiz from "../Quiz";
import Team from "../Team";
import style from "./style.module.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className={style.home_container}>
        <Catalog />
        <About />
        <Quiz />
        <Team />
      </div>
      ;
    </>
  );
};

export default Home;
