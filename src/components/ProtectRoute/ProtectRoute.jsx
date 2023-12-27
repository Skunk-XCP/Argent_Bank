import React from "react";
import { Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Composant pour protéger les routes
const ProtectRoute = ({ children }) => {
   // Utilise useSelector pour accéder à l'état d'auth du store Redux
   const auth = useSelector((state) => state.auth.isAuthenticated);
   return auth ? (
      // Rend les composants enfants si authentifié
      <Routes>{children}</Routes>
   ) : (
      // Redirige vers la page de connexion si non authentifié
      <Navigate to="/signin" replace />
   );
};

export default ProtectRoute;
