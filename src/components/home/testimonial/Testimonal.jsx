import React from "react";
import { testimonal } from "../../../dummydata"; // importing dummy data for the testimonials
import Heading from "../../common/heading/Heading"; // importing the reusable Heading component
import "./style.css";

const Testimonal = () => {
  return (
    <>
      {/* A section with a class of "testimonal" */}
      <section className="testimonal padding">
        <div className="container">
          {/* Reusable Heading component with "TESTIMONIAL" as the subtitle and "Our Successful Students" as the title */}
          <Heading subtitle="TESTIMONIAL" title="Our Successful Students" />

          {/* A div with a class of "content" and "grid2" for grid layout */}
          <div className="content grid2">
            {/* Mapping over the dummy data array to display each testimonial */}
            {testimonal.map((val) => (
              <div className="items shadow" key={val.id}>
                {/* A div with a class of "box" and "flex" for flexible layout */}
                <div className="box flex">
                  {/* A div with a class of "img" to display the testimonial cover image */}
                  <div className="img">
                    <img src={val.cover} alt="" />
                    {/* A quote icon from Font Awesome */}
                    <i className="fa fa-quote-left icon"></i>
                  </div>
                  {/* A div with a class of "name" to display the name and post of the person who gave the testimonial */}
                  <div className="name">
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                {/* A paragraph to display the testimonial text */}
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonal;
