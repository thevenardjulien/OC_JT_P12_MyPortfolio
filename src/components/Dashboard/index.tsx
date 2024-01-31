import { Link } from "react-router-dom";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import AddPostModule from "./AddPostModule";
import "./style.scss";

const Dashboard = () => {
  const handleClick = () => {
    localStorage.removeItem("token");
  };
  return (
    <>
      <Header />
      <main>
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
      </main>
      <Footer />
    </>
  );
};
export default Dashboard;
