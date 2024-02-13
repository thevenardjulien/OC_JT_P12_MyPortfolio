import { NavLink, Link, useNavigate } from "react-router-dom";
import "./style.scss";
import { toast } from "sonner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";

const MenuMobile = ({ activeMenuMobile }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    toast("Logout Sucessfully !");
    navigate("/");
  };
  useEffect(() => {
    window.addEventListener("click", () => {
      activeMenuMobile(false);
    });
  }, []);
  return (
    <div className="MenuMobile">
      <div className="MenuMobile">
        <div>
          <FontAwesomeIcon
            className="MenuMobile__xmark"
            icon={faSquareXmark}
            onClick={() => activeMenuMobile(false)}
          />
          <div className="MenuMobile__content">
            <NavLink to="/">01. Home</NavLink>
            <NavLink to="/projects">02. Projects</NavLink>
            <NavLink to="/contact">03. Contact</NavLink>
            {token !== null ? (
              <>
                <NavLink to="/dashboard">0X. Dashboard</NavLink>
                <Link to="/" onClick={handleLogOut}>
                  0X. Logout
                </Link>
              </>
            ) : null}
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default MenuMobile;
