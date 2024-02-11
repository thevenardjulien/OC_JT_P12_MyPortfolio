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
    console.error(
      "Impossible de récupérer les messages, réessayez plus tard..."
    );
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
    console.log("Message enregistré !");
  } else {
    console.error("Echec lors de l'envoi du message, réessayez plus tard...");
  }
};
