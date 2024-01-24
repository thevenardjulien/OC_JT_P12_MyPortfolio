import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>MY PORTFOLIO</div>
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/">Contact</NavLink>
    </div>
  );
};

export default Header;
