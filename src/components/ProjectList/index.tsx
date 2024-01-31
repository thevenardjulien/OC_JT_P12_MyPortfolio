import Project from "../Project";

const ProjectList = ({ postsList }) => {
  return postsList
    .toReversed()
    .map((post, index) => (
      <Project
        key={index}
        category={post.attributes.Category}
        title={post.attributes.Title}
        description={post.attributes.Description}
        imageUrl={post.attributes.Image.data.attributes.formats.medium.url}
      />
    ));
};

export default ProjectList;
