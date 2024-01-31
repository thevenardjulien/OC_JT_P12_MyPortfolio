import { useEffect, useState } from "react";
import { localhost } from "../../config";
import Modal from "../Modal";
import "./style.scss";

const Project = ({ category, title, description, imageUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(`${localhost}${imageUrl}`);
  });

  return (
    <div className="Project">
      <hr className="Project__hr" />
      <div className="Project__content" onClick={() => setIsOpen(true)}>
        <div className="Project__imgWrapper">
          <img
            className="Project__img"
            src={`${localhost}${imageUrl}`}
            alt={`${title} img`}
          />
        </div>
        <div className="Infos">
          <p className="Infos__category">{category}</p>
          <h3 className="Infos__title">{title}</h3>
          <p className="Infos__description">{description}</p>
        </div>
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Project;
