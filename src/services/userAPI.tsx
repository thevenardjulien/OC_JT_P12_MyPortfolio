import { toast } from "sonner";
import { localhost } from "../config";

export const signup = async (email: string, password: string) => {
  const response = await fetch(`${localhost}api/auth/signup`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    toast("Successful registration !");
  } else {
    toast("Failed to register, try again later...");
  }
};

export const login = async (email: string, password: string) => {
  const response = await fetch(`${localhost}api/auth/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    toast("Connected successfully !");
    const loginResponse = await response.json();
    return loginResponse;
  } else {
    toast("Failed to connect, try again later...");
  }
};
