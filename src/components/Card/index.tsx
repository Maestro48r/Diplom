import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CATALOG_ROUTE from "../../router";

const Card = () => {
  const [sneak, setSneak] = useState(null);
  const params = useParams();
  let sneakId = params.id;

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData(url: string) {
      try {
        const response = await axios.get(url);
        setSneak(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching : ", error.massage);
      }
    }

    const url = "https://1a1752655ec9a214.mokky.dev/sneakers/" + sneakId;
    fetchData(url);
  }, []);

  return (
    <div>
      <button onClick={() => navigate(CATALOG_ROUTE)}>Назад</button>
      Card of {sneakId} sneak
    </div>
  );
};

export default Card;
