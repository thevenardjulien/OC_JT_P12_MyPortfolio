import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import "./style.scss";

const Socials = () => {
  return (
    <div className="socials">
      <NavLink to="https://github.com/thevenardjulien" target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </NavLink>
      <NavLink
        to="https://www.linkedin.com/in/julien-thevenard-951988168/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </NavLink>
    </div>
  );
};

export default Socials;
