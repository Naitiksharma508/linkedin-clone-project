import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // <-- Import axios
import { useAuth } from '../context/AuthContext'; // <-- Import our hook

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const navigate = useNavigate(); // To redirect user
  const { login } = useAuth(); // Get the login function from context

  const handleLogin = async (e) => {
    e.preventDefault();
    setMsg(''); // Clear old messages

    try {
      // 1. Make the API call (thanks to proxy, we just use /api/...)
      const response = await axios.post("https://linkedin-clone-backend-sqvx.onrender.com", {
        email,
        password,
      });

      // 2. We got a good response
      const { token, user } = response.data;

      // 3. Use our context to save the user info
      login(token, user);

      // 4. Redirect to the home page
      navigate('/');

    } catch (error) {
      // 5. If API sends an error (wrong password, etc.)
      setMsg(error.response.data.message);
    }
  };

  return (
    <div className="auth-page">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="auth-btn">Login</button>
      </form>
      {msg && <p style={{ color: 'red' }}>{msg}</p>} {/* Show error msg */}
      <p>
        New user? <Link to="/signup">Create an account</Link>
      </p>
    </div>
  );
}

export default Login;

