import Medias from "../../components/Medias";
import "./style.scss";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="Wrapper">
        <Medias />
      </div>
      <div className="Wrapper">
        <Medias />
      </div>
      <div className="Wrapper">
        <Medias />
      </div>
      <div className="Wrapper">
        <Medias />
      </div>
    </div>
  );
};

export default Sidebar;
