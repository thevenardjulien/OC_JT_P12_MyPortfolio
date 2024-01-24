import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

const SectionTitle = ({ title }) => {
  return (
    <>
      <div className="SectionTitle">
        <FontAwesomeIcon icon={faSquare} className="SectionTitle__Square" />
        <h3>{title}</h3>
      </div>
      <hr className="SectionTitle__hr" />
    </>
  );
};

export default SectionTitle;
