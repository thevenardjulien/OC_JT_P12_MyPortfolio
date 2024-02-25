import "./style.scss";

import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import AddProject from "./AddProject";
import LastsProjects from "./LastsProjects";

const Dashboard = () => {
  return (
    <>
      <Header />
      <main>
        <h1 className="Dashboard__title">Dashboard</h1>
        <div className="Dashboard">
          <div className="modulesWrapper">
            <div className="modules">
              <h2>Add Project</h2>
              <AddProject />
            </div>
            <div className="modules">
              <h2>Lasts Projects</h2>
              <LastsProjects />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
