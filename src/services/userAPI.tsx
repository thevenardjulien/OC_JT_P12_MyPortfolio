import { localhost } from "../config";

const register = async (userName: string, email: string, password: string) => {
  try {
    const response = await fetch(`${localhost}/api/auth/local/register`, {
      method: "POST",
      headers: {
        Accept: "Application/json",
        "Content-type": "Application/json",
      },
      body: JSON.stringify({ userName, email, password }),
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP! Statut : ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la connexion :", error);
    throw error;
  }
};

const login = async (identifier: string, password: string) => {
  try {
    const response = await fetch(`${localhost}/api/auth/local`, {
      method: "POST",
      headers: {
        Accept: "Application/json",
        "Content-type": "Application/json",
      },
      body: JSON.stringify({ identifier, password }),
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP! Statut : ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la connexion :", error);
    throw error;
  }
};

export { login, register };
