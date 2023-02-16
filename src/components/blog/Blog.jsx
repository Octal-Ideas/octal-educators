import React from "react";
import Back from "../common/back/Back";
import "./blog.css";
import { useParams } from "react-router-dom";
import { blog } from "../../dummydata";

const Blog = () => {
  // Get the blog ID from the URL
  const { id } = useParams();
  // Find the blog with the matching ID from the dummy data
  const eachBlog = blog.filter((blog) => blog.id === parseInt(id))[0];

  // If the blog isn't found, display an error message
  if (!blog) {
    return <div>Blog not found</div>;
  }

  // Render the blog post and a back button with the blog title and cover image
  return (
    <>
      <Back title="Blog" bgImage={eachBlog.cover} />
      <section className="blog padding">
        <div className="container grid2">
          {" "}
          <h2>{eachBlog.title}</h2>
          <p>{eachBlog.content}</p>
        </div>
      </section>
    </>
  );
};

export default Blog;
