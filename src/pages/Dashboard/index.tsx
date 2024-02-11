import "./style.scss";

import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import LastsProjects from "./LastsProjects";
import MessagesList from "./MessageList";

const Dashboard = () => {
  return (
    <>
      <Header />
      <main>
        <div className="Dashboard">
          <h1 className="Dashboard__title">Dashboard</h1>
          <br />
          <div className="modulesWrapper">
            <div className="modules">
              <h2>Latest posts</h2>
              <MessagesList />
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
