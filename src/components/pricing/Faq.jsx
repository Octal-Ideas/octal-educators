import React, { useRef, useState } from "react";
import { faq } from "../../dummydata"; // import faq data from dummydata
import Heading from "../common/heading/Heading"; // import Heading component

const Faq = () => {
  const [click, setClick] = useState(false); // initialize state for clicked item

  const toggle = (index) => {
    // function to toggle clicked item
    if (click === index) {
      // if clicked item is already open, close it
      return setClick(null);
    }
    setClick(index); // otherwise, set clicked item as open
  };

  return (
    <>
      <Heading subtitle="FAQS" title="Frequently Asked Questions" /> // render
      the Heading component with props
      <section className="faq">
        {" "}
        // FAQ section
        <div className="container">
          {faq.map(
            (
              val,
              index // map over the faq data
            ) => (
              <div className="box" key={val.id}>
                {" "}
                // create a box for each question
                <button
                  className="accordion"
                  onClick={() => toggle(index)} // handle click event and pass the index
                  key={index} // set key to index
                >
                  <h2>{val.title}</h2> // render question title
                  <span>
                    {click === index ? ( // render arrow icon depending on whether the question is open or not
                      <i className="fa fa-chevron-down"></i>
                    ) : (
                      <i className="fa fa-chevron-right"></i>
                    )}
                  </span>
                </button>
                {click === index ? ( // if clicked item is open, render its description
                  <div className="text">
                    <p>{val.desc}</p>
                  </div>
                ) : null}
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
};

export default Faq; // export Faq component
