import { useDispatch, useSelector } from "react-redux";
import {
  handleAddToDo,
  handleEditBlog,
  handleInputChange,
  setCurrentEditedBlogId,
} from "../store/slices/blogSlice";

function AddNewBlog() {
  const { blog } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { currentEditedBlogId } = blog;

  function OnChangeInput(event) {
    dispatch(
      handleInputChange({
        [event.target.name]: event.target.value,
      })
    );
  }
  function handleToDoSubmit(event) {
    event.preventDefault();
    if (currentEditedBlogId !== null) dispatch(handleEditBlog());
    else dispatch(handleAddToDo());
    if (currentEditedBlogId !== null) dispatch(setCurrentEditedBlogId({
        currentBlogId: null
    }));
    dispatch(
      handleInputChange({
        discription: "",
        title: "",
      })
    );
  }
  return (
    <div>
      <form onSubmit={handleToDoSubmit}>
        <div>
          <label>Enter Blog Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter Blog Title"
            id="title"
            onChange={OnChangeInput}
            value={blog?.formData?.title}
          />
        </div>
        <div>
          <label>Enter Blog Description</label>
          <input
            type="text"
            name="discription"
            placeholder="Enter blog Description "
            id="description"
            value={blog?.formData?.discription}
            onChange={OnChangeInput}
          />
        </div>
        <button type="submit">
          {blog?.currentEditedBlogId ? "Edit Blog" : "Add new Blog"}
        </button>
      </form>
    </div>
  );
}

export default AddNewBlog;
