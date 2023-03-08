import React from "react";
import { Link } from "react-router-dom";

import "./404.css";

function NotFound() {
  return (
    <div className="error-container">
      <h1 className="error-title">404</h1>
      <p className="error-message">
        Oops! The page you are looking for cannot be found.
      </p>
      <Link to="/" className="error-link">
        Go back to the homepage
      </Link>
    </div>
  );
}

export default NotFound;
