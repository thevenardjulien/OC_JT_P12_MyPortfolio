import Socials from "../../components/Socials";
import Tools from "../../components/Tools";
import "./style.scss";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="Wrapper">
        <Socials />
      </div>
      <div className="Wrapper">
        <Tools />
      </div>
    </div>
  );
};

export default Sidebar;
