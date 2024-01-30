import { latestProjects } from "../../assets/datas/latestsProjects";
import ProjectList from "../../components/ProjectList";
import SectionTitle from "../../components/SectionTitle";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import "./style.scss";

const Projects = () => {
  return (
    <>
      <Header />
      <main>
        <section className="mainWrapper__content">
          <SectionTitle title="LATEST PROJECT" />
          <ProjectList list={latestProjects} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
