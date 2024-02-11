// projectAPI.tsx

export const addProject = async (projectData) => {
  const response = await fetch("http://localhost:3000/api/project/add", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      // Ajoutez ici vos headers d'authentification si nécessaire
    },
    body: JSON.stringify(projectData),
  });

  if (response.ok) {
    console.log("Projet ajouté avec succès !");
    const addedProject = await response.json();
    console.log(addedProject);
    return addedProject;
  } else {
    console.error("Échec lors de l'ajout du projet, réessayez plus tard...");
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
    console.log("Projet supprimé avec succès !");
  } else {
    console.error(
      "Échec lors de la suppression du projet, réessayez plus tard..."
    );
  }
};
