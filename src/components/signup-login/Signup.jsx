import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Signup() {
  // Declare state variables for form fields and initialize them to an empty state
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Function to handle registration form submission
  const handleRegister = async (event) => {
    event.preventDefault(); // prevent default form submission behavior
    try {
      // TODO: add logic for registering user with backend API
    } catch (error) {
      // If an error occurs during registration, set the error state variable
      setError(error.message);
    }
  };

  // Function to handle input changes and add/remove "has-value" class to input boxes
  const handleInputChange = (e) => {
    const input = e.target;
    if (input.value) {
      // If the input has a value, add "has-value" class
      input.classList.add("has-value");
    } else {
      // If the input does not have a value, remove "has-value" class
      input.classList.remove("has-value");
    }
  };

  return (
    <div className="cover">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <div className="names">
          {/* First name input box */}
          <div className="inputBox">
            <input
              type="text"
              value={fname}
              onChange={(e) => {
                setFirstName(e.target.value); // Update state variable for first name
                handleInputChange(e);
              }}
              required
            />
            <span>First Name</span>
          </div>
          {/* Last name input box */}
          <div className="inputBox">
            <input
              type="text"
              value={lname}
              onChange={(e) => {
                setLastName(e.target.value); // Update state variable for last name
                handleInputChange(e);
              }}
              required
            />
            <span>Last Name</span>
          </div>
        </div>
        {/* Email input box */}
        <div className="inputBox">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value); // Update state variable for email
              handleInputChange(e);
            }}
            required
          />
          <span>Email</span>
        </div>
        {/* Password input box */}
        <div className="inputBox">
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value); // Update state variable for password
              handleInputChange(e);
            }}
            required
          />
          <span>Password</span>
        </div>
        {/* Register button */}
        <button type="submit" id="btn-login">
          Regiter
        </button>
        {/* Error message */}
        <div>{error}</div>
      </form>
      {/* Already have an account link */}
      <p>
        Already have an account?{" "}
        <span className="reghere">
          <Link to="/login">Log In</Link>
        </span>
      </p>
      <p>Or Log In Using</p>

      {/* Alternative login options */}
      <div className="alt-login">
        <a href="" target="_blank">
          <i className="fab fa-facebook-f icon"></i>
        </a>
        <a
          href=""
          target="_blank"
        >
          <i className="fab fa-google icon"></i>
        </a>
        <a href="" target="_blank">
          <i className="fab fa-twitter icon"></i>
        </a>
        <a href="" target="_blank">
          <i className="fab fa-github icon"></i>
        </a>
      </div>
    </div>
  );
}

export default Signup;
