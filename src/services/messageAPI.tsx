import { toast } from "sonner";

export const messageGet = async (token: string) => {
  const response = await fetch("http://localhost:3000/api/message", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    const messages = await response.json();
    return messages;
  } else {
    toast("Unable to retrieve messages, try again later...");
  }
};

export const messagePost = async (
  name: string,
  email: string,
  message: string
) => {
  const response = await fetch("http://localhost:3000/api/message/post", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  });

  if (response.ok) {
    toast("Your message has been sent sucessfully !");
  } else {
    toast("Your message could not be sent, try again later...");
  }
};

export const messageDelete = async (id: string, token: string) => {
  const response = await fetch(
    `http://localhost:3000/api/message/delete/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (response.ok) {
    toast("Your message has been deleted sucessfully !");
  } else {
    toast("Your message could not be deleted, try again later...");
  }
};
