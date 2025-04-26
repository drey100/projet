import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    
    <nav className="navbar-custom d-flex justify-content-end p-3">
      <div className="nav-item me-3">
        <Link to="/">Home</Link>
      </div>
      <div className="nav-item me-3">
        <Link to="/Login">Connexion</Link>
      </div>
      <div className="nav-item">
        <Link to="/Mentor">Mentor</Link>
      </div>
    </nav>
  );
}
const Header = () => {
  const { logout, isAuthenticated } = useContext(AuthContext);

  return isAuthenticated && (
    <button onClick={logout} className="btn btn-danger">
      Déconnexion
    </button>
  );}
export default Navbar;