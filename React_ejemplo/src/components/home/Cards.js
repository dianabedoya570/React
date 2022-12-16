import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import "../../assets/css/cards.css";

export default function Cards() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((res) => {
      setCharacters(res.data.results);
    });
  });

  return (
    <div className="main">
     <h1>Characters</h1><br/>
     <section className="cards_container">
      
      {characters.map((personajeAct, pos) => {
        return <Card personaje={personajeAct} />;
      })}
    </section>
    </div>
  );
}
