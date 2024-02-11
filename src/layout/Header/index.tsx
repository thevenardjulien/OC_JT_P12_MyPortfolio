import { NavLink, useNavigate } from "react-router-dom";
import "./style.scss";

const Header = () => {
  const token = localStorage.getItem("token") || null;
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <div className="header">
        <nav className="header__links">
          <NavLink to="/">01. Home</NavLink>
          <NavLink to="/projects">02. Projects</NavLink>
          <NavLink to="/contact">03. Contact</NavLink>
          {token !== null ? (
            <>
              <NavLink to="/dashboard">0X. Dashboard</NavLink>
              <NavLink to="/" onClick={handleLogOut}>
                0X. Logout
              </NavLink>
            </>
          ) : null}
        </nav>
      </div>
    </>
  );
};

export default Header;
