import React from "react";
import { blog } from "../../dummydata"; // Importing dummy data containing blog post information
import { Link } from "react-router-dom"; // Importing Link component from react-router-dom

// Function that returns blog post information in a card format
const BlogCard = () => {
  return (
    <>
      {blog.map((val) => (
        <div className="items shadow" key={val.id}>
          {" "}
          {/* Container div for blog post */}
          <div className="img">
            {" "}
            {/* Div for blog post image */}
            <img src={val.cover} alt={val.title} /> {/* Blog post image */}
          </div>
          <div className="text">
            {" "}
            {/* Div for blog post text information */}
            <div className="admin flexSB">
              {" "}
              {/* Div containing meta information of blog post */}
              <span>
                <i className="fa fa-user"></i>
                <label htmlFor="">{val.type}</label> {/* Type of blog post */}
              </span>
              <span>
                <i className="fa fa-calendar-alt"></i>
                <label htmlFor="">{val.date}</label> {/* Date of blog post */}
              </span>
              <span>
                <i className="fa fa-comments"></i>
                <label htmlFor="">{val.com}</label>{" "}
                {/* Number of comments of blog post */}
              </span>
            </div>
            <Link to={`/blog/${val.id}`}>
              <h1>{val.title}</h1> {/* Title of blog post */}
            </Link>
            <p>{val.desc}</p> {/* Description of blog post */}
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogCard;
