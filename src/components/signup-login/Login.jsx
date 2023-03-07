
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 


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
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
        <div>{error}</div>
      </form>
      <p>Don't have an account? <Link to="/register">Sign up</Link></p>
    </div>
  );
}

export default Login;
