import React from "react";
import Back from "../common/back/Back";
import "./blog.css";
import { useParams } from "react-router-dom";
import { blog } from "../../dummydata";
import ReactMarkdown from "react-markdown";

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
      <Back title={eachBlog.title} bgImage={eachBlog.cover} />
      <section className="blog padding">
        <div className="container">
          <div dangerouslySetInnerHTML={{ __html: eachBlog.content }} />{" "}
        </div>
      </section>
    </>
  );
};

export default Blog;
