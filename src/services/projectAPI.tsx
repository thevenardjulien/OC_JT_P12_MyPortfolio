import { toast } from "sonner";
import { localhost } from "../config";

export const addProject = async (formData, token) => {
  const response = await fetch(`${localhost}api/project/add`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (response.ok) {
    toast.success("Project added successfully!");
    const addedProject = await response.json();
    return addedProject;
  } else {
    toast.error("Failed while adding project, try again later...");
  }
};

export const getAllProjects = async () => {
  const response = await fetch(`${localhost}api/project/`, {
    method: "GET",
  });

  if (response.ok) {
    const projects = await response.json();
    return projects;
  } else {
    toast.error("Failed to retrieve projects, try again later...");
  }
};

export const deleteProject = async (projectId, token) => {
  const response = await fetch(`${localhost}api/project/delete/${projectId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    toast.success("Project successfully deleted!");
  } else {
    toast.error("Failed to delete project, try again later...");
  }
};
