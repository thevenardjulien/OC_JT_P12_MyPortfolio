import { useState } from "react";
import { AllProjects } from "../../assets/datas/AllProjects";
import Loader from "../../components/Loader";
import ProjectList from "../../components/ProjectList";
import SectionTitle from "../../components/SectionTitle";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import "./style.scss";

const Projects = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState(AllProjects);

  return (
    <>
      <Header />
      <main>
        <section className="contentWrapper">
          {!isLoading ? (
            <>
              <SectionTitle title="ALL PROJECTS" />
              <ProjectList postsList={posts} listSize={Infinity} />
            </>
          ) : (
            <Loader />
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
