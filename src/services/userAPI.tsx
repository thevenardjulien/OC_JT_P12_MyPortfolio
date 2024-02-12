import { toast } from "sonner";

export const signup = async (email: string, password: string) => {
  const response = await fetch("http://localhost:3000/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    toast("Successful registration !");
    console.log("Inscription réussie !");
  } else {
    toast("Failed to register, try again later...");
    console.error("Echec lors de l'inscription, réessayez plus tard...");
  }
};

export const login = async (email: string, password: string) => {
  const response = await fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    toast("");
    console.log("Successful connection !");
    const loginResponse = await response.json();
    console.log(loginResponse);
    return loginResponse;
  } else {
    toast("");
    console.error("Failed to connect, try again later...");
  }
};
