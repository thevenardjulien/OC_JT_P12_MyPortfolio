import { useState } from "react";
import Modal from "../Modal";
import "./style.scss";

interface Project {
  img: string;
  alt: string;
  category: string;
  title: string;
  description: string;
}

const Project = ({ img, alt, category, title, description }: Project) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Project">
      <hr className="Project__hr" />
      <div className="Project__content" onClick={() => setIsOpen(true)}>
        <div className="Project__imgWrapper">
          <img className="Project__img" src={img} alt={alt} />
        </div>
        <div className="Infos">
          <p className="Infos__category">{category}</p>
          <h4 className="Infos__title">{title}</h4>
          <p className="Infos__description">{description}</p>
        </div>
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Project;
