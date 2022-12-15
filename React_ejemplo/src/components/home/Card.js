import React from "react";
import "../../assets/css/card.css";

export default function Card() {
  return (
    <div className="card">
      <img
        id="card__img"
        src="https://es.web.img3.acsta.net/pictures/18/10/31/17/34/2348073.jpg"
      />
      <p id="card__name">nombre</p>
      <p id="card_lastLocation">Last Location </p>
      <p id="card__location">ubicacion Aqui </p>
    </div>
  );
}
