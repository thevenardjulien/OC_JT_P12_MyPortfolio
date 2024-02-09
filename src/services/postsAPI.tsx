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

const addFile = async (file) => {
  const token = localStorage.getItem("token") || null;
  try {
    const response = await fetch(`${localhost}/api/upload/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: file,
    });
    if (!response.ok) {
      throw new Error(`Erreur HTTP! Statut : ${response.status}`);
    }
  } catch (error) {
    console.error("Erreur lors de l'envoi du post :", error);
  }
};

const addPostWithFile = async (formData) => {
  const token = localStorage.getItem("token") || null;
  try {
    const response = await fetch(`${localhost}/api/posts`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        Title: formData.Title,
        Category: formData.Category,
        Description: formData.Description,
      }),
    });
    if (!response.ok) {
      throw new Error(`Erreur HTTP! Statut : ${response.status}`);
    }
  } catch (error) {
    console.error("Erreur lors de l'envoi du post :", error);
  }
};

export { addFile, addPostWithFile, findPosts };
