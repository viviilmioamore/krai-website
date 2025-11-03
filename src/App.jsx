import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AdventureSection from './components/AdventureSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';

function App() {
  return (
    
    <div className="font-sans">
      <Header link rel="icon" href="/favicon.png" />
      <Hero />
      <AdventureSection />
      <GallerySection />
      <Footer />
    </div>
  );
}

export default App;
