export const signup = async (email, password) => {
  const response = await fetch("http://localhost:3000/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    console.log("Inscription réussie !");
  } else {
    console.error("Echec lors de l'inscription, réessayez plus tard...");
  }
};

export const login = async (email, password) => {
  const response = await fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    console.log("Connexion réussie !");
    const loginResponse = await response.json();
    console.log(loginResponse);
    return loginResponse;
  } else {
    console.error("Echec lors de la connexion, réessayez plus tard...");
  }
};
