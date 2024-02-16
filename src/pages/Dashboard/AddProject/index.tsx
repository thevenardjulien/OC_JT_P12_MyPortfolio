import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { addProject } from "../../../services/projectAPI";
import "./style.scss";

const AddProject = () => {
  const form = useRef(null);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { category, title, description, image, github, lien } = form.current;

    const formData = new FormData();
    formData.append("category", category.value);
    formData.append("title", title.value);
    formData.append("description", description.value);
    formData.append("images", image.files[0]);
    formData.append("github", github.value);
    formData.append("lien", lien.value);

    addProject(formData, token);
    form.current?.reset();
    navigate("/");
  };
  return (
    <form ref={form} className="addProject" onSubmit={(e) => handleSubmit(e)}>
      <label className="addProject__label" htmlFor="category">
        Category
      </label>
      <input
        className="addProject__input"
        type="text"
        name="category"
        id="category"
        required
      />
      <label className="addProject__label" htmlFor="title">
        Title
      </label>
      <input
        className="addProject__input"
        type="text"
        name="title"
        id="title"
        required
      />
      <label className="addProject__label" htmlFor="description">
        Description
      </label>
      <textarea
        className="addProject__textarea"
        name="description"
        id="description"
        required
      ></textarea>
      <label className="addProject__label" htmlFor="imageUrl">
        ImageUrl
      </label>
      <input
        className="addProject__input"
        type="file"
        name="image"
        id="image"
        accept="image/*"
        required
      />
      <label className="addProject__label" htmlFor="github">
        Repo Github
      </label>
      <input
        className="addProject__input"
        type="text"
        name="github"
        id="github"
      />
      <label className="addProject__label" htmlFor="lien">
        Lien
      </label>
      <input className="addProject__input" type="text" name="lien" id="lien" />
      <button className="addProject__button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default AddProject;
