
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='cover'>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className='inputBox'>
          {/* <label>Email:</label> */}
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <span>Email</span>
        </div>
        <div className='inputBox'>
          {/* <label>Password:</label> */}
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <span>Password</span>
        </div>
        <button type="submit" id='btn-login'>Login</button>
        <div>{error}</div>
      </form>
      <p>Don't have an account? <Link to="/register">Sign up</Link></p>
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
