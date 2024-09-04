import React from "react";
import Logo from "../assets/RRLogo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-6 md:mb-0 w-1/3">
          <div>
            <img src={Logo} alt="Company Logo" className="h-12 mb-4" />
            <h2 className="text-xl">RRBlog</h2>
          </div>
          <p className="text-gray-400 mb-4">
            We provide high-quality services and solutions for all your needs.
            Get in touch to learn more.
          </p>
          <p className="text-gray-400">
            Contact us:{" "}
            <a href="mailto:info@example.com" className="underline">
              info@example.com
            </a>
          </p>
          <p className="text-gray-400">Phone: (123) 456-7890</p>
        </div>

        <div className="mb-6 md:mb-0 w-1/3">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a href="#" className="text-gray-400 hover:text-white mb-2 block">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white mb-2 block">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white mb-2 block">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white mb-2 block">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-6 md:mb-0 w-1/3">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Subscribe to Our Newsletter
          </h3>
          <form action="#" method="post" className="flex flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 mb-4 rounded bg-gray-700 border border-gray-600 text-white"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-6">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
