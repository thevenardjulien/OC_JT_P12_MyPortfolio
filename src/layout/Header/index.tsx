import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAppStore } from "../../store/userStore";
import "./style.scss";

const Header = () => {
  const {
    identifier,
    updateIdentifier,
    updateToken,
    isLogged,
    updateIsLogged,
  } = useAppStore();

  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (
        (e.altKey === true && e.key === "l") ||
        (e.ctrlKey === true && e.key === "l")
      ) {
        navigate("/Login");
      }
    });
  }, []);

  const handleClick = () => {
    localStorage.clear();
    updateIdentifier("");
    updateToken("");
    updateIsLogged(false);
  };
  return (
    <>
      <div className="header">
        <nav className="header__links">
          <NavLink to="/">01. Home</NavLink>
          <NavLink to="/projects">02. Projects</NavLink>
          <NavLink to="/contact">03. Contact</NavLink>
          {isLogged ? (
            <>
              <NavLink to="/dashboard">
                <FontAwesomeIcon icon={faLock} /> Dashboard
              </NavLink>
              <div onClick={handleClick}>
                <Link to="/">
                  <FontAwesomeIcon icon={faUser} /> Disconnect({identifier})
                </Link>
              </div>
            </>
          ) : null}
        </nav>
      </div>
    </>
  );
};

export default Header;
