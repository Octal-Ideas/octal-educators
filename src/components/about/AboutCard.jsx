import React from "react";
import Heading from "../common/heading/Heading";
import "./about.css";
import { homeAbout } from "../../dummydata";
import Awrapper from "./Awrapper";

const AboutCard = () => {
  return (
    <>
      {/* Section for the main content */}
      <section className="aboutHome">
        {/* Container for the left and right columns */}
        <div className="container flexSB">
          {/* Left column for the image */}
          <div className="left row">
            <img src="./images/about.webp" alt="" />
          </div>
          {/* Right column for the main text */}
          <div className="right row">
            {/* Heading component with a subtitle and title */}
            <Heading
              subtitle="CODE NOW"
              title="Get the Education You Need, Wherever You Are: Online & In-Person"
            />
            {/* Div for the items */}
            <div className="items">
              {/* Map through the homeAbout array */}
              {homeAbout.map((val) => {
                return (
                  // Div for each item
                  <div className="item flexSB" key={val.id}>
                    {/* Div for the item image */}
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    {/* Div for the item text */}
                    <div className="text">
                      {/* Heading for the item title */}
                      <h2>{val.title}</h2>
                      {/* Paragraph for the item description */}
                      <p>{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* Component for the additional content */}
      <Awrapper />
    </>
  );
};

export default AboutCard;
