import React from 'react';

const GallerySection = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Kamchatka Solitude",
      image: "/image/5.png",
      description: "A lone traveler finds peace among the volcanoes."
    },
    {
      id: 2,
      title: "Northern Lights",
      image: "/image/7.png",
      description: "Dancing auroras above the tundra."
    },
    {
      id: 3,
      title: "Volcanic Valley",
      image: "/image/8.png",
      description: "Steam rises from the earth in this otherworldly landscape."
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Browse our Gallery</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {galleryItems.map((item, idx) => (
            <div key={item.id} className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover rounded-lg" />
              </div>
              <div className="md:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg self-start transition">
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;