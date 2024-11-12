// import CounterButton from "./count-example/counter-button";
// import CounterValue from "./count-example/counter-value";
import "./App.css";
import AddNewBlog from "./blog-app/add-new-blog";
import BlogList from "./blog-app/blog-list";
function App() {
  return (
    <div>
      <h1>Blog List App</h1>
      {/* <CounterButton />
      <CounterValue /> */}
      <AddNewBlog/>
      <BlogList />
    </div>
  );
}

export default App;
