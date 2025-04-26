import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      toast.error("Veuillez entrer une adresse e-mail valide.");
      return;
    }

    setIsSubmitting(true);
    try {
      await axios.post("http://localhost:5000/api/contact", form);
      toast.success("Message envoyé avec succès !");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Erreur lors de l'envoi du message.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Contactez-nous</h2>

      <div className="row">


        <div className="col-md-6 mb-4">
          <h4>Envoyez-nous un message</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Adresse e-mail</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                className="form-control"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? "Envoi en cours..." : "Envoyer"}
            </button>
          </form>
        </div>

        <div className="col-md-6 mb-4">
          <h4>Nos coordonnées</h4>
          <p><strong>Adresse :</strong> Zongo, Parakou, Bénin</p>
          <p><strong>Email :</strong> monmentor@gmail.com</p>
          <p><strong>Téléphone :</strong> +229 019 599 3050</p>
          <p><strong>Horaires :</strong><br />Lundi - Vendredi : 9h00 - 18h00<br />Samedi : 10h00 - 14h00</p>

          <h5 className="mt-4">Suivez-nous</h5>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Contact;