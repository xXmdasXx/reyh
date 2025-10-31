// src/lib/axios.ts
import axios from 'axios';

export const api = axios.create({
  baseURL: "https://echora.ir/api",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    'Accept': 'application/json',
  },
  timeout: 10000, // 10 second timeout
});

api.interceptors.request.use(
  (config) => {
    // Skip adding Authorization header for OPTIONS requests
    if (config.method !== 'options') {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    
    return config;
  },
  (error) => {
    // Ignore canceled requests noise
    if ((error && (error.name === 'CanceledError' || error.code === 'ERR_CANCELED')) || (typeof error?.message === 'string' && error.message === 'canceled')) {
      return Promise.reject(error);
    }
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response; // Return full response, not just data
  },
  (error) => {
    // Swallow logging for canceled requests to avoid console noise on nav/hot-reload
    if ((error && (error.name === 'CanceledError' || error.code === 'ERR_CANCELED')) || (typeof error?.message === 'string' && error.message === 'canceled')) {
      return Promise.reject(error);
    }
    console.error('Response error:', error);
    
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    
    return Promise.reject(error);
  }
);


// Helper function to set token
export const setAuthToken = (token: string) => {
  localStorage.setItem('token', token);
  document.cookie = `token=${token}; path=/; max-age=${60 * 60 * 24 * 30}`;
  // Dispatch custom event to notify components of auth state change
  window.dispatchEvent(new Event('authStateChanged'));
};

// Helper function to remove token
export const removeAuthToken = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  document.cookie = 'token=; path=/; max-age=0';
  // Dispatch custom event to notify components of auth state change
  window.dispatchEvent(new Event('authStateChanged'));
};

// Helper function to check authentication
export const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false;
  return !!localStorage.getItem('token');
};