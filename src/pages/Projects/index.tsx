import { useState } from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Loader from "../../components/Loader";
import { toast } from "sonner";
import SectionTitle from "../../components/SectionTitle";
import ProjectList from "../../components/ProjectList";
import { getAllProjects } from "../../services/projectAPI";
import "./style.scss";

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const projects = await getAllProjects();
      setPosts(projects);
    } catch (error) {
      toast.error("Unable to retrieve project lists, try again later...");
    } finally {
      setIsLoading(false);
    }
  };

  getPosts();

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
