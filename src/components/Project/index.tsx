import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { faLink } from "@fortawesome/free-solid-svg-icons";

interface Image {
  contentType: string;
  data: {
    data: number[];
    type: string;
    _id: string;
  };
  _id: string;
}

interface Project {
  category: string;
  title: string;
  description: string;
  images: Image[];
  github: string;
  lien: string;
}

const Project: React.FC<Project> = ({
  category,
  title,
  description,
  images,
  github,
  lien,
}) => {
  const createBlobUrl = (data: Image["data"], contentType: string) => {
    const uint8Array = new Uint8Array(Uint8Array.from(data.data));
    const blob = new Blob([uint8Array], { type: contentType });
    return URL.createObjectURL(blob);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`../project-details/${title}`);
  };

  return (
    <div className="Project" onClick={handleClick}>
      <hr className="Project__hr" />
      <div className="Project__content">
        <div className="Project__imgWrapper">
          {images && images.length > 0 && (
            <img
              className="Project__img"
              src={createBlobUrl(
                {
                  data: images[0].data.data,
                  type: images[0].contentType,
                  _id: images[0]._id,
                },
                images[0].contentType
              )}
              alt={`${title} img`}
            />
          )}
        </div>
        <div className="Infos">
          <p className="Infos__category">{category}</p>
          <h3 className="Infos__title">{title}</h3>
          <p className="Infos__description">{description}</p>
          <br />
          <p className="Infos__links">
            {github && (
              <Link className="Infos__link" to={github} target="_blank">
                <FontAwesomeIcon icon={faGithub} /> View on Github
              </Link>
            )}
            {lien && (
              <Link className="Infos__link" to={lien} target="_blank">
                <FontAwesomeIcon icon={faLink} /> Direct Link
              </Link>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
