import React from "react";
import "./about.css";
import Back from "../common/back/Back";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <>
      <Back title="About Us" />{" "}
      {/* Renders a Back component with title 'About Us' */}
      <AboutCard /> {/* Renders an AboutCard component */}
    </>
  );
};

export default About;
