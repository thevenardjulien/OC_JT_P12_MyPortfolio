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

  useEffect(() => {
    const getPosts = async () => {
      const responsePosts = await findPosts();
      setPosts(responsePosts.data);
    };
    getPosts();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <main>
        <div className="mainWrapper">
          {posts.length === 0 ? null : (
            <section className="mainWrapper__content">
              <SectionTitle title="LATEST PROJECTS" />
              <ProjectList postsList={posts} />
            </section>
          )}
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
