import { useEffect, useState } from "react";
import ProjectList from "../../components/ProjectList";
import SectionTitle from "../../components/SectionTitle";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import { findPosts } from "../../services/postsAPI";
import "./style.scss";

const Projects = () => {
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
