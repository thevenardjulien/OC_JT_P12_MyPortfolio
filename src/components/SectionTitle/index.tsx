import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

interface SectionTitle {
  title: string;
}

const SectionTitle = ({ title }: SectionTitle) => {
  return (
    <>
      <div className="section-title">
        <FontAwesomeIcon icon={faSquare} className="section-title__square" />
        <h3>{title}</h3>
      </div>
    </>
  );
};

export default SectionTitle;
