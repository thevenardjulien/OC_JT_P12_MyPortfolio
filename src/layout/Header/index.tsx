import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import MenuMobile from "../../components/MenuMobile";

const Header = () => {
  const token = localStorage.getItem("token") || null;
  const navigate = useNavigate();
  const [activeMenuMobile, setActiveMenuMobile] = useState(false);
  const handleMenu = (e) => {
    e.stopPropagation();
    setActiveMenuMobile(!activeMenuMobile);
  };
  const handleLogOut = () => {
    localStorage.removeItem("token");
    toast("Logout Sucessfully !");
    navigate("/");
  };
  return (
    <>
      <div className="header">
        <nav className="desktop header__links">
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
        </nav>
        <nav className="mobile">
          {activeMenuMobile && (
            <MenuMobile activeMenuMobile={setActiveMenuMobile} />
          )}
          <FontAwesomeIcon icon={faBars} onClick={(e) => handleMenu(e)} />
        </nav>
        <nav className="header__socials">
          <NavLink to="https://github.com/thevenardjulien" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </NavLink>
          <NavLink
            to="https://www.linkedin.com/in/julien-thevenard-951988168/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Header;
