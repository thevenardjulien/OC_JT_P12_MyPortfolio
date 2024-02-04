import { Link } from "react-router-dom";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import { useAppStore } from "../../store/store";
import AddPostModule from "./AddPostModule";
import "./style.scss";

const Dashboard = () => {
  const { updateIdentifier, updateToken, isLogged, updateIsLogged } =
    useAppStore();

  const handleClick = () => {
    localStorage.removeItem("identifier");
    localStorage.removeItem("token");
    updateIdentifier("");
    updateToken("");
    updateIsLogged(false);
  };
  return (
    <>
      <Header />
      <main>
        {isLogged === true ? (
          <div className="dashboard__wrapper">
            <div className="modules__wrapper">
              <div className="module">
                <AddPostModule />
              </div>
            </div>
            <Link to="/" onClick={handleClick}>
              Logout
            </Link>
          </div>
        ) : (
          "Accès refusé."
        )}
      </main>
      <Footer />
    </>
  );
};
export default Dashboard;
