import React from "react";
import Back from "../common/back/Back";
import "./blog.css";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  return (
    <>
      <Back title="Blog" />
      <section className="blog padding">
        <div className="container grid2">Hello World + {id}</div>
      </section>
    </>
  );
};

export default Blog;
