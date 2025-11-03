import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-8 text-gray-400 text-center text-sm">
      <p>© Studio KRAI 2025</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a href="#" className="hover:text-white">Instagram</a>
        <a href="#" className="hover:text-white">Twitter</a>
        <a href="#" className="hover:text-white">YouTube</a>
      </div>
    </footer>
  );
};

export default Footer;