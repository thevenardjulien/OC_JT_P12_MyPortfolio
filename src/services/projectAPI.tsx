import { toast } from "sonner";

export const addProject = async (formData, token) => {
  const response = await fetch("http://localhost:3000/api/project/add", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (response.ok) {
    toast("Project added successfully!");
    const addedProject = await response.json();
    return addedProject;
  } else {
    toast("Failed while adding project, try again later...");
  }
};

export const getAllProjects = async () => {
  const response = await fetch("http://localhost:3000/api/project/", {
    method: "GET",
  });

  if (response.ok) {
    const projects = await response.json();
    return projects;
  } else {
    toast("Failed to retrieve projects, try again later...");
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
  } else {
    toast("Failed to delete project, try again later...");
  }
};
