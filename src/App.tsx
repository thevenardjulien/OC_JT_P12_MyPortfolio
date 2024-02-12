import { useEffect, useState } from "react";
import "./App.scss";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import ProjectList from "./components/ProjectList";
import SectionTitle from "./components/SectionTitle";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import { getAllProjects } from "./services/projectAPI";

function App() {
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

  useEffect(() => {}, [posts]);

  return (
    <>
      <Header />
      <Hero />
      <main>
        <div className="mainWrapper">
          <section className="mainWrapper__content">
            {!isLoading && posts ? (
              <>
                <SectionTitle title="SELECTED PROJECTS" />
                <ProjectList postsList={posts} listSize="3" />
              </>
            ) : (
              <Loader />
            )}
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
