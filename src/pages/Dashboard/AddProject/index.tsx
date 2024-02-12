import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { addProject } from "../../../services/projectAPI";
import "./style.scss";

const AddProject = () => {
  const form = useRef();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const category = form.current.category.value;
    const title = form.current.title.value;
    const description = form.current.description.value;
    const imageFile = form.current.image.files[0];
    const github = form.current.github.value;
    const lien = form.current.lien.value;

    const formData = new FormData();
    formData.append("category", category);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("images", imageFile);
    formData.append("github", github);
    formData.append("lien", lien);

    addProject(formData, token);
    form.current.reset();
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
