import React from 'react';

const AdventureSection = () => {
  const adventures = [
    {
      id: 1,
      title: "Camping",
      image: "/image/2.png",
      description: "Sleep under the stars, cook over fire, and wake up to the sound of nature."
    },
    {
      id: 2,
      title: "Sightseeing",
      image: "/image/3.png",
      description: "Discover hidden waterfalls, volcanic craters, and ancient forests."
    },
    {
      id: 3,
      title: "Hiking",
      image: "/image/4.png",
      description: "Trek through rugged trails and reach panoramic viewpoints only accessible on foot."
    }
  ];

  return (
    <section id="adventure" className="py-20 bg-blue-950 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Choose your Adventure</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {adventures.map((adv, idx) => (
            <div 
              key={adv.id} 
              className="bg-purple-900/50 p-6 rounded-xl hover:scale-105 transition-transform duration-300 group"
            >
              <div className="text-3xl font-bold text-orange-400 mb-4">0{idx + 1}</div>
              <img src={adv.image} alt={adv.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-3">{adv.title}</h3>
              <p className="text-gray-300 mb-4">{adv.description}</p>
              <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-sm transition">
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdventureSection;