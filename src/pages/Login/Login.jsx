import "./Login.css";
import background from "../../assets/background-banner.jpg";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router";

export default function Login() {
  let [signIn, setSignIn] = useState("Accedi");

  return (
    <div className="login">
      <div className="login-overlay"></div>
      <img className="login-background" src={background} />
      <div className="login-logo">
        <img src={logo} alt="netflix logo" title="netflix logo" />
      </div>
      <form className="login-form">
        <h1 className="login-form_title">{signIn}</h1>
        {signIn === "Accedi" ? (
          <></>
        ) : (
          <input
            className="login-form_input"
            id="name"
            type="text"
            name="name"
            placeholder="Nome"
          />
        )}
        <input
          className="login-form_input"
          id="email"
          type="email"
          name="email"
          placeholder="E-mail"
        />
        <input
          className="login-form_input"
          id="password"
          type="password"
          name="password"
          placeholder="Password"
        />
        <Link to="/">
          <button
            className="login-form_button"
            type="button"
            role="invia il form"
          >
            {signIn === "Accedi" ? "Accedi" : signIn}
          </button>
        </Link>
        <div className="login-form_wrapper">
          <div>
            <input id="ricordami" type="checkbox" name="ricordami" />
            <label htmlFor="ricordami">Ricordami</label>
          </div>
          <a href="#assistenza">Serve Aiuto?</a>
        </div>
        <div className="form-switcher">
          {signIn === "Accedi" ? (
            <p>
              Non hai un account?
              <span
                onClick={() => {
                  setSignIn("Registrati");
                }}
              >
                Registrati!
              </span>
            </p>
          ) : (
            <p>
              Hai già un account?{" "}
              <span
                onClick={() => {
                  setSignIn("Accedi");
                }}
              >
                Accedi!
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
