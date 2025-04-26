import React, { useState } from 'react';

const Mentor = () => {
  const mentors = [
    {
      id: 1,
      name: "Freddy AGBONA",
      domain: "Ingénierie Logicielle",
      experience: "Software Engineer, Mentor, et futur Chef de projet (Project Manager) ambitieux.",
      photo: "https://via.placeholder.com/150", // Remplace ou laisse vide pour tester la photo par défaut
      bio: "Freddy est un ingénieur logiciel avec une passion pour le mentorat et le développement des compétences des jeunes talents en tech.",
      reviews: [
        "Un mentor exceptionnel, Freddy a su rendre les concepts complexes faciles à comprendre.",
        "Très pédagogue, ses sessions sont toujours très enrichissantes."
      ]
    },
    {
      id: 2,
      name: "Vigninou Focas TCHANHOUN",
      domain: "Développement Fullstack & Design Graphique",
      experience: "Développeur web & mobile polyvalent, également graphiste créatif.",
      photo: "https://via.placeholder.com/150",
      bio: "Vigninou est un développeur fullstack avec une forte expertise en design graphique, créant des applications web et mobiles esthétiques et performantes.",
      reviews: [
        "Un excellent mentor, Vigninou allie compétences techniques et sens du design.",
        "Son expertise en fullstack m'a permis de finaliser un projet complexe avec succès."
      ]
    },
    {
      id: 3,
      name: "Patrick VENDREDY",
      domain: "Développement des Compétences & Team Building",
      experience: "Consultant et formateur en développement organisationnel, leadership, intelligence collective et coaching d'équipes.",
      photo: "https://via.placeholder.com/150",
      bio: "Patrick a une vaste expérience dans le coaching d'équipes et l'amélioration des compétences organisationnelles.",
      reviews: [
        "Patrick a transformé notre équipe, son coaching a été décisif pour notre succès.",
        "Il est un expert en leadership et gestion d'équipe, vraiment inspirant."
      ]
    },
    {
      id: 4,
      name: "Habib RADJI",
      domain: "Mobilisation Communautaire & Développement Web",
      experience: "Chargé de projet, responsable de médiation et d'emploi, coach en robotique et président de Connect Jeunes.",
      photo: "https://via.placeholder.com/150",
      bio: "Habib combine son expertise en développement communautaire avec une forte passion pour le développement web et la robotique.",
      reviews: [
        "Habib m'a appris à allier technologie et engagement communautaire. Très inspirant !",
        "Une session avec lui vaut vraiment le coup, il apporte des solutions innovantes."
      ]
    },
    {
      id: 5,
      name: "Nicaise KAKANOU",
      domain: "Conception Pédagogique",
      experience: "Learning designer et Lead pédagogique à Digital Valley.",
      photo: "https://via.placeholder.com/150", // Photo vide, testera la photo par défaut
      bio: "Nicaise est un expert en conception pédagogique, avec une approche axée sur l'apprentissage actif et interactif.",
      reviews: [
        "Nicaise est un excellent formateur, il rend l'apprentissage captivant.",
        "Ses méthodes pédagogiques sont très efficaces pour apprendre rapidement."
      ]
    },
    {
      id: 6,
      name: "Yann DJOSSINOU",
      domain: "Stratégie Digitale & Entrepreneuriat",
      experience: "Manager de Digital Valley, entrepreneur, stratège digital et business developer.",
      photo: "https://via.placeholder.com/150",
      bio: "Yann est un stratège digital et un entrepreneur, il aide les entreprises à se développer grâce à des stratégies numériques innovantes.",
      reviews: [
        "Yann m'a donné les clés pour faire évoluer mon projet entrepreneurial. Top !",
        "Ses conseils en stratégie digitale sont toujours très pertinents."
      ]
    },
    {
      id: 7,
      name: "Brandon MEDOHOU",
      domain: "Développement Web & Mobile",
      experience: "Expert WordPress, React, APIs, spécialisé dans la création de sites performants pour indépendants et petites entreprises.",
      photo: "https://via.placeholder.com/150", // Photo valide
      bio: "Brandon a plusieurs années d'expérience dans le développement web, particulièrement dans la création de solutions pour des petites entreprises.",
      reviews: [
        "Brandon m'a aidé à créer un site incroyable pour mon entreprise. Très professionnel !",
        "Ses conseils en React m'ont permis de développer un projet complexe avec facilité."
      ]
    },
  ];

  const [selectedMentor, setSelectedMentor] = useState(null);

  const handleReserve = (mentor) => {
    setSelectedMentor(mentor);
    alert(`Vous avez réservé une session avec ${mentor.name} !`);
    // Ici tu peux remplacer alert par l'ouverture d'une modale ou rediriger vers un formulaire de réservation
  };

  const defaultPhoto = "https://via.placeholder.com/150"; // Photo par défaut

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Nos mentors disponibles</h2>
      <div className="row">
        {mentors.map((mentor) => (
          <div className="col-md-6 mb-4" key={mentor.id}>
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <img 
                    src={mentor.photo || defaultPhoto} // Si la photo est vide ou invalide, afficher la photo par défaut
                    alt={mentor.name} 
                    className="card-img-top mb-3"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <h5 className="card-title text-primary">{mentor.name}</h5>
                  <p className="card-text"><strong>Domaine :</strong> {mentor.domain}</p>
                  <p className="card-text"><strong>Profil :</strong> {mentor.experience}</p>
                  <p className="card-text"><strong>Bio :</strong> {mentor.bio}</p>
                  <div>
                    <strong>Avis :</strong>
                    <ul>
                      {mentor.reviews.map((review, index) => (
                        <li key={index}>"{review}"</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <button 
                  className="btn btn-success mt-3"
                  onClick={() => handleReserve(mentor)}
                >
                  Réserver une session
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentor;
