import React from "react";
import Hero from "./hero/Hero"; // Importing Hero component from hero directory
import AboutCard from "../about/AboutCard"; // Importing AboutCard component from about directory
import Hblog from "./Hblog"; // Importing Hblog component from current directory
import HAbout from "./HAbout"; // Importing HAbout component from current directory
import Hprice from "./Hprice"; // Importing Hprice component from current directory
import Testimonial from "./testimonial/Testimonal"; // Importing Testimonial component from testimonial directory

const Home = () => {
  // Render function
  return (
    <>
      <Hero /> {/* Render Hero component */}
      <AboutCard /> {/* Render AboutCard component*/}
      <HAbout /> {/* Render HAbout component*/}
      <Testimonial /> {/* Render Testimonial component*/}
      <Hblog /> {/* Render Hblog component*/}
      <Hprice /> {/* Render Hprice component*/}
    </>
  );
};

export default Home; // Export Home component as default
