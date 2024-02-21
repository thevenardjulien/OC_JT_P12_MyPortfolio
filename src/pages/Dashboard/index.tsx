import "./style.scss";

import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import AddProject from "./AddProject";
import LastsProjects from "./LastsProjects";
import MessagesList from "./MessageList";

const Dashboard = () => {
  return (
    <>
      <Header />
      <main>
        <div className="Dashboard">
          <h1 className="Dashboard__title">Dashboard</h1>
          <div className="modulesWrapper">
            <div className="modules">
              <h2>Latest Contacts</h2>
              <MessagesList />
            </div>
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
