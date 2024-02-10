import { useState } from "react";
import "./App.scss";
import { PostsList } from "./assets/datas/PostsList";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import ProjectList from "./components/ProjectList";
import SectionTitle from "./components/SectionTitle";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const posts = PostsList;

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
