import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import studyCoinLogo from '../assets/study-token.png'; // Import the logo image
import heroBg from '../assets/HeroBg.png'; // Import the background image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className="flex items-center justify-between p-4 shadow-md relative"
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

      {/* Navigation Links (Desktop View) */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="text-black hover:text-primary-purple">Home</Link>
        <Link to="/about-us" className="text-black hover:text-primary-purple">About Us</Link>
        <Link to="/courses" className="text-black hover:text-primary-purple">Courses</Link>
        <Link to="/our-service" className="text-black hover:text-primary-purple">Our Service</Link>
        <Link to="/contact-us" className="text-black hover:text-primary-purple">Contact Us</Link>
      </div>

      {/* Sign-in Button (Desktop View) */}
      <button className="hidden md:block bg-primary-purple text-white px-6 py-2 rounded-full hover:bg-primary-dark transition">
        Sign In
      </button>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-start p-4 z-50">
          <Link to="/" className="text-black hover:text-primary-purple mb-4" onClick={toggleMenu}>Home</Link>
          <Link to="/about-us" className="text-black hover:text-primary-purple mb-4" onClick={toggleMenu}>About Us</Link>
          <Link to="/courses" className="text-black hover:text-primary-purple mb-4" onClick={toggleMenu}>Courses</Link>
          <Link to="/our-service" className="text-black hover:text-primary-purple mb-4" onClick={toggleMenu}>Our Service</Link>
          <Link to="/contact-us" className="text-black hover:text-primary-purple mb-4" onClick={toggleMenu}>Contact Us</Link>
          <button className="bg-primary-purple text-white px-6 py-2 rounded-full hover:bg-primary-dark transition" onClick={toggleMenu}>
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
