import Header from "../../components/Header";
import About from "../About";
import Products from "../Products";
import Quiz from "../Quiz";
import Team from "../Team";
import style from "./style.module.css";
import Faq from "../Faq";
import Contacts from "../Contacts";
import Questions from "../Questions";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className={style.home_container}>
        <Products />
        <About />
        <Quiz />
        <Team />
        <Faq />
        <Contacts />
        <Questions/>
        <Footer />
      </div>
      ;
    </>
  );
};

export default Home;
