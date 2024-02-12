import { toast } from "sonner";

export const addProject = async (
  category: string,
  title: string,
  description: string,
  imageUrl: string,
  github: string,
  lien: string,
  token: string
) => {
  const response = await fetch("http://localhost:3000/api/project/add", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      category,
      title,
      description,
      imageUrl,
      github,
      lien,
      token,
    }),
  });

  if (response.ok) {
    toast("Project added successfully!");
    console.log("Projet ajouté avec succès !");
    const addedProject = await response.json();
    console.log(addedProject);
    return addedProject;
  } else {
    console.error("Failed while adding project, try again later...");
  }
};

export const getAllProjects = async () => {
  const response = await fetch("http://localhost:3000/api/project/", {
    method: "GET",
  });

  if (response.ok) {
    const projects = await response.json();
    console.log("Liste des projets récupérée avec succès:", projects);
    return projects;
  } else {
    toast("Failed to retrieve projects, try again later...");
    console.error(
      "Échec lors de la récupération des projets, réessayez plus tard..."
    );
  }
};

export const deleteProject = async (projectId, token) => {
  const response = await fetch(
    `http://localhost:3000/api/project/delete/${projectId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (response.ok) {
    toast("Project successfully deleted!");
    console.log("Projet supprimé avec succès !");
  } else {
    toast("Failed to delete project, try again later...");
    console.error(
      "Échec lors de la suppression du projet, réessayez plus tard..."
    );
  }
};
