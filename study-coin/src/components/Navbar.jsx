import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white">
      <div className="flex items-center">
        <img src="/images/study-logo.png" alt="Study Coin" className="h-10" />
        <span className="ml-2 font-bold text-primary-purple">Study Coin</span>
      </div>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700">Home</Link>
        <Link to="/about-us" className="text-gray-700">About us</Link>
        <Link to="/courses" className="text-gray-700">Courses</Link>
        <Link to="/our-service" className="text-gray-700">Our Service</Link>
        <Link to="/contact-us" className="text-gray-700">Contact us</Link>
      </div>
      <button className="bg-primary-purple text-white px-4 py-2 rounded-full">
        Sign in
      </button>
    </nav>
  );
};

export default Navbar;