import "./Navbar.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search-icon.svg";
import notification from "../../assets/bell-icon.svg";
import caret_down from "../../assets/caret-icon.svg";
import profile_icon from "../../assets/profile-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faUser, faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

export default function Navbar() {
  return (
    /* NAVBAR */
    <nav className="navbar" role="navigation">
      {/* -------------------NAVBAR LEFT SIDE------------------- */}
      <div className="navbar-left">
        <img
          className="navbar-logo"
          src={logo}
          alt="netflix logo"
          title="netflix logo"
        />
        <ul className="navbar-links_list">
          <li>
            <a className="navbar-link" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="navbar-link" href="#serie">
              Serie
            </a>
          </li>
          <li>
            <a className="navbar-link" href="#film">
              Film
            </a>
          </li>
          <li>
            <a className="navbar-link" href="#nuovi-popolari">
              Nuovi e popolari
            </a>
          </li>
          <li>
            <a className="navbar-link" href="#mia-lista">
              La mia lista
            </a>
          </li>
          <li>
            <a className="navbar-link" href="#sfoglia">
              Sfoglia per lingua
            </a>
          </li>
        </ul>

        {/* -------------------NAVBAR MENU SFOGLIA------------------- */}
        <div className="navbar-sfoglia_container">
          <p>Sfoglia</p>
          <img
            className="navbar-caret_down"
            src={caret_down}
            alt="caret_down"
            title="caret_down"
          />
          <div className="navbar-dropdown_sfoglia">
            <ul className="navbar-sfoglia_content">
              <li>
                <a className="navbar-sfoglia_link" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="navbar-sfoglia_link" href="#serie">
                  Serie
                </a>
              </li>
              <li>
                <a className="navbar-sfoglia_link" href="#film">
                  Film
                </a>
              </li>
              <li>
                <a className="navbar-sfoglia_link" href="#nuovi-popolari">
                  Nuovi e popolari
                </a>
              </li>
              <li>
                <a className="navbar-sfoglia_link" href="#mia-lista">
                  La mia lista
                </a>
              </li>
              <li>
                <a className="navbar-sfoglia_link" href="#sfoglia">
                  Sfoglia per lingua
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* -------------------NAVBAR RIGHT SIDE-------------------*/}
      <div className="navbar-right">
        <img
          className="navbar-search"
          src={search}
          alt="search"
          title="search"
        />
        <p>Bambini</p>
        <img
          className="navbar-notification"
          src={notification}
          alt="notification"
          title="notification"
        />
        {/* -------------------NAVBAR RIGHT SIDE DROPDOWN MENU-------------------*/}
        <div className="navbar-dropdown_container">
          <img
            className="navbar-profile_icon"
            src={profile_icon}
            alt="user profile"
            title="user profile"
          />
          <img
            className="navbar-caret_down"
            src={caret_down}
            alt="caret_down"
            title="caret_down"
          />
          <div className="navbar-dropdown_menu">
            <ul className="navbar-dropdown_content">
              <li>
                <a className="navbar-dropdown_link" href="#profili">
                  <FontAwesomeIcon
                    className="navbar-dropdown_icon"
                    icon={faPencil}
                  />
                  Gestisci i profili
                </a>
              </li>
              <li>
                <a className="navbar-dropdown_link" href="#account">
                  <FontAwesomeIcon
                    className="navbar-dropdown_icon"
                    icon={faUser}
                  />
                  Account
                </a>
              </li>
              <li>
                <a className="navbar-dropdown_link" href="#assistenza">
                  <FontAwesomeIcon
                    className="navbar-dropdown_icon"
                    icon={faCircleQuestion}
                  />
                  Centro assistenza
                </a>
              </li>
              <li>
                <a className="navbar-logout" href="/login">
                  Esci da Netflix
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
