import React from "react";
import Back from "../common/back/Back";
import BlogCard from "./BlogCard";
import "./blog.css";

import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/blog/add");
  }
  return (
    <>
      <Back title="Blog Posts" />
      <section className="blog padding">
        <button onClick={handleClick}>Go to Add Blog</button>
        <div className="container grid2">
          <BlogCard />
        </div>
      </section>
    </>
  );
};

export default Blogs;
