import axios from "axios";

const API_URL = "https://mentor-backend-wkkg.onrender.com/api";

export const getUserData = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/users`, { // <-- users avec "s"
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données utilisateur:", error);
    throw error;
  }
};

export const getMentorData = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/mentors`, { // <-- mentors si tu as un routeur pour mentor aussi
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données mentor:", error);
    throw error;
  }
};

// authService.js
export const clearUserData = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  // Toute autre logique pour effacer les données utilisateur
};
