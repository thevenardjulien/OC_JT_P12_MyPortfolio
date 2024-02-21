import { Link, useParams } from "react-router-dom";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import "./style.scss";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { getAllProjects } from "../../services/projectAPI";
import Loader from "../../components/Loader";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const ProjectDetails = () => {
  const [post, setPost] = useState(undefined);
  const params = useParams();

  const getPost = async () => {
    try {
      const projects = await getAllProjects();
      setPost(projects.filter((project) => project.title === params.title));
    } catch (error) {
      toast.error("Unable to retrieve project list, try again later...");
      console.error(
        "Unable to retrieve project list, try again later...",
        error
      );
    }
  };

  useEffect(() => {
    getPost();
  }, [params.title]);

  const createBlobUrl = (data: { data: number[] }, contentType: string) => {
    const uint8Array = new Uint8Array(data.data);
    const blob = new Blob([uint8Array], { type: contentType });
    return URL.createObjectURL(blob);
  };

  return (
    <>
      <Header />
      <main>
        {post ? (
          <>
            <div className="postWrapper">
              <div>
                {post[0].images && post[0].images.length > 0 && (
                  <img
                    className="postWrapper__img"
                    src={createBlobUrl(
                      post[0].images[0].data,
                      post[0].images[0].contentType
                    )}
                    alt={post[0].title}
                  />
                )}
              </div>
              <div className="postWrapper__infos">
                <div className="postWrapper__category">{post[0].category}</div>
                <div className="postWrapper__title">{post[0].title}</div>
                <div className="postWrapper__description">
                  {post[0].description}
                </div>
                {post[0].github && (
                  <div className="postWrapper__github">
                    <Link
                      className="Infos__link"
                      to={post[0].github}
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faGithub} /> View on Github
                    </Link>
                  </div>
                )}
                {post[0].lien && (
                  <Link
                    className="Infos__link"
                    to={post[0].lien}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLink} /> Direct Link
                  </Link>
                )}
              </div>
            </div>
          </>
        ) : (
          <Loader />
        )}
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetails;
