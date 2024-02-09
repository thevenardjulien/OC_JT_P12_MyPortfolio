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

export { findPosts };
