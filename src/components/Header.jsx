import React from 'react';

const Header = () => {
  return (
    <header className="bg-black/20 backdrop-blur-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Gravity</div>
        <nav className="hidden md:flex space-x-8 text-sm text-gray-300">
          <a href="#home" className="hover:text-black transition">Home</a>
          <a href="#adventure" className="hover:text-black transition">Adventure</a>
          <a href="#gallery" className="hover:text-black transition">Gallery</a>
          <a href="#contact" className="hover:text-black transition">Contact</a>
        </nav>
        <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;