import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import { Link } from "react-router";

export default function TitleCards({ title, films }) {
  const [apiData, setApiData] = useState([]);

  /* to make cards scroll */
  const cardsRef = useRef();

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmNkNjE4NTFiNDhmNGNkNTg1YWNhYzIxMmM4ZjcyNiIsIm5iZiI6MTc2MzA0ODI0NC45MzI5OTk4LCJzdWIiOiI2OTE1ZmIzNGQyY2Q0ZTU3MTc0MGUyNTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zTCn-1a0JSJtO9tbnACwv09kR6drAdV-md37QDBeFE8",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${films}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results || []))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="titlecards">
      <h1 className="titlecards-title">{title}</h1>
      <ul className="titlecards-container" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`}>
              <li key={index}>
                <a className="titlecards-card" href={`#${card.original_title}`}>
                  <img
                    className="card-img"
                    src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                    alt={card.original_title}
                    title={card.original_title}
                  />
                  <p>{card.original_title}</p>
                </a>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
