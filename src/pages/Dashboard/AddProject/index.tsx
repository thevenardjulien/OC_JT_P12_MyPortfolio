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

    const {
      category,
      title,
      description,
      mainImage,
      galleryImages,
      github,
      lien,
    } = form.current;

    const formData = new FormData();
    formData.append("category", category.value);
    formData.append("title", title.value);
    formData.append("description", description.value);
    formData.append("images", mainImage.files[0]);

    for (let i = 0; i < galleryImages.files.length; i++) {
      formData.append("gallery", galleryImages.files[i]);
    }

    formData.append("github", github.value);
    formData.append("lien", lien.value);

    addProject(formData, token)
      .then(() => {
        form.current?.reset();
        navigate("/");
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout du projet :", error);
      });
  };

  return (
    <form ref={form} className="addProject" onSubmit={(e) => handleSubmit(e)}>
      <label className="addProject__label" htmlFor="category">
        Catégorie
      </label>
      <input
        className="addProject__input"
        type="text"
        name="category"
        id="category"
        required
      />
      <label className="addProject__label" htmlFor="title">
        Titre
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

      <label className="addProject__label" htmlFor="mainImage">
        Image Principale
      </label>
      <input
        className="addProject__input"
        type="file"
        name="mainImage"
        id="mainImage"
        accept="image/*"
        required
      />

      <label className="addProject__label" htmlFor="galleryImages">
        Galerie d'Images (jusqu'à 5 fichiers)
      </label>
      <input
        className="addProject__input"
        type="file"
        name="galleryImages"
        id="galleryImages"
        accept="image/*"
        multiple
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
        Soumettre
      </button>
    </form>
  );
};

export default AddProject;
