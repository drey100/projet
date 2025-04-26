import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-md-left">
        <div className="row text-md-left">
          
        
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Mon Mentor</h5>
            <p>
              Plateforme d'inscription et de connexion pour apprendre, partager et se connecter avec la communauté.
            </p>
          </div>

         
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Liens</h5>
            <p><Link to="/" className="text-white text-decoration-none">Accueil</Link></p>
            <p><Link to="/inscription" className="text-white text-decoration-none">Inscription</Link></p>
            <p><Link to="/login" className="text-white text-decoration-none">Connexion</Link></p>
            <p><Link to="/contact" className="text-white text-decoration-none">Contact</Link></p>
          </div>

         
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
            <p><i className="fas fa-home mr-3"></i> Parakou, Bénin</p>
            <p><i className="fas fa-envelope mr-3"></i> monmentor@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i>+229 019 599 3050</p>
          </div>

        
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Suivez-nous</h5>
            <div>
              <a href="#!" className="text-white me-4"><i className="fab fa-facebook-f"></i></a>
              <a href="#!" className="text-white me-4"><i className="fab fa-twitter"></i></a>
              <a href="#!" className="text-white me-4"><i className="fab fa-instagram"></i></a>
              <a href="#!" className="text-white me-4"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>

        <hr className="mb-4" />

      
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p>© {new Date().getFullYear()} MonMentor. Tous droits réservés.</p>
          </div>
          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-end">
              <a href="#top" className="text-white text-decoration-none">Retour en haut ↑</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;