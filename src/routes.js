import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";  // Page d'accueil (inscription)
import Login from "./pages/Login"; // Page de connexion

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />  {/* Page principale */}
      <Route path="/login" element={<Login />} />  {/* Page de connexion */}
    </Routes>
  );
}

export default AppRoutes;
