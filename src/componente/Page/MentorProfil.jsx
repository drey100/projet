import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getMentorData } from "../../services/authService";
// utiliser cette fonction !

const MentorProfil = () => {
  const navigate = useNavigate();
  const [mentorData, setMentorData] = useState(null);

  useEffect(() => {
    const fetchMentorData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const data = await getMentorData(); // <-- Utiliser la fonction importée
        setMentorData(data);
      } catch (error) {
        console.error(error);
        navigate('/login');
      }
    };

    fetchMentorData();
  }, [navigate]);

  if (!mentorData) {
    return <p>Chargement...</p>;
  }

  const name = `${mentorData.firstname} ${mentorData.lastname}`;

  return (
    <div className="dashboard-container py-5 text-center">
      <h1 className="fw-bold mb-3">
        Bienvenue, Mentor {name} 👋
      </h1>
      <p className="lead text-muted mb-4">
        Heureux de vous retrouver <strong>Mentor</strong>.<br />
      </p>

      <img
        src="https://img.freepik.com/free-vector/handshake-concept-illustration_114360-3605.jpg"
        alt="Welcome"
        className="img-fluid rounded shadow mb-5"
        style={{ maxWidth: '450px' }}
      />

      <div className="d-flex justify-content-center gap-3 flex-wrap">
        <Link to="/dashboard" className="btn btn-outline-primary btn-lg">
          Accueil
        </Link>

        <Link to="/logout" className="btn btn-danger btn-lg">
          Se Déconnecter
        </Link>
      </div>
    </div>
  );
};

export default MentorProfil;
