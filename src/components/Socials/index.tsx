import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <div className="Socials">
      <h4>Join me on :</h4>
      <hr />
      <ul>
        <li>
          <Link to="https://github.com/thevenardjulien">
            <FontAwesomeIcon icon={faGithub} className="icon" color="#fff" />
            GitHub
          </Link>
        </li>
        <li>
          <Link to="https://www.linkedin.com/in/julien-thevenard-951988168/">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="icon"
              color="rgb(10,102,194)"
            />
            LinkedIn
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Socials;
