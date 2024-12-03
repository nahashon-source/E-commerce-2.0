import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';

const LoginPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-blue-500 to-purple-500'}`}
    >
      {/* Login Card */}
      <div
        className={`w-full max-w-md p-8 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} relative z-10`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-center">
            Welcome Back
          </h2>
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${darkMode ? 'bg-white' : 'bg-gray-800'} transition-all`}
          >
            {darkMode ? '🌞' : '🌙'}
          </button>
        </div>

        {/* Login Form */}
        <LoginForm />

        {/* Social Login */}
        <div className="mt-6 flex justify-center space-x-4">
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full shadow-lg transition-all transform hover:scale-105"
          >
            Login with Google
          </button>
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full shadow-lg transition-all transform hover:scale-105"
          >
            Login with Facebook
          </button>
        </div>

        {/* Links */}
        <div className="mt-6 text-center">
          <p className="text-sm">
            Don’t have an account?{' '}
            <Link
              to="/register"
              className="text-blue-500 hover:underline"
            >
              Sign up here
            </Link>
          </p>
          <p className="mt-2">
            <Link
              to="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Forgot password?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
