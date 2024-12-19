import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-6">
        {/* Top Section: Logo, Description, and Links */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-white">Smart Classroom</h2>
            <p className="mt-2 text-sm">
              Transforming education with technology. Our platform integrates innovation to make learning smarter, engaging, and effective.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline text-gray-400 hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-400 hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-400 hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-400 hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-right space-y-3">
            <h3 className="text-xl font-semibold text-white">Contact Us</h3>
            <p>Email: <a href="mailto:support@smartclassroom.com" className="hover:underline text-gray-400">support@smartclassroom.com</a></p>
            <p>Phone: <a href="tel:+11234567890" className="hover:underline text-gray-400">+1 123-456-7890</a></p>
          </div>
        </div>

        {/* Bottom Section: Social Media and Copyright */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-gray-700 text-gray-300 rounded-full p-2 shadow-md hover:bg-blue-500 hover:text-white transition"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="bg-gray-700 text-gray-300 rounded-full p-2 shadow-md hover:bg-blue-500 hover:text-white transition"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="bg-gray-700 text-gray-300 rounded-full p-2 shadow-md hover:bg-blue-500 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>

          {/* Copyright */}
          <p className="mt-4 md:mt-0">
            © {new Date().getFullYear()} Smart Classroom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
