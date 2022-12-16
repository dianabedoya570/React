import React from "react";
import "../../assets/css/card.css";

export default function Card({personaje}) {
  return (
    <div className="card">
      <img
        id="card__img"
        src={personaje.image}
      />
      <p id="card__name">{personaje.name}</p>
      <p id="card_lastLocation">Last Location </p>
      <p id="card__location">{personaje.location.name} </p>
    </div>
  );
}
