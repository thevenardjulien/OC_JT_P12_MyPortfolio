import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { localhost } from "../../config";
import "./style.scss";

const Modal = ({ setIsOpen, category, title, description, imageUrl }) => {
  const closeModale = (e: MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };
  return (
    <div className="overlay" onClick={(e) => closeModale(e)}>
      <div className="Modale" onClick={(e) => e.stopPropagation()}>
        <div className="Modale__xMark" onClick={(e) => closeModale(e)}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </div>
        <div className="content">
          <img
            className="content__img"
            src={`${localhost}${imageUrl}`}
            alt={title}
          />
          <div className="content__infos">
            <p className="content__infos__title">{title}</p>
            <blockquote className="content__infos__description">
              {description}
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
