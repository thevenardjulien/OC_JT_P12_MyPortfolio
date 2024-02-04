import { useEffect, useState } from "react";
import ProjectList from "../../components/ProjectList";
import SectionTitle from "../../components/SectionTitle";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import { findPosts } from "../../services/postsAPI";
import "./style.scss";

const Projects = () => {
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
      <main>
        <section className="contentWrapper">
          {!isLoading ? (
            <>
              <SectionTitle title="ALL PROJECTS" />
              <ProjectList postsList={posts} listSize={Infinity} />
            </>
          ) : (
            "Loading...."
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
