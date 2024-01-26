import "./style.scss";

const Project = ({ img, alt, category, title, description }) => {
  return (
    <div className="Project">
      <hr className="Project__hr" />
      <div className="Project__content">
        <div className="Project__imgWrapper">
          <img className="Project__img" src={img} alt={alt} />
        </div>
        <div className="Infos">
          <p className="Infos__category">{category}</p>
          <h4 className="Infos__title">{title}</h4>
          <p className="Infos__description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
