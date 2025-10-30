import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // <-- Import

function Signup() {
  const [name, set_name] = useState('');
  const [email, set_email] = useState('');
  const [password, set_password] = useState('');
  const [message, set_message] = useState('');

  const navigate = useNavigate(); // To redirect

  const handleSignup = async (e) => {
    e.preventDefault();
    set_message(''); // Clear old messages

    try {
      // 1. Make the API call
      await axios.post('/api/auth/register', {
        name,
        email,
        password,
      });

      // 2. On success, just show a message and redirect
      set_message('Signup successful! Redirecting to login...');

      // 3. Redirect to login page after a short delay
      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (error) {
      // 4. Show error if user already exists, etc.
      set_message(error.response.data.message);
    }
  };

  return (
    <div className="auth-page">
      <h2>Create Account</h2>
      <form onSubmit={handleSignup}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => set_name(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => set_email(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => set_password(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="auth-btn">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signup;