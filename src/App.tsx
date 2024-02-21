import { useEffect, useState } from "react";
import "./App.scss";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import ProjectList from "./components/ProjectList";
import SectionTitle from "./components/SectionTitle";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { getAllProjects } from "./services/projectAPI";
import { toast } from "sonner";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const projects = await getAllProjects();
      setPosts(projects);
    } catch (error) {
      toast.error("Unable to retrieve project list, try again later...");
      console.error(
        "Unable to retrieve project list, try again later...",
        error
      );
    } finally {
      setIsLoading(false);
      console.log(posts);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <main>
        <div className="mainWrapper">
          {!isLoading && posts ? (
            <>
              <SectionTitle title="SELECTED PROJECTS" />
              <ProjectList postsList={posts} listSize="3" />
            </>
          ) : (
            <Loader />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
