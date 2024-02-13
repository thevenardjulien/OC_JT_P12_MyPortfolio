import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { messageDelete, messageGet } from "../../../services/messageAPI";
import "./style.scss";

const MessagesList = () => {
  const [messages, setMessages] = useState([]);
  const token = localStorage.getItem("token");

  const fetchData = async () => {
    try {
      const messageGetResponse = await messageGet(token);

      if (messageGetResponse && Array.isArray(messageGetResponse.messages)) {
        setMessages(messageGetResponse.messages);
      } else {
        console.error(
          "La réponse ne contient pas un tableau de messages valide :",
          messageGetResponse
        );
        setMessages([]);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des messages :", error);
      setMessages([]);
    }
  };

  const handleDelete = async (messageId) => {
    try {
      await messageDelete(messageId, token);
      // Actualiser les messages après la suppression réussie
      fetchData();
    } catch (error) {
      console.error("Erreur lors de la suppression du message :", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [token]);

  return (
    <div>
      {messages && messages.length > 0
        ? messages
            .slice()
            .reverse()
            .map((message) => (
              <div className="messageContainer" key={message._id}>
                <span
                  className="messageContainer__xmark"
                  onClick={() => handleDelete(message._id)}
                >
                  <FontAwesomeIcon icon={faXmark} />
                </span>
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
