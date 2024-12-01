import axios from 'axios';

const API_URL = 'https://api.example.com'; // Replace with your actual API URL

export const login = async (credentials) => {
  // Simulated API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: {
          id: 1,
          email: credentials.email,
          name: 'John Doe',
          phone: '+1234567890',
        },
        token: 'dummy-jwt-token',
      });
    }, 1000);
  });
};

export const register = async (userData) => {
  // Simulated API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: {
          id: 1,
          email: userData.email,
          name: userData.name,
          phone: '',
        },
        token: 'dummy-jwt-token',
      });
    }, 1000);
  });
};

export const updateUserProfile = async (profileData) => {
  // Simulated API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        ...profileData,
      });
    }, 1000);
  });
};

export const changeUserPassword = async (passwordData) => {
  // Simulated API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
};