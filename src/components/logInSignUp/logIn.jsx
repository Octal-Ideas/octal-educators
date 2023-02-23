import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel } from '@material-ui/core';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // handle login logic
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <FormControl>
          <InputLabel htmlFor="email">Email address</InputLabel>
          <TextField
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <TextField
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    );
  };
  