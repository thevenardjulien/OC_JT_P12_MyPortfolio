import Project from "../Project";

const ProjectList = ({ postsList, listSize }) => {
  return postsList
    .toReversed()
    .slice(0, listSize)
    .map((post, index: number) => (
      <Project
        key={index}
        category={post.category}
        title={post.title}
        description={post.description}
        imageUrl={post.imageUrl}
        github={post.github}
        lien={post.lien}
      />
    ));
};

export default ProjectList;
