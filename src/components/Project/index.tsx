import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Project = ({ category, title, description, images, github, lien }) => {
  const createBlobUrl = (data, contentType) => {
    const blob = new Blob([new Uint8Array(data.data)], { type: contentType });
    return URL.createObjectURL(blob);
  };

  return (
    <div className="Project">
      <hr className="Project__hr" />
      <div className="Project__content">
        <div className="Project__imgWrapper">
          {images && images.length > 0 && (
            <img
              className="Project__img"
              src={createBlobUrl(images[0].data, images[0].contentType)}
              alt={`${title} img`}
            />
          )}
        </div>
        <div className="Infos">
          <p className="Infos__category">{category}</p>
          <h3 className="Infos__title">{title}</h3>
          <p className="Infos__description">{description}</p>
          <br />
          <p>
            <Link className="Infos__link" to={github}>
              <FontAwesomeIcon icon={faGithub} /> View on Github
            </Link>
            <Link className="Infos__link" to={lien}>
              <FontAwesomeIcon icon={faLink} /> Direct Link
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
