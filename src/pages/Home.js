import React, { useState } from "react";
import BlogList from "../components/BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const handleClick = (e) => {
    // preventDefault(e.target.value);
  };

  return (
    <div>
      <h2>HomePage</h2>
      <BlogList blogs={blogs} title="All blogs" />
      <BlogList
        blogs={blogs.filter((blog) => blog.author == "mario")}
        title="Mario's blogs"
      />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
