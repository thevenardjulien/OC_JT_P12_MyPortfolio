import { NavLink } from "react-router-dom";
import "./style.scss";

interface Button {
  text: string;
  link: string;
}

const Button = ({ text, link }: Button) => {
  return (
    <NavLink to={link}>
      <button>{text}</button>
    </NavLink>
  );
};

export default Button;
