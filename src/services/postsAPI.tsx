import { localhost } from "../config";

const findPosts = async () => {
  try {
    const response = await fetch(`${localhost}/api/posts?populate=*`, {
      method: "GET",
      headers: {
        Accept: "Application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP! Statut : ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des posts :", error);
    throw error;
  }
};

const addPost = async (formData) => {
  const token = localStorage.getItem("token") || null;
  try {
    const response = await fetch(`${localhost}/api/posts`, {
      method: "POST",
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP! Statut : ${response.status}`);
    }
  } catch (error) {
    console.error("Erreur lors de l'envoi du post :", error);
  }
};

export { addPost, findPosts };
