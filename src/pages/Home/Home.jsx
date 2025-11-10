import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "/hero-banner.jpg";
import hero_title from "../../assets/hero-title.png";
import play_icon from "../../assets/play-icon.png";
import info_icon from "../../assets/info-icon.png";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img
          className="hero-banner"
          src={hero_banner}
          alt="home serie's wallpaper"
          title="home serie's wallpaper"
        />
        <div className="hero-main_container">
          <img
            className="hero-title"
            src={hero_title}
            alt="hero serie's title"
            title="hero serie's title"
          />
          <p className="hero-description">
            Scoprendo i suoi legami con un antico ordine segreto, un giovane
            uomo che vive nella moderna Istanbul intraprende una missione per
            salvare la città da un nemico immortale.
          </p>
          <div className="hero-buttons">
            <a
              className="hero-button_play"
              href="#riproduci"
              aria-label="Press to play"
            >
              <img
                className="play-icon"
                src={play_icon}
                alt="play icon"
                title="play icon"
              />
              Riproduci
            </a>
            <a
              className="hero-button_info"
              href="#more-info"
              aria-label="Press for more info"
            >
              <img
                className="info-icon"
                src={info_icon}
                alt="info icon"
                title="info icon"
              />
              Altre info
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
