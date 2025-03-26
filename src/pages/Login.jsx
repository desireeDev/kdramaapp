import React from "react";
import "./Login.css";
import hangook from "./img/hangook.png"; // Remplace avec ton image

function Login() {
  return (
    <div className="container">
      {/* En-tête avec le bouton Login */}
      <header className="header">
        <p className="login-text">Create an account ?</p>
        <button className="login-btn">Sign up</button>
      </header>

      <div className="main-content">
        {/* Section Gauche */}
        <div className="left-section">
          <img src={hangook} alt="Quizkarooo Logo" className="hangook" />
          <h1 className="app-title">QuizlandApp</h1>
          <p className="tagline">Take a Quiz be more creative in your work</p>
        </div>
        {/* Section Droite */}
        <div className="right-section">
          <h2 className="welcome-title">Welcome to QuizlandApp</h2>
          <p className="subtitle">Login and start quizz</p>

          <form className="auth-form">
            <div className="form-group">
              <label htmlFor="pseudo">Entrez votre pseudo</label>
              <input type="text" id="pseudo" placeholder="Kimy" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Enter Password</label>
              <input type="password" id="password" placeholder="••••••••" />
            </div>

            <button type="submit" className="signup-btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
