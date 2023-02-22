import React from "react";
import { blog } from "../../dummydata";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <>
      {blog.map((val) => (
        <div className="items shadow" key={val.id}>
          <div className="img">
            <img src={val.cover} alt={val.title} />
          </div>
          <div className="text">
            <div className="admin flexSB">
              <span>
                <i className="fa fa-user"></i>
                <label htmlFor="">{val.type}</label>
              </span>
              <span>
                <i className="fa fa-calendar-alt"></i>
                <label htmlFor="">{val.date}</label>
              </span>
              <span>
                <i className="fa fa-comments"></i>
                <label htmlFor="">{val.com}</label>
              </span>
            </div>
            <Link to={`/blog/${val.id}`}>
              <h1>{val.title}</h1>
            </Link>

            <p>{val.desc}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogCard;
