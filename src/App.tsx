import "./App.scss";
import Hero from "./components/Hero";
import ProjectList from "./components/ProjectList";
import SectionTitle from "./components/SectionTitle";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import { latestProjects } from "./services/datas/latestsProjects";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <div className="mainWrapper">
          <section className="mainWrapper__content">
            <SectionTitle title="LATEST PROJECT" />
            <ProjectList list={latestProjects} />
          </section>
          <aside className="mainWrapper__aside">
            <Sidebar />
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
