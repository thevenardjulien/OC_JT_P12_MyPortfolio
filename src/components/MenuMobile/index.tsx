import { NavLink, Link, useNavigate } from "react-router-dom";
import "./style.scss";
import { toast } from "sonner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import Socials from "../Socials";

interface MenuMobileProps {
  activeMenuMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuMobile: React.FC<MenuMobileProps> = ({ activeMenuMobile }) => {
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
  }, [activeMenuMobile]);
  return (
    <div className="MenuMobileOverlay">
      <div className="MenuMobile">
        <div>
          <FontAwesomeIcon
            className="MenuMobile__xmark"
            icon={faSquareXmark}
            onClick={() => activeMenuMobile(false)}
          />
          <div className="MenuMobile__content">
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
          </div>
        </div>
        <Socials />
      </div>
    </div>
  );
};

export default MenuMobile;
