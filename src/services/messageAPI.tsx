import { toast } from "sonner";
import { localhost } from "../config";

export const messageGet = async (token: string) => {
  const response = await fetch(`${localhost}api/message`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    const messages = await response.json();
    return messages;
  } else {
    toast.error("Unable to retrieve messages, try again later...");
  }
};

export const messagePost = async (
  name: string,
  email: string,
  message: string
) => {
  const response = await fetch(`${localhost}api/message/post`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  });

  if (response.ok) {
    toast.success("Your message has been sent sucessfully !");
  } else {
    toast.error("Your message could not be sent, try again later...");
  }
};

export const messageDelete = async (id: string, token: string) => {
  const response = await fetch(`${localhost}api/message/delete/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    toast.success("Your message has been deleted sucessfully !");
  } else {
    toast.error("Your message could not be deleted, try again later...");
  }
};
