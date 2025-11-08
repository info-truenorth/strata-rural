import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-black">
          strata digital
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-700 hover:text-black transition">
            Services
          </a>
          <a href="#how-it-works" className="text-gray-700 hover:text-black transition">
            How it works
          </a>
          <a href="#portfolio" className="text-gray-700 hover:text-black transition">
            Portfolio
          </a>
          <a href="#contact" className="text-gray-700 hover:text-black transition">
            Contact Us
          </a>
        </nav>

        {/* CTA Button */}
        <button className="bg-olive-dark text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition">
          Learn More
        </button>
      </div>
    </header>
  );
};

export default Header;
