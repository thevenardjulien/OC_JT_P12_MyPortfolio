import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./style.scss";

interface ModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ setIsOpen }) => {
  const closeModale = (e: MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };
  return (
    <div
      className="overlay"
      onClick={(e: React.SyntheticEvent) => closeModale(e)}
    >
      <div className="Modale" onClick={(e) => e.stopPropagation()}>
        <div className="Modale__xMark" onClick={(e) => closeModale(e)}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </div>
      </div>
    </div>
  );
};
export default Modal;
