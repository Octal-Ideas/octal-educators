import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  //Declear login variables an initialize it to an empty state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //Handles login logics
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
    } catch (error) {
      setError(error.message);
    }
  };

  //function to handle inputs if has value or not
  const handleInputChange = (e) => {
    const input = e.target;
    if (input.value) {
      input.classList.add("has-value");
    } else {
      input.classList.remove("has-value");
    }
  };

  return (
    //Log in form component
    <div className="cover">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
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
          Login
        </button>
        <div>{error}</div>
      </form>
      <p >
        Don't have an account? <span className = "reghere"><Link to="/register">Register Here</Link></span> 
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

export default Login;