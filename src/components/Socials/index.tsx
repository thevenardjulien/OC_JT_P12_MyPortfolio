import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./style.scss";

const Socials = () => {
  return (
    <div className="Socials">
      <p>Join me on :</p>
      <hr className="Socials__hr" />
      <ul>
        <li>
          <Link
            className="Socials__links"
            to="https://github.com/thevenardjulien"
          >
            <div className="Socials__icon">
              <FontAwesomeIcon icon={faGithub} />
            </div>
            GitHub
          </Link>
        </li>
        <li>
          <Link
            className="Socials__links"
            to="https://www.linkedin.com/in/julien-thevenard-951988168/"
          >
            <div className="Socials__icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            LinkedIn
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Socials;
