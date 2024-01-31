import "./style.scss";

const AddPostModule = () => {
  return (
    <div>
      <h2>Add Post</h2>
      <hr />
      <form className="AddPostForm" action="#">
        <label htmlFor="title">Title</label>
        <input type="text" />
        <label htmlFor="category">Category</label>
        <input type="text" />
        <label htmlFor="description">Description</label>
        <textarea />
        <label htmlFor="image">Image</label>
        <input type="file" />
        <button className="AddPostForm__btn" type="submit">
          Send new Post
        </button>
      </form>
    </div>
  );
};
export default AddPostModule;
