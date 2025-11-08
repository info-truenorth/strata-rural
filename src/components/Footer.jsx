import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-olive-dark">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo/Branding */}
          <div>
            <div className="text-xl font-bold text-white mb-4">
              strata digital
            </div>
            <p className="text-sm text-gray-200">
              Digital presence built for rural NZ reality
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <a href="#services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition">
                  How it works
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wide">
              Contact
            </h3>
            <p className="text-sm text-gray-200">
              Get in touch to transform your digital presence
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-olive-medium pt-8 text-center">
          <p className="text-sm text-gray-200">
            &copy; {new Date().getFullYear()} Strata Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
