import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Signup() {
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
    } catch (error) {
      setError(error.message);
    }
  };

  const handleInputChange = (e) => {
    const input = e.target;
    if (input.value) {
      input.classList.add("has-value");
    } else {
      input.classList.remove("has-value");
    }
  };

  return (
    <div className="cover">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <div className="names">
          <div className="inputBox">
            <input
              type="text"
              value={fname}
              onChange={(e) => {
                setFirstName(e.target.value);
                handleInputChange(e);
              }}
              required
            />
            <span>First Name</span>
          </div>
          <div className="inputBox">
            <input
              type="text"
              value={lname}
              onChange={(e) => {
                setLastName(e.target.value);
                handleInputChange(e);
              }}
              required
            />
            <span>Last Name</span>
          </div>
        </div>
        <div className="inputBox">
          
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              handleInputChange(e);
            }}
            required
          />
          <span>Email</span>
        </div>
        <div className="inputBox">
          
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              handleInputChange(e);
            }}
            required
          />
          <span>Password</span>
        </div>
        <button type="submit" id="btn-login">
          Regiter
        </button>
        <div>{error}</div>
      </form>
      <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
      <p>Or Log In Using</p>

      <div className="alt-login">
        <a href="" target="_blank">
          <i className="fab fa-facebook-f icon"></i>
        </a>
        <a href="" target="_blank">
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
