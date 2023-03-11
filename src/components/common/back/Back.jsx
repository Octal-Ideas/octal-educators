import React from "react";
import { useLocation } from "react-router-dom";

const Back = ({ title, bgImage }) => {
  // useLocation is a hook from the "react-router-dom" package that returns the current location object
  const location = useLocation();

  // defaultBgImage is the image that is displayed in the background if no other image is provided
  const defaultBgImage = "../../../../images/back.webp";

  // If a bgImage prop is provided, set backgroundImage to that image; otherwise, set it to defaultBgImage
  const backgroundImage = bgImage || defaultBgImage;

  return (
    <>
      <section
        className="back"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Display a breadcrumb navigation with the current location */}
        <h2>Home / {location.pathname.split("/")[1]}</h2>
        {/* Display the title of the page */}
        <h1>{title}</h1>
      </section>
      {/* Create some margin below the Back component */}
      <div className="margin"></div>
    </>
  );
};

export default Back;
