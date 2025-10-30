import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user_token, set_user_token] = useState(null);
  const [user_data, set_user_data] = useState(null);

  // This will check if a token is already in localStorage when the app loads
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    if (storedToken && storedUser) {
      set_user_token(storedToken);
      set_user_data(JSON.parse(storedUser));
    }
  }, []);

  const login = (token, user) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    set_user_token(token);
    set_user_data(user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    set_user_token(null);
    set_user_data(null);
  };

  return (
    <AuthContext.Provider value={{ user_token, user_data, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// This is a custom hook to easily use the context
export function useAuth() {
  return useContext(AuthContext);
}