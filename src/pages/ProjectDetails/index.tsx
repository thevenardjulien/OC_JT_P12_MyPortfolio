import { useParams } from "react-router-dom";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import "./style.scss";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { getAllProjects } from "../../services/projectAPI";
import Loader from "../../components/Loader";

const ProjectDetails = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState(undefined);
  const params = useParams();

  const getPost = async () => {
    try {
      const projects = await getAllProjects();
      setPost(projects.filter((project) => project.title === params.title));
    } catch (error) {
      toast.error("Unable to retrieve project list, try again later...");
      console.error(
        "Unable to retrieve project list, try again later...",
        error
      );
    } finally {
      console.log(post);
      // setIsLoading(false);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  const createBlobUrl = (data, contentType) => {
    const uint8Array = new Uint8Array(data.data);
    const blob = new Blob([uint8Array], { type: contentType });
    return URL.createObjectURL(blob);
  };

  return (
    <>
      <Header />
      <main>
        {post ? (
          <>
            <div className="postWrapper">
              <div>
                {post[0].images && post[0].images.length > 0 && (
                  <img
                    className="postWrapper__img"
                    src={createBlobUrl(
                      post[0].images[0].data,
                      post[0].images[0].contentType
                    )}
                    alt={post[0].title}
                  />
                )}
              </div>
              <div className="postWrapper__infos">
                <div>{post[0].title}</div>
                <div>{post[0].category}</div>
                <div>{post[0].description}</div>
                <div>{post[0].github}</div>
                <div>{post[0].lien}</div>
              </div>
            </div>
          </>
        ) : (
          <Loader />
        )}
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetails;
