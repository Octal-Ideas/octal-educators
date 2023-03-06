import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head"; // importing the Head component
import "./header.css"; // importing the styles for this component

const Header = () => {
  const [click, setClick] = useState(false); // creating a state to handle the mobile navigation menu

  return (
    <>
      <Head /> {/* rendering the Head component */}
      <header>
        <nav className="flexSB">
          {/* The navigation menu */}
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">All Courses</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/journal">Journal</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          {/* The "Get Certificate" button */}
          <div className="start">
            <div className="button">GET CERTIFICATE</div>
          </div>
          {/* The toggle button for the mobile navigation menu */}
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
