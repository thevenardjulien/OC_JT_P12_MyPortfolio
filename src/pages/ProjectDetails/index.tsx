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
import { Link, useNavigate, useParams } from "react-router-dom";

const ProjectDetails = () => {
  const [post, setPost] = useState(undefined);
  const [proposals, setProposals] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  const getPosts = async () => {
    try {
      const projects = await getAllProjects();
      setProposals(
        projects
          .slice()
          .reverse()
          .filter((project) => project.title !== params.title)
      );
      setPost(
        projects.slice().filter((project) => project.title === params.title)
      );
    } catch (error) {
      toast.error("Unable to retrieve project list, try again later...");
      console.error(
        "Unable to retrieve project list, try again later...",
        error
      );
    }
  };

  useEffect(() => {
    getPosts();
  }, [params.title]);

  const createBlobUrl = (data: { data: number[] }, contentType: string) => {
    const uint8Array = new Uint8Array(data.data);
    const blob = new Blob([uint8Array], { type: contentType });
    return URL.createObjectURL(blob);
  };

  const handleClick = ({ currentTarget }) => {
    const newParams = currentTarget.children[0].alt;
    navigate(`/project-details/${newParams}`);
    window.scrollTo(0, 0);
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
                <div className="postWrapper__tagTitleWrapper">
                  <div className="postWrapper__category">
                    {post[0].category}
                  </div>
                  <div className="postWrapper__title">{post[0].title}</div>
                </div>

                <div className="postWrapper__description">
                  {post[0].description}
                </div>
                {post[0].github ||
                  (post[0].lien && (
                    <div className="postWrapper__links">
                      {post[0].github && (
                        <div className="postWrapper__link">
                          <Link to={post[0].github} target="_blank">
                            <FontAwesomeIcon icon={faGithub} /> Discover on
                            Github
                          </Link>
                        </div>
                      )}
                      {post[0].lien && (
                        <div className="postWrapper__link">
                          <Link to={post[0].lien} target="_blank">
                            <FontAwesomeIcon icon={faLink} /> Direct Link
                          </Link>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
              <div className="postWrapper__proposals">
                <div className="postWrapper__also">You may also like :</div>
                <div className="postWrapper__projects">
                  {proposals &&
                    proposals.map((proposal, index) => (
                      <div
                        key={index}
                        onClick={(e) => handleClick(e)}
                        className="proposalWrapper"
                      >
                        {proposal.images && proposal.images.length > 0 && (
                          <img
                            className="postWrapper__proposalsImg"
                            src={createBlobUrl(
                              proposal.images[0].data,
                              proposal.images[0].contentType
                            )}
                            alt={proposal.title}
                          />
                        )}
                        <span className="proposalWrapper__text">
                          {proposal.title}
                        </span>
                      </div>
                    ))}
                </div>
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
