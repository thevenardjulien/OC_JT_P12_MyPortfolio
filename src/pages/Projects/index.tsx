import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import ProjectList from "../../components/ProjectList";
import SectionTitle from "../../components/SectionTitle";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import { getAllProjects } from "../../services/projectAPI";
import "./style.scss";

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const projects = await getAllProjects();
    setPosts(projects);
    setIsLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

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
