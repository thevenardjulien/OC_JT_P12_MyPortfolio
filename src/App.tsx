import { useEffect, useState } from "react";
import "./App.scss";
import Hero from "./components/Hero";
import ProjectList from "./components/ProjectList";
import SectionTitle from "./components/SectionTitle";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import { findPosts } from "./services/postsAPI";

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      const responsePosts = await findPosts();
      if (responsePosts.data.length > 0) {
        setPosts(responsePosts.data);
        setIsLoading(false);
      }
    };
    getPosts();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <main>
        <div className="mainWrapper">
          <section className="mainWrapper__content">
            {!isLoading ? (
              <>
                <SectionTitle title="SELECTED PROJECTS" />
                <ProjectList postsList={posts} listSize="3" />
              </>
            ) : (
              "Loading..."
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
