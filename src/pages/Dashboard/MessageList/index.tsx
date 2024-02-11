import "./style.scss";

import { useEffect, useState } from "react";
import { messageGet } from "../../../services/messageAPI";

const MessagesList = () => {
  const [messages, setMessages] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const messageGetResponse = await messageGet(token);

        // Vérifier si la réponse est un objet contenant un tableau de messages
        if (messageGetResponse && Array.isArray(messageGetResponse.messages)) {
          setMessages(messageGetResponse.messages);
        } else {
          console.error(
            "La réponse ne contient pas un tableau de messages valide :",
            messageGetResponse
          );
          setMessages([]); // Réinitialiser les messages en cas de structure incorrecte
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des messages :", error);
        setMessages([]); // Réinitialiser les messages en cas d'erreur
      }
    };

    fetchData();
  }, [token]);

  return (
    <div>
      {messages && messages.length > 0
        ? messages.map((message) => (
            <div className="messageContainer" key={message._id}>
              <p>
                <strong>Nom:</strong> {message.name}
              </p>
              <p>
                <strong>Email:</strong> {message.email}
              </p>
              <p>
                <strong>Message:</strong> {message.message}
              </p>
            </div>
          ))
        : "Impossible de récupérer les messages..."}
    </div>
  );
};

export default MessagesList;
