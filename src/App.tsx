import { useEffect, useState } from "react";
import "./App.scss";
import Hero from "./components/Hero";
import ProjectList from "./components/ProjectList";
import SectionTitle from "./components/SectionTitle";
import { localhost } from "./config";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";

function App() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    fetch(`${localhost}/api/posts?populate=*`, {
      method: "GET",
      headers: {
        Accept: "Application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setPosts(res.data));
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <main>
        <div className="mainWrapper">
          {posts && (
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
