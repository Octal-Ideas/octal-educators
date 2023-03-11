import React from "react";
import Back from "../common/back/Back";
import BlogCard from "./BlogCard";
import "./blog.css";

import { useNavigate } from "react-router-dom";

const Blogs = () => {
  // use the useNavigate hook to programmatically navigate to another route
  const navigate = useNavigate();
  
  // function that handles click event on the button and calls the navigate function to go to the /blog/add route
  function handleClick() {
    navigate("/blog/add");
  }
  
  return (
    <>
      {/* Back component with a title prop set to "Blog Posts" */}
      <Back title="Blog Posts" />
      <section className="blog padding">
        {/* button element that triggers handleClick function on click */}
        <button onClick={handleClick}>Go to Add Blog</button>
        {/* container div with a grid2 class */}
        <div className="container grid2">
          {/* BlogCard component */}
          <BlogCard />
        </div>
      </section>
    </>
  );
};

export default Blogs;