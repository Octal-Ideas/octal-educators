import React from "react";
import OnlineCourses from "../allCourses/OnlineCourses";
import Heading from "../common/heading/Heading";
import "../allCourses/courses.css";
import { coursesCard } from "../../dummydata";

// Component for the Home About section
const HAbout = () => {
  // Render the following JSX code
  return (
    <>
      <section className="homeAbout">
        <div className="container">
          {/* Heading component with subtitle and title */}
          <Heading
            subtitle="our courses"
            title="explore our popular online courses"
          />

          {/* Container for displaying courses */}
          <div className="coursesCard">
            {/* Grid layout for displaying course items */}
            <div className="grid2">
              {/* Loop through coursesCard array and display the first 3 items */}
              {coursesCard.slice(0, 3).map((val) => (
                // Each course item is wrapped in a div with a unique key
                <div className="items" key={val.id}>
                  {/* Left side of the course item */}
                  <div className="content flex">
                    <div className="left">
                      <div className="img">
                        {/* Display the course cover image */}
                        <img src={val.cover} alt="" />
                      </div>
                    </div>
                    {/* Right side of the course item */}
                    <div className="text">
                      {/* Display the course name */}
                      <h1>{val.coursesName}</h1>
                      {/* Display the course rating */}
                      <div className="rate">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <label htmlFor="">(5.0)</label>
                      </div>
                      {/* Display the details of the course */}
                      <div className="details">
                        {val.courTeacher.map((details) => (
                          <div key={details.id}>
                            <div className="box">
                              <div className="dimg">
                                {/* Display the teacher's image */}
                                <img src={details.dcover} alt="" />
                              </div>
                              <div className="para">
                                {/* Display the teacher's name */}
                                <h4>{details.name}</h4>
                              </div>
                            </div>
                            {/* Display the total time of the course */}
                            <span>{details.totalTime}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Display the course price */}
                  <div className="price">
                    <h3>
                      {val.priceAll} / {val.pricePer}
                    </h3>
                  </div>
                  {/* Enroll now button */}
                  <button className="outline-btn">ENROLL NOW !</button>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Render the OnlineCourses component */}
        <OnlineCourses />
      </section>
    </>
  );
};

export default HAbout;
