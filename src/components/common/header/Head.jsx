import React from "react";

// Define a functional component named `Head`
const Head = () => {
  // Return JSX code to render a section containing the company logo and social media icons
  return (
    <>
      {/* A section with class name `head` */}
      <section className="head">
        {/* A div with class name `container` and `flexSB` */}
        <div className="container flexSB">
          {/* A div with class name `logo` */}
          <div className="logo">
            {/* An image tag with the company logo */}
            <img src="/images/octalideas.svg" alt="octal logo" />
            {/* A commented out span tag */}
            {/* <span>ONLINE EDUCATION & LEARNING</span> */}
          </div>
          {/* A div with class name `social` */}
          <div className="social">
            {/* A link to the company's Facebook page */}
            <a href="https://www.facebook.com" target="_blank" rel="noopener">
              <i className="fab fa-facebook-f icon"></i>
            </a>
            {/* A link to the company's Instagram page */}
            <a href="https://www.instagram.com/" target="_blank" rel="noopener">
              <i className="fab fa-instagram icon"></i>
            </a>
            {/* A link to the company's Twitter page */}
            <a href="https://www.twitter.com" target="_blank" rel="noopener">
              <i className="fab fa-twitter icon"></i>
            </a>
            {/* A link to the company's YouTube page */}
            <a href="https://www.youtube.com" target="_blank" rel="noopener">
              <i className="fab fa-youtube icon"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

// Export the `Head` component as the default export of this module
export default Head;
