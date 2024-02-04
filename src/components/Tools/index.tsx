import {
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import figmaIcon from "../../assets/images/icons/figma.png";
import illustratorIcon from "../../assets/images/icons/illustrator.png";
import indesignIcon from "../../assets/images/icons/indesign.png";
import photoshopIcon from "../../assets/images/icons/photoshop.png";
import premiereproIcon from "../../assets/images/icons/premierepro.png";
import typeScriptIcon from "../../assets/images/icons/typescript.png";

const Tools = () => {
  return (
    <div className="MyStack">
      <p>ToolsList :</p>
      <hr />
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon
              icon={faHtml5}
              className="icon"
              color="rgb(233,98,40)"
            />
            <FontAwesomeIcon
              icon={faCss3Alt}
              className="icon"
              color="rgb(21,114,182)"
            />
            HTML/CSS
          </Link>
        </li>
        <li>
          <Link to="/">
            <FontAwesomeIcon
              icon={faSass}
              className="icon"
              color="rgb(205,103,153)"
            />
            SASS
          </Link>
        </li>
        <li>
          <Link to="/">
            <FontAwesomeIcon
              icon={faJs}
              className="icon"
              color="rgb(247,224,24)"
            />
            JavaScript
          </Link>
        </li>
        <li>
          <Link to="/">
            <FontAwesomeIcon
              icon={faReact}
              className="icon"
              color="rgb(0,216,255)"
            />
            React
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={typeScriptIcon} alt="typeScript Icon" className="icon" />
            TypeScript
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={figmaIcon} alt="Figma Icon" className="icon" />
            Figma
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={photoshopIcon} alt="Photoshop Icon" className="icon" />
            Photoshop
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={indesignIcon} alt="Indesign Icon" className="icon" />
            InDesign
          </Link>
        </li>
        <li>
          <Link to="/">
            <img
              src={illustratorIcon}
              alt="Illustrator Icon"
              className="icon"
            />
            Illustrator
          </Link>
        </li>
        <li>
          <Link to="/">
            <img
              src={premiereproIcon}
              alt="Premiere Pro Icon"
              className="icon"
            />
            Premiere Pro
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Tools;
