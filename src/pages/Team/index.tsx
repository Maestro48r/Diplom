import style from "./style.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Team = () => {
  const [teams, setTeams] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://1a1752655ec9a214.mokky.dev/team"
        );
        setTeams(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching : ", error.massage);
      }
    }
    fetchData();
  }, []);
  return (
    <>
    <div className={style.nav}><Link to="/">Главная страница</Link></div>
      <h3>Наша команда</h3>
      <div className={style.container}>
      {teams &&
        teams.map((item) => (
          <div className={style.card} key={item.id}>
            <img src={item.imgUrl} alt="" />
            <h2>{item.name}</h2>
            <h3>{item.role}</h3>
        </div>
        ))}
      </div>
    </>
  )
};

export default Team;
