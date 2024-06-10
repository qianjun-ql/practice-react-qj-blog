import React from "react";
import BlogList from "../components/BlogList";
import useFetch from "../hook/useFetch";

const Home = () => {
  const {
    data: blogs,
    loading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  return (
    <div>
      <h2>HomePage</h2>
      {error && <div>{error}</div>}
      {loading && !error && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author == "mario")}
        title="Mario's blogs"
      /> */}
      {/* <button onClick={() => setName("amy")}>Change Name</button>
      <p>{name}</p> */}
    </div>
  );
};

export default Home;
