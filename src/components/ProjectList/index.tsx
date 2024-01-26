import Project from "../Project";

const ProjectList = ({ list }) => {
  return list.map((project) => (
    <Project
      img={project.img}
      alt={project.alt}
      category={project.category}
      title={project.title}
      description={project.description}
    />
  ));
};

export default ProjectList;
