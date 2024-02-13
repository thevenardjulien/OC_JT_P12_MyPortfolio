import "./style.scss";

const Project = ({ category, title, description, images, github, lien }) => {
  const createBlobUrl = (data, contentType) => {
    const blob = new Blob([new Uint8Array(data.data)], { type: contentType });
    return URL.createObjectURL(blob);
  };

  return (
    <div className="Project">
      <hr className="Project__hr" />
      <div className="Project__content">
        <div className="Project__imgWrapper">
          {images && images.length > 0 && (
            <img
              className="Project__img"
              src={createBlobUrl(images[0].data, images[0].contentType)}
              alt={`${title} img`}
            />
          )}
        </div>
        <div className="Infos">
          <p className="Infos__category">{category}</p>
          <h3 className="Infos__title">{title}</h3>
          <p className="Infos__description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
