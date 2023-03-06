import React from "react";
import "./courses.css";
import { online } from "../../dummydata";
import Heading from "../common/heading/Heading";

const OnlineCourses = () => {
  return (
    <>
      {/* The section that displays the online courses */}
      <section className="online">
        <div className="container">
          {/* The heading of the section */}
          <Heading subtitle="COURSES" title="Browse Our Online Courses" />
          {/* The content of the section, which displays the online course boxes */}
          <div className="content grid3">
            {online.map((val) => (
              <div className="box" key={val.id}>
                <div className="img">
                  {/* The image of the online course */}
                  <img src={val.cover} />
                  {/* The image that appears when the user hovers over the course */}
                  <img src={val.hoverCover} alt="" className="show" />
                </div>
                {/* The name of the online course */}
                <h1>{val.courseName}</h1>
                {/* The type of course */}
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
