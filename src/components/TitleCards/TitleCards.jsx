import React, { useEffect, useRef } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards-data.js";

export default function TitleCards() {
  /* to make cards scroll */
  const cardsRef = useRef();

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="titlecards">
      <h1 className="titlecards-title">Popolari su Netflix</h1>
      <ul className="titlecards-container" ref={cardsRef}>
        {cards_data.map((card, index) => {
          return (
            <li key={index}>
              <a className="titlecards-card" href={`#${card.name}`}>
                <img
                  className="card-img"
                  src={card.image}
                  alt={card.name}
                  title={card.name}
                />
                <p>{card.name}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
