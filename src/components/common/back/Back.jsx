import React from "react";
import { useLocation } from "react-router-dom";

const Back = ({ title, bgImage }) => {
  const location = useLocation();
  const defaultBgImage = "../../../../images/back.webp";
  const backgroundImage = bgImage || defaultBgImage;

  return (
    <>
      <section
        className="back"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h2>Home / {location.pathname.split("/")[1]}</h2>
        <h1>{title}</h1>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Back;
