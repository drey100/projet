import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Utilisateur = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    if (storedUser) {
      setUser(storedUser);
    } else {
      navigate('/login'); // Redirige si non connecté
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) {
    return <div>Chargement...</div>; // Petit écran de chargement
  }

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">
        {user.role === 'mentor' ? 'Profil Mentor' : 'Profil Utilisateur'}
      </h1>

      <div className="card shadow">
        <div className="card-body">
          <h4 className="card-title">Informations</h4>
          <p className="card-text"><strong>Nom:</strong> {user.firstName} {user.lastName}</p>
          <p className="card-text"><strong>Email:</strong> {user.email}</p>
          <p className="card-text"><strong>Rôle:</strong> {user.role}</p>

          <div className="d-flex justify-content-between">
            <button
              className="btn btn-primary"
              onClick={() => navigate('/edit-profile')}
            >
              Modifier mes informations
            </button>

            <button
              className="btn btn-danger"
              onClick={handleLogout}
            >
              Se déconnecter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Utilisateur;
