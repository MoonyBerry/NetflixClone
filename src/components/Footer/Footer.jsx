import React from "react";
import "./Footer.css";
import facebook_icon from "../../assets/facebook-icon.png";
import instagram_icon from "../../assets/instagram-icon.png";
import twitter_icon from "../../assets/twitter-icon.png";
import youtube_icon from "../../assets/youtube-icon.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-contacts">
        <a href="https://www.facebook.com/netflixitalia/" target="_blank">
          <img src={facebook_icon} alt="facebook" title="facebook" />
        </a>
        <a href="https://www.instagram.com/NetflixIT/#" target="_blank">
          <img src={instagram_icon} alt="instagram" title="instagram" />
        </a>
        <a href="https://x.com/NetflixIT" target="_blank">
          <img src={twitter_icon} alt="twitter" title="twitter" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCi_T2R1AzOCun4-PI4Or2ng"
          target="_blank"
        >
          <img src={youtube_icon} alt="youtube" title="youtube" />
        </a>
      </div>
      <ul className="footer-list">
        <li>
          <a href="#audiodescrizione" className="footer-item">
            Audiodescrizione
          </a>
        </li>
        <li>
          <a href="#assistenza" className="footer-item">
            Centro assistenza
          </a>
        </li>
        <li>
          <a href="#giftcard" className="footer-item">
            Carte regalo
          </a>
        </li>
        <li>
          <a href="#media" className="footer-item">
            Media Center
          </a>
        </li>
        <li>
          <a href="#investor" className="footer-item">
            Rapporti con gli investitori
          </a>
        </li>
        <li>
          <a href="#lavoraconnoi" className="footer-item">
            Opportunità di lavoro
          </a>
        </li>
        <li>
          <a href="#condizioni" className="footer-item">
            Condizioni di utilizzo
          </a>
        </li>
        <li>
          <a href="#privacy" className="footer-item">
            Privacy
          </a>
        </li>

        <li>
          <a href="#notelegali" className="footer-item">
            Note legali
          </a>
        </li>
        <li>
          <a href="#cookie" className="footer-item">
            Preferenze per i cookie
          </a>
        </li>
        <li>
          <a href="#infoazienda" className="footer-item">
            Informazioni sull'azienda
          </a>
        </li>
        <li>
          <a href="#contatti" className="footer-item">
            Contattaci
          </a>
        </li>
        <li>
          <a href="#pubblicita" className="footer-item">
            Preferenze per la pubblicità
          </a>
        </li>
      </ul>
      <div className="footer-copyright">© 1997-2025 Netflix, Inc.</div>
    </div>
  );
}
