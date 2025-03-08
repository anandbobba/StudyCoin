import React from 'react';
import { Link } from 'react-router-dom';
import studyCoinLogo from '../assets/study-token.png'; // Import the logo image
import heroBg from '../assets/HeroBg.png'; // Import the background image

const Navbar = () => {
  return (
    <nav 
      className="flex items-center justify-between p-4 shadow-md"
      style={{ 
        backgroundImage: `url(${heroBg})`, // Set the background image
        backgroundSize: 'cover', // Ensure the background covers the entire navbar
        backgroundPosition: 'center', // Center the background image
      }}
    >
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={studyCoinLogo} alt="Study Coin" className="h-10" /> {/* Use the imported logo */}
        <span className="ml-2 font-bold text-black text-lg">Study Coin</span> {/* Black text */}
      </div>
      
      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="text-black hover:text-primary-purple">Home</Link> {/* Black text */}
        <Link to="/about-us" className="text-black hover:text-primary-purple">About Us</Link> {/* Black text */}
        <Link to="/courses" className="text-black hover:text-primary-purple">Courses</Link> {/* Black text */}
        <Link to="/our-service" className="text-black hover:text-primary-purple">Our Service</Link> {/* Black text */}
        <Link to="/contact-us" className="text-black hover:text-primary-purple">Contact Us</Link> {/* Black text */}
      </div>
      
      {/* Sign-in Button */}
      <button className="hidden md:block bg-primary-purple text-white px-6 py-2 rounded-full hover:bg-primary-dark transition">
        Sign In
      </button>
      
      {/* Mobile Menu */}
      <div className="md:hidden">
        <button className="text-black focus:outline-none"> {/* Black text */}
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;