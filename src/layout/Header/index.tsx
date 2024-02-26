import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import MenuMobile from "../../components/MenuMobile";
import Socials from "../../components/Socials";

const Header = () => {
  const token = localStorage.getItem("token") || null;
  const navigate = useNavigate();
  const [activeMenuMobile, setActiveMenuMobile] = useState(false);
  const handleMenu = (e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    setActiveMenuMobile(!activeMenuMobile);
  };
  const handleLogOut = () => {
    localStorage.removeItem("token");
    toast.success("Logout Sucessfully !");
    navigate("/");
  };
  return (
    <>
      <div className="header">
        <nav className="desktop header__links">
          <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
            Home
          </NavLink>
          <NavLink to="/projects" onClick={() => window.scrollTo(0, 0)}>
            Projects
          </NavLink>
          <NavLink to="/contact" onClick={() => window.scrollTo(0, 0)}>
            Contact
          </NavLink>
          {token !== null ? (
            <>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <Link to="/" onClick={handleLogOut}>
                Logout
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
        <Socials />
      </div>
    </>
  );
};

export default Header;
