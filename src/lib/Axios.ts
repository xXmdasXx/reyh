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
    
    console.log('Request config:', {
      method: config.method,
      url: config.url,
      headers: config.headers,
      data: config.data
    });
    
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log('Response:', response);
    return response; // Return full response, not just data
  },
  (error) => {
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
};

// Helper function to remove token
export const removeAuthToken = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  document.cookie = 'token=; path=/; max-age=0';
};

// Helper function to check authentication
export const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false;
  return !!localStorage.getItem('token');
};