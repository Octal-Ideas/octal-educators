import React from "react";
import Heading from "../../common/heading/Heading";
import { Link } from "react-router-dom";

import "./Hero.css";

const Hero = () => {
  // The Hero component displays a hero section of the website which contains a welcome message,
  // a brief description of the website's services, and buttons to navigate to other pages.

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            {/* The Heading component displays a title and a subtitle */}
            <Heading
              subtitle="WELCOME TO OCTAL"
              title="Best Online Education Expertise"
            />
            {/* A brief description of the website */}
            <p>
              Code your story, design your future. Octal Ideas, where creativity
              meets technology to help you build the life you've always
              imagined.
            </p>
            <div className="button">
              {/* A button to navigate to the contact page */}
              <Link to="/contact">
                <button className="primary-btn">
                  GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
                </button>
              </Link>
              {/* A button to navigate to the pricing page */}
              <Link to="/pricing">
                {" "}
                <button>
                  VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* A div element to add some margin */}
      <div className="margin"></div>
    </>
  );
};

export default Hero;
