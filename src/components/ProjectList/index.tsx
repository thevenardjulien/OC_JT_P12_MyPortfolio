import Project from "../Project";

const ProjectList = ({ postsList, listSize }) => {
  return postsList
    .toReversed()
    .slice(0, listSize)
    .map((post, index: number) => (
      <div key={index}>
        <Project
          category={post.category}
          title={post.title}
          description={post.description}
          images={post.images}
          github={post.github}
          lien={post.lien}
        />
      </div>
    ));
};

export default ProjectList;
