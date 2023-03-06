import React from "react";
import { blog } from "../../../dummydata"; // import the dummydata for recent posts
import "./footer.css"; // import the footer styles
import { Link } from "react-router-dom"; // import the Link component from react-router-dom

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      {/* Newsletter section */}
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Stay tune and get the latest update</span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>

      {/* Main footer section */}
      <footer>
        <div className="container padding">
          {/* Logo box */}
          <div className="box logo">
            <h1>OCTAL</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>
              where creativity meets technology to help you build the life
              you've always imagined.
            </p>

            {/* Social media icons */}
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-instagram icon"></i>
          </div>

          {/* Explore links box */}
          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <Link to="/about">
                <li>About Us</li>
              </Link>
              <li>Services</li>
              <Link to="/courses">
                <li>Courses</li>
              </Link>
              <Link to="/blogs">
                <li>Blog</li>
              </Link>
              <Link to="/contact">
                <li>Contact us</li>
              </Link>
            </ul>
          </div>

          {/* Quick links box */}
          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <Link to="/pricing">
                <li>Pricing</li>
              </Link>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <Link to="/">
                <li>Feedbacks</li>
              </Link>
            </ul>
          </div>

          {/* Recent post box */}
          <div className="box">
            <h3>Recent Post</h3>
            {/* Display the first 3 recent posts */}
            {blog.slice(0, 3).map((val) => (
              <div className="items flexSB" key={val.id}>
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  {/* Post date and type */}
                  <span>
                    <i className="fa fa-calendar-alt"></i>
                    <label htmlFor="">{val.date}</label>
                  </span>
                  <span>
                    <i className="fa fa-user"></i>
                    <label htmlFor="">{val.type}</label>
                  </span>
                  {/* Post title */}
                  <Link to={`/blog/${val.id}`}>
                    <h4>{val.title.slice(0, 40)}...</h4>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/* Contact info box */}
          <div className="box last">
            <h3>Have a Question?</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>
                203 Bega kwa Bega, Baba Dogo, Nairobi, Kenya
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                +254 799 444 133
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                octalideas@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>
          Copyright ©{currentYear} All rights reserved | This template is made
          with <i className="fa fa-heart"></i> by Principal Kelvin
        </p>
      </div>
    </>
  );
};

export default Footer;
