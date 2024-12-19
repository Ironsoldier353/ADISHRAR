import React from 'react';
import { Button } from '../ui/Button'; // Adjust the import path if necessary
import logo from '../../assets/Adishrar.png'; // Adjust the path based on your file structure

const Navbar = () => {
  const handleHomeClick = () => {
    console.log("Home button clicked");
    // Add your navigation logic here, e.g., using React Router: history.push('/')
  };

  const handleSignupClick = () => {
    console.log("Signup button clicked");
    // Navigate to the Signup page
    window.location.href = '/signup'; // Or use react-router's history.push('/signup')
  };

  const handleLoginClick = () => {
    console.log("Login button clicked");
    // Navigate to the Login page
    window.location.href = '/login'; // Or use react-router's history.push('/login')
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Left side: Logo and Name */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
          Adishrar
        </h1>
      </div>

      {/* Right side: Buttons */}
      <div className="flex space-x-4">
        <Button
          variant="default"
          className="px-6 py-2 font-semibold hover:bg-gray-200 hover:text-gray-900 transition-all"
          onClick={handleHomeClick}
        >
          Home
        </Button>
        <Button
          variant="outline"
          className="px-6 py-2 font-semibold border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all"
          onClick={handleSignupClick}
        >
          Signup
        </Button>
        <Button
          variant="ghost"
          className="px-6 py-2 font-semibold text-gray-500 hover:text-blue-600 transition-all"
          onClick={handleLoginClick}
        >
          Login
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
