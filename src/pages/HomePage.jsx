import React from "react";
import "./HomePage.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import logo from "../img/logo.png"; // Remplace avec ton image


function HomePage() {
  return (
   
    <div className="container">
      {/* En-tête avec le bouton Login */}
      <header className="header">
        <p className="login-text">Already have an account ?</p>
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      </header>

      <div className="main-content">
        {/* Section Gauche */}
        <div className="left-section">
          <img src={logo} alt="Quizkarooo Logo" className="logo" />
          <h1 className="app-title">Plongez dans l’univers des K-Dramas !</h1>
          <p className="tagline">Comme dirait Kim Shin dans Goblin : "Every moment I spent with you... was brilliant.</p>
        </div>

        {/* Section Droite */}
        <div className="right-section">
          <h2 className="welcome-title">Bienvenue dans KQuizland</h2>
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

export default HomePage;
