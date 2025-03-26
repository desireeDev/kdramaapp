import React from "react";
import "./App.css";
import logo from "./img/logo.png"; // Remplace avec ton image

function App() {
  return (
    <div className="container">
      {/* En-tête avec le bouton Login */}
      <header className="header">
        <p className="login-text">Already have an account ?</p>
        <button className="login-btn">Login</button>
      </header>

      <div className="main-content">
        {/* Section Gauche */}
        <div className="left-section">
          <img src={logo} alt="Quizkarooo Logo" className="logo" />
          <h1 className="app-title">QuizlandApp</h1>
          <p className="tagline">Take a Quiz be more creative in your work</p>
        </div>

        {/* Section Droite */}
        <div className="right-section">
          <h2 className="welcome-title">Welcome to QuizlandApp</h2>
          <p className="subtitle">Register your account</p>

          <form className="auth-form">
            <div className="form-group">
              <label htmlFor="name">Enter Name</label>
              <input type="text" id="name" placeholder="Kim so yeon" />
            </div>
            <div className="form-group">
              <label htmlFor="pseudo">Entrez votre pseudo</label>
              <input type="text" id="pseudo" placeholder="Kimy" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Enter Email</label>
              <input type="email" id="email" placeholder="kimsoyeoan@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Enter Password</label>
              <input type="password" id="password" placeholder="••••••••" />
            </div>

            <button type="submit" className="signup-btn">Sign Up</button>

            <div className="social-auth">
              <p>Create account with</p>
              <div className="social-icons">
                <button className="social-btn">F</button>
                <button className="social-btn">In</button>
                <button className="social-btn">G</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
