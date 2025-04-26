import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="container text-center py-5">
      <h2 className="display-4 fw-bold mb-3">Bienvenue sur <span className="text-primary">Mon Mentor</span></h2>
      <p className="lead text-muted mb-4">
        Trouvez un mentor adapté à vos besoins professionnels ou académiques.
      </p>

      <img
        src="https://img.freepik.com/free-vector/online-courses-tutorials_52683-37860.jpg"
        alt="Mentoring"
        className="img-fluid rounded mb-4 shadow-sm"
        style={{ maxHeight: '350px' }}
      />

      <div className="mb-5">
        <Link to="/inscription" className="btn btn-primary btn-lg mx-2">
          Rejoindre maintenant
        </Link>
        <Link to="/login" className="btn btn-outline-primary btn-lg mx-2">
          Se connecter
        </Link>
      </div>

      <div className="row mt-5">
        <div className="col-md-4 mb-4">
          <h5><i className="bi bi-people-fill me-2"></i>Communauté de Mentors</h5>
          <p>Des experts de tous horizons prêts à vous accompagner.</p>
        </div>
        <div className="col-md-4 mb-4">
          <h5><i className="bi bi-lightbulb-fill me-2"></i>Développement Personnel</h5>
          <p>Améliorez vos compétences, atteignez vos objectifs plus rapidement.</p>
        </div>
        <div className="col-md-4 mb-4">
          <h5><i className="bi bi-clock-fill me-2"></i>Flexibilité</h5>
          <p>Choisissez un mentor selon votre emploi du temps.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
