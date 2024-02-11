import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { localhost } from "../../../config";
import { deleteProject, getAllProjects } from "../../../services/projectAPI";
import "./style.scss";

const lastsProjects = () => {
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem("token");

  const getPosts = async () => {
    const projects = await getAllProjects();
    setPosts(projects);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const handleDelete = async (postId) => {
    try {
      await deleteProject(postId, token);
      getPosts();
    } catch (error) {
      console.error("Erreur lors de la suppression du message :", error);
    }
  };

  return (
    <>
      <ul>
        {posts.toReversed().map((post, index) => (
          <li className="lastsProjects" key={index}>
            <img
              className="lastsProjects__image"
              src={`${localhost}/${post.imageUrl}`}
              alt={post.title}
            />
            {post.title}
            <span
              className="lastsProjects__xmark"
              onClick={() => handleDelete(post._id)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default lastsProjects;
