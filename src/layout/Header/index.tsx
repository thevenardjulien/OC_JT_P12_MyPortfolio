import { NavLink } from "react-router-dom";
import "./style.scss";

const Header = () => {
  return (
    <div className="header">
      <nav className="header__links">
        <NavLink to="/">01. Home</NavLink>
        <NavLink to="/projects">02. Projects</NavLink>
        <NavLink to="/contact">03. Contact</NavLink>
      </nav>
    </div>
  );
};

export default Header;
