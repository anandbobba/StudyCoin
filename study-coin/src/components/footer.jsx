import React from 'react';
import studycoinLogo from '../assets/studycoin.png';

const Footer = () => {
  return (
    <div className="bg-amber-50 text-gray-800 py-6 px-4 md:px-8">
      {/* Footer Content */}
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between">
          {/* StudyCoin Logo on the Left */}
          <div className="mb-6 md:mb-0 md:mr-8 flex justify-center md:justify-start">
            <img 
              src={studycoinLogo} 
              alt="StudyCoin Logo" 
              className="w-32 sm:w-40 h-auto"
            />
          </div>

          {/* All Content on the Right */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
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
                <li>Student Residential Area, IT Bombay, Mumbai, MH, India – 400076</li>
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
