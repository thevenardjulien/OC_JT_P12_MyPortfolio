import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

const Modal = ({ setIsOpen }) => {
  const closeModale = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };
  return (
    <div className="overlay" onClick={(e) => closeModale(e)}>
      <div className="Modale" onClick={(e) => e.stopPropagation()}>
        <div className="Modale__xMark" onClick={(e) => closeModale(e)}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </div>
      </div>
    </div>
  );
};
export default Modal;
