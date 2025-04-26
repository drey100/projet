import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const navigate = useNavigate();

  // Initialiser l'état de l'utilisateur
  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  // Récupérer les informations de l'utilisateur depuis le localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    } else {
      navigate('/login'); // Si l'utilisateur n'est pas connecté, rediriger vers la page de login
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Sauvegarder les modifications dans le localStorage
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/profil'); // Rediriger vers la page de profil après l'édition
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Modifier mes informations</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Sauvegarder</button>
      </form>
    </div>
  );
};

export default EditProfile;
