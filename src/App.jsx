import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./componente/Page/Home";
import Mentor from "./componente/Page/Mentor";
import Profil from "./componente/Page/Profil";
import Footer from "./componente/Footer";
import Navbar from "./componente/Navbar"; 
import Contact from "./componente/Page/Contact";
import Inscription from "./componente/Page/Inscription";
import LoginForm from "./componente/Page/LoginForm";
import SignupForm from "./componente/Page/SignupForm";
import EditProfile from "./componente/Page/EditProfile";
import Utilisateur from "./componente/Page/Utilisateur";
import MentorProfil from "./componente/Page/MentorProfil";
import EditMentor from "./componente/Page/EditMentor";
import Logout from "./componente/Page/Logout";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mentor" element={<Mentor />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignupForm />} /> 
            <Route path="/editprofil" element={<EditProfile />} /> 
            <Route path="/utilisateur" element={<Utilisateur />} /> 
            <Route path="/MentorProfil" element={<MentorProfil />} /> 
            <Route path="/EditProfil" element={<EditMentor />} /> 
            <Route path="/Logout" element={<Logout />} /> 
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
