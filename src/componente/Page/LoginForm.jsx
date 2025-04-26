import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";




import axios from "axios";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://mentor-backend-wkkg.onrender.com/api/auth/login",
        credentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;

      // Sauvegarde du token
      localStorage.setItem("token", data.token);


    // Sauvegarder user
    saveUserData(data.user);


      // Décoder le token pour récupérer le rôle
      const tokenPayload = JSON.parse(atob(data.token.split('.')[1]));
      const userRole = tokenPayload.role;

      // Rediriger selon le rôle
      if (userRole === "mentor") {
        navigate("/MentorProfil");
      } else {
        navigate("/Profil");
      }

    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Erreur lors de la connexion.";
      alert(errorMessage);
    }
  };
  
  return (
    <section
      className="bg-image gradient-custom-3 py-5"
      style={{
        backgroundImage:
          "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card shadow" style={{ borderRadius: "15px" }}>
              <div className="card-body p-5">
                <h2 className="text-uppercase text-center mb-5 text-primary">
                  Connexion
                </h2>

                <form onSubmit={handleLogin}>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="email"
                      className="form-control form-control-lg"
                      placeholder="Adresse email"
                      value={credentials.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="password"
                      className="form-control form-control-lg"
                      placeholder="Mot de passe"
                      value={credentials.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-check d-flex justify-content-center mb-4">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      id="rememberMe"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Se souvenir de moi
                    </label>
                  </div>

                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Se connecter
                    </button>
                  </div>

                  <p className="text-center text-muted mt-5 mb-0">
                    Vous n'avez pas encore de compte ?{" "}
                    <Link to="/Inscription" className="fw-bold text-body">
                      <u>Inscrivez-vous ici</u>
                    </Link>
                  </p>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
