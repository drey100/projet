import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditMentor = () => {
  const navigate = useNavigate();

  // Récupération des données du mentor à partir du localStorage
  const [mentor, setMentor] = useState({
    name: '',
    email: '',
    expertise: '',
    bio: '',
  });

  // Charger les données utilisateur (et vérifier le rôle mentor)
  useEffect(() => {
    const storedMentor = JSON.parse(localStorage.getItem('user'));
    if (storedMentor && storedMentor.role === 'mentor') {
      setMentor({
        name: `${storedMentor.firstName} ${storedMentor.lastName}`,
        email: storedMentor.email,
        expertise: storedMentor.expertise || '',
        bio: storedMentor.bio || '',
      });
    } else {
      navigate('/login'); // Rediriger si l'utilisateur n'est pas un mentor
    }
  }, [navigate]);

  // Handler pour la mise à jour des informations du mentor
  const handleChange = (e) => {
    const { id, value } = e.target;
    setMentor((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!mentor.expertise || !mentor.bio) {
      toast.warning('Veuillez remplir tous les champs.');
      return;
    }

    // Mettre à jour les données dans le localStorage
    const storedMentor = JSON.parse(localStorage.getItem('user'));
    storedMentor.expertise = mentor.expertise;
    storedMentor.bio = mentor.bio;

    localStorage.setItem('user', JSON.stringify(storedMentor));

    toast.success('Vos informations ont été mises à jour avec succès!');
    navigate('/profil'); // Rediriger vers le profil après la mise à jour
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Modifier Profil Mentor</h1>

      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="form-label" htmlFor="expertise">
                Expertise
              </label>
              <input
                type="text"
                id="expertise"
                className="form-control"
                value={mentor.expertise}
                onChange={handleChange}
                placeholder="Entrez votre expertise"
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label" htmlFor="bio">
                Biographie
              </label>
              <textarea
                id="bio"
                className="form-control"
                value={mentor.bio}
                onChange={handleChange}
                placeholder="Entrez votre biographie"
                rows="4"
                required
              />
            </div>

            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-primary">
                Sauvegarder les modifications
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate('/profil')}
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default EditMentor;