import { toast } from "sonner";
import { localhost } from "../config";

export const addProject = async (formData, token) => {
  try {
    const response = await fetch(`${localhost}api/project/add`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (response.ok) {
      toast.success("Projet ajouté avec succès !");
      const addedProject = await response.json();
      return addedProject;
    } else {
      toast.error(
        "Échec lors de l'ajout du projet, veuillez réessayer ultérieurement..."
      );
    }
  } catch (error) {
    console.error("Erreur lors de l'appel API addProject :", error);
    toast.error("Erreur inattendue, veuillez réessayer ultérieurement...");
  }
};

export const getAllProjects = async () => {
  try {
    const response = await fetch(`${localhost}api/project/`, {
      method: "GET",
    });

    if (response.ok) {
      const projects = await response.json();
      return projects;
    } else {
      toast.error(
        "Échec de la récupération des projets, veuillez réessayer ultérieurement..."
      );
    }
  } catch (error) {
    console.error("Erreur lors de l'appel API getAllProjects :", error);
    toast.error("Erreur inattendue, veuillez réessayer ultérieurement...");
  }
};

export const deleteProject = async (projectId, token) => {
  try {
    const response = await fetch(
      `${localhost}api/project/delete/${projectId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.ok) {
      toast.success("Projet supprimé avec succès !");
    } else {
      toast.error(
        "Échec de la suppression du projet, veuillez réessayer ultérieurement..."
      );
    }
  } catch (error) {
    console.error("Erreur lors de l'appel API deleteProject :", error);
    toast.error("Erreur inattendue, veuillez réessayer ultérieurement...");
  }
};
