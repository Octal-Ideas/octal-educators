import React from "react";
import Heading from "../../common/heading/Heading";
import { Link } from "react-router-dom";

import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO OCTAL"
              title="Best Online Education Expertise"
            />
            <p>
              Code your story, design your future. Octal Ideas, where creativity
              meets technology to help you build the life you've always
              imagined.
            </p>
            <div className="button">
              <Link to="/contact">
                <button className="primary-btn">
                  GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
                </button>
              </Link>
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
      <div className="margin"></div>
    </>
  );
};

export default Hero;
