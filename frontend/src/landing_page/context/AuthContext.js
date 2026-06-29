import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const API_URL = 'http://localhost:3002/api/auth';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Validate token on initial load
  useEffect(() => {
    const checkLoggedIn = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(`${API_URL}/me`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (res.data.success) {
          setUser(res.data.user);
        } else {
          localStorage.removeItem('token');
          setUser(null);
        }
      } catch (err) {
        console.error('Error validating token:', err);
        localStorage.removeItem('token');
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkLoggedIn();
  }, []);

  const register = async (username, email, password) => {
    try {
      const res = await axios.post(`${API_URL}/register`, {
        username,
        email,
        password
      });

      if (res.data.success) {
        localStorage.setItem('token', res.data.token);
        setUser(res.data.user);
        return { success: true };
      }
      return { success: false, error: res.data.error || 'Registration failed' };
    } catch (err) {
      console.error('Register API Error:', err);
      return { 
        success: false, 
        error: err.response?.data?.error || 'Server error. Please try again later.' 
      };
    }
  };

  const login = async (email, password) => {
    try {
      const res = await axios.post(`${API_URL}/login`, {
        email,
        password
      });

      if (res.data.success) {
        localStorage.setItem('token', res.data.token);
        setUser(res.data.user);
        return { success: true };
      }
      return { success: false, error: res.data.error || 'Login failed' };
    } catch (err) {
      console.error('Login API Error:', err);
      return { 
        success: false, 
        error: err.response?.data?.error || 'Invalid credentials or connection error.' 
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
