import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-screen h-screen bg-gradient-to-b from-indigo-950 to-blue-900 overflow-hidden m-0 p-0">
      
      {/* Фоновое изображение */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/image/1.png)" }}
      ></div>

      {/* Текст и кнопка */}
      <div className="relative z-10 w-full px-6 md:px-12 pt-32 md:pt-48 text-white">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">KRAI<span className="text-orange-400">*</span></h1>
        <p className="max-w-lg mb-8 text-lg opacity-90">
          You are not just a tourist, you're an adventurer. Explore the wilds of Kamchatka, where nature rules and legends live.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-medium transition">
          Start Your Journey
        </button>
      </div>

    </section>
  );
};

export default Hero;