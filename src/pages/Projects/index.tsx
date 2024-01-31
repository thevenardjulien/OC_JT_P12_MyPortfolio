import { useEffect, useState } from "react";
import ProjectList from "../../components/ProjectList";
import SectionTitle from "../../components/SectionTitle";
import { localhost } from "../../config";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import "./style.scss";

const Projects = () => {
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
      <main>
        {posts && (
          <section className="contentWrapper">
            <SectionTitle title="ALL PROJECTS" />
            <ProjectList postsList={posts} />
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Projects;
