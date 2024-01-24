import { NavLink } from "react-router-dom";
import "./style.scss";

const Button = ({ text, link }) => {
  return (
    <NavLink to={link}>
      <button>{text}</button>
    </NavLink>
  );
};

export default Button;
