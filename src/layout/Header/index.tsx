import { Link, NavLink } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>MY PORTFOLIO</h1>
      </Link>
      <nav className="header__links">
        <NavLink to="/">01. Accueil</NavLink>
        <NavLink to="/contact">02. Contact</NavLink>
      </nav>
    </div>
  );
};

export default Header;
