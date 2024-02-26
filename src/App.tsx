import { useEffect, useState } from "react";
import "./App.scss";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import ProjectList from "./components/ProjectList";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { getAllProjects } from "./services/projectAPI";
import { toast } from "sonner";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";
import Socials from "./components/Socials";

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
          <div>
            <h2 className="main-title">MY SKILLS</h2>
            <Skills />
          </div>
          {!isLoading && posts ? (
            <div>
              <h2 className="main-title">SELECTED PROJECTS</h2>
              <ProjectList postsList={posts} listSize="3" />
            </div>
          ) : (
            <Loader />
          )}
          <div>
            <h2 className="main-title">CONTACT ME</h2>
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
