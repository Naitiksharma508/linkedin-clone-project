import React from 'react';
import './Navbar.css'; // It needs its own CSS file
import { useAuth } from '../context/AuthContext'; // It needs the Auth context

function Navbar() {
  
  // Get user data and the logout function from our context
  const { user_data, logout } = useAuth();

  const handleLogout = () => {
    logout();
    // The App.jsx logic will automatically redirect to login
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">
        Simple LinkedIn
      </div>
      <div className="navbar-user">
        {/* Show the real user name (if user exists) */}
        <span>Welcome, {user_data ? user_data.name : 'Guest'}!</span>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;