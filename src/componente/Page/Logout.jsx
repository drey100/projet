import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearUserData } from "../../services/authService"; // Utilise clearUserData au lieu de saveUserData

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Suppression des données utilisateur
    clearUserData();
    // Redirection vers la page de login
    navigate('/login');
  }, [navigate]);

  return null; // Pas d'affichage, juste une redirection
};

export default Logout;
