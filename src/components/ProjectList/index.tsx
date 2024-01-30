import Project from "../Project";

interface ProjectContent {
  img: string;
  alt: string;
  category: string;
  title: string;
  description: string;
}

interface ProjectListProps {
  list: ProjectContent[];
}

const ProjectList: React.FC<ProjectListProps> = ({ list }) => {
  return list.map((project: ProjectContent, index: number) => (
    <Project
      key={index}
      img={project.img}
      alt={project.alt}
      category={project.category}
      title={project.title}
      description={project.description}
    />
  ));
};

export default ProjectList;
