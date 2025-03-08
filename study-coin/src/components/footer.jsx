import React from 'react';
import studycoinLogo from '../assets/studycoin.png'; // StudyCoin logo and name

const Footer = () => {
  return (
    <div className="bg-amber-50 text-gray-800 py-6"> {/* Decreased padding for height */}
      {/* Footer Content */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start">
          {/* StudyCoin Logo on the Left */}
          <div className="mb-6 md:mb-0 md:mr-8">
            <img 
              src={studycoinLogo} 
              alt="StudyCoin Logo" 
              className="w-40 h-auto" // Adjusted logo size
            />
          </div>

          {/* All Content on the Right */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Column */}
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>How to work?</li>
                <li>What's Popular?</li>
              </ul>
            </div>

            {/* Content Column */}
            <div>
              <h3 className="text-lg font-bold mb-4">Content</h3>
              <ul className="space-y-2">
                <li>Study Chain</li>
                <li>SStudy</li>
                <li>Hex ID</li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h3 className="text-lg font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>FAQ</li>
                <li>Help Center</li>
                <li>Career</li>
              </ul>
            </div>

            {/* Contact Info Column */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2">
                <li>+91 701-313-3517</li>
                <li>200260053@info.ac.in</li>
                <li>Student Residential Area, IT Bombay, Mumbai, MH, India– 400076</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 text-sm text-gray-600">
          StudyCoin, All Rights Reserved, 2024
        </div>
      </div>
    </div>
  );
};

export default Footer;