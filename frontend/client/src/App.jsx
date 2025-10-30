import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'; 

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { useAuth } from './context/AuthContext'; // <-- 1. IMPORT

function App() {
  // 2. GET THE REAL TOKEN FROM THE CONTEXT
  const { user_token } = useAuth(); 

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/login" 
          // 3. If logged in, redirect to home. If not, show Login
          element={user_token ? <Navigate to="/" /> : <Login />} 
        />
        <Route 
          path="/signup" 
          element={user_token ? <Navigate to="/" /> : <Signup />} 
        />
        <Route 
          path="/" 
          // 4. If logged in, show Home. If not, send to Login
          element={user_token ? <Home /> : <Navigate to="/login" />} 
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;