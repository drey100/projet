import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserData } from "../../services/authService";


const Profil = () => {
  const [userName, setUserName] = useState('Utilisateur');

  useEffect(() => {
    const user = getUserData();
    if (user) {
      setUserName(`${user.firstName} ${user.lastName}`);
    }
  }, []);

  return (
    <div className="dashboard-container py-5 text-center">
      <h1 className="fw-bold mb-3">Bienvenue, {userName} 👋</h1>
      <p className="lead text-muted mb-4">
        Heureux de vous revoir <strong>{userName}</strong>.<br />
      </p>

      <img
        src="https://img.freepik.com/free-vector/user-profile-concept-illustration_114360-2244.jpg"
        alt="User Welcome"
        className="img-fluid rounded shadow mb-5"
        style={{ maxWidth: '450px' }}
      />

      <div className="d-flex justify-content-center gap-3 flex-wrap">
        <Link to="/Utilisateur" className="btn btn-outline-primary btn-lg">
          Mon Profil
        </Link>

        <Link to="/Mentor" className="btn btn-outline-success btn-lg">
          Trouver un Mentor
        </Link>

        <Link to="/logout" className="btn btn-danger btn-lg">
          Se Déconnecter
        </Link>
      </div>
    </div>
  );
};

export default Profil;
