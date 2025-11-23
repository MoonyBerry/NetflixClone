import "./Player.css";
import go_back from "../../assets/back-arrow-icon.png";
import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Player() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

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
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img
        onClick={() => {
          navigate(-2);
        }}
        className="player-goback"
        src={go_back}
        alt="go back arrow icon"
        title="go back arrow icon"
      />

      <iframe
        className="player-trailer"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="trailer"
      ></iframe>
      <div className="player-info_container">
        <p className="player-info">
          {apiData.published_at.slice(0, 10) || "Nessuna data trovata"}
        </p>
        <p className="player-info">{apiData.name || "Nessun titolo trovato"}</p>
        <p className="player-info">{apiData.typeof || "Nessun tipo trovato"}</p>
      </div>
    </div>
  );
}
