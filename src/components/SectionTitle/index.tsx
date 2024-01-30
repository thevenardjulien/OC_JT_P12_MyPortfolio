import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

interface SectionTitle {
  title: string;
}

const SectionTitle = ({ title }: SectionTitle) => {
  return (
    <>
      <div className="SectionTitle">
        <FontAwesomeIcon icon={faSquare} className="SectionTitle__Square" />
        <h3>{title}</h3>
      </div>
    </>
  );
};

export default SectionTitle;
