import { useEffect, useState } from "react";
import "./App.scss";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import ProjectList from "./components/ProjectList";
import SectionTitle from "./components/SectionTitle";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
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
  }, [isLoading]);

  useEffect(() => {}, [posts]);

  return (
    <>
      <Header />
      <Hero />
      <main>
        <div className="mainWrapper">
          {!isLoading && posts ? (
            <>
              <SectionTitle title="Selected Projects" />
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
