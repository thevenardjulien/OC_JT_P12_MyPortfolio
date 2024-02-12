import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCircleXmark, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./style.scss";

const Modal = ({
  setIsOpen,
  category,
  title,
  description,
  images,
  github,
  lien,
}) => {
  const closeModale = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  // Créer l'URL du blob
  const createBlobUrl = (data, contentType) => {
    console.log("Données du blob :", data);
    console.log("Type de contenu du blob :", contentType);

    if (data && contentType) {
      try {
        const uint8Array = new Uint8Array(data.data);
        const blob = new Blob([uint8Array], { type: contentType });
        return URL.createObjectURL(blob);
      } catch (error) {
        console.error("Erreur lors de la création de l'URL du blob :", error);
      }
    }
    return null;
  };

  // Utiliser la fonction pour obtenir l'URL de l'image
  const imageUrl = createBlobUrl(images[0].data, images[0].contentType);
  console.log(
    "Type de contenu de l'image dans Project :",
    images[0].contentType
  );

  return (
    <div className="overlay" onClick={(e) => closeModale(e)}>
      <div className="Modale" onClick={(e) => e.stopPropagation()}>
        <div className="Modale__xMark" onClick={(e) => closeModale(e)}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </div>
        <div className="content">
          <img className="content__img" src={imageUrl} alt={title} />
          <div className="content__infos">
            <p className="content__infos__title">{title}</p>
            <blockquote className="content__infos__description">
              {description}
            </blockquote>
            <div className="Access">
              {github && (
                <Link className="Access__link" to={github}>
                  Github Repository
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              )}
              {lien && (
                <Link className="Access__link" to={lien}>
                  Link to the project
                  <FontAwesomeIcon icon={faLink} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
