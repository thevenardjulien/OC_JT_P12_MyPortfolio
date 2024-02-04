import { useRef } from "react";
import { addPost } from "../../../services/postsAPI";
import "./style.scss";

const AddPostModule = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    const title = form.current.title.value;
    const category = form.current.category.value;
    const description = form.current.description.value;
    const image = form.current.image.files[0];

    // console.log("Title:", title);
    // console.log("Category:", category);
    // console.log("Description:", description);
    // console.log("Image:", image);
    const formData = new FormData();

    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("image", image);

    for (const entry of formData.entries()) {
      console.log(entry[0] + ", " + entry[1]);
    }

    addPost(formData);
  };

  return (
    <div>
      <h2>Add Post</h2>
      <hr />
      <form
        ref={form}
        className="AddPostForm"
        action="#"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label htmlFor="title">Title</label>
        <input type="text" name="title" />
        <label htmlFor="category">Category</label>
        <input type="text" name="category" />
        <label htmlFor="description">Description</label>
        <textarea name="description" />
        <label htmlFor="image">Image</label>
        <input type="file" name="image" />
        <button className="AddPostForm__btn" type="submit">
          Send new Post
        </button>
      </form>
    </div>
  );
};
export default AddPostModule;
