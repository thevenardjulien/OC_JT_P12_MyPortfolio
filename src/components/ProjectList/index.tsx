import Project from "../Project";

const ProjectList = ({ postsList, listSize }) => {
  return postsList
    .toReversed()
    .slice(0, listSize)
    .map((post, index: number) => (
      <Project
        key={index}
        category={post.Category}
        title={post.Title}
        description={post.Description}
        imageUrl={post.ImageUrl}
      />
    ));
};

export default ProjectList;
