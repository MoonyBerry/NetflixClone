import React from "react";
import "./Navbar.css";
import logo from "../../assets/netflix-logo.svg";
import profile_icon from "../../assets/netflix-profile-icon.webp";

export default function Navbar() {
  return (
    <nav className="main-navbar" role="navigation">
      <div className="navbar-left">
        <img
          className="netflix-logo"
          src={logo}
          alt="netflix logo"
          title="netflix logo"
        />
        <ul className="nav-links-list">
          <li>
            <a className="nav-link" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="#serie">
              Serie
            </a>
          </li>
          <li>
            <a className="nav-link" href="#film">
              Film
            </a>
          </li>
          <li>
            <a className="nav-link" href="#nuovi-popolari">
              Nuovi e popolari
            </a>
          </li>
          <li>
            <a className="nav-link" href="#mia-lista">
              La mia lista
            </a>
          </li>
          <li>
            <a className="nav-link" href="#sfoglia">
              Sfoglia per lingua
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <i className="fa-solid fa-magnifying-glass"></i>
        <p>Bambini</p>
        <i className="fa-regular fa-bell"></i>
        <div className="navbar-dropdown-profile">
          <img
            className="profile-icon"
            src={profile_icon}
            alt="user profile"
            title="user profile"
          />
          <i className="fa-solid fa-caret-down"></i>
          <div className="dropdown-menu">
            <ul className="dropdown-content">
              <li>
                <a className="dropdown-link" href="#profili">
                  <i className="fa-solid fa-pencil"></i>Gestisci i profili
                </a>
              </li>
              <li>
                <a className="dropdown-link" href="#account">
                  <i className="fa-solid fa-user"></i>Account
                </a>
              </li>
              <li>
                <a className="dropdown-link" href="#assistenza">
                  <i className="fa-regular fa-circle-question"></i>Centro
                  assistenza
                </a>
              </li>
            </ul>
            <a className="netflix-logout" href="#logout">
              Esci da Netflix
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
