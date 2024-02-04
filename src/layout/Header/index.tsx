import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import { useAppStore } from "../../store/store";
import "./style.scss";

const Header = () => {
  const {
    identifier,
    updateIdentifier,
    updateToken,
    isLogged,
    updateIsLogged,
  } = useAppStore();

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
