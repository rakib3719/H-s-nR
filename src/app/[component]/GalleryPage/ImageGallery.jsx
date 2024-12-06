import { useState } from "react";

const images = [
  {
    src: "https://i.ibb.co/Wsjnrw0/dog2.jpg",
    alt: "Room 1",
    category: "Rooms",
  },
  {
    src: "https://i.ibb.co/hy7Bm8D/rabbit5.jpg",
    alt: "Room 2",
    category: "Rooms",
  },
  {
    src: "https://i.ibb.co/dtWB06F/parrot32.jpg",
    alt: "Room 3",
    category: "Rooms",
  },
  {
    src: "https://i.ibb.co/rGk7cBv/parrot.jpg",
    alt: "Pool",
    category: "Hotel",
  },
  {
    src: "https://i.ibb.co/nkS4jFx/gct6.jpg",
    alt: "Pool",
    category: "Hotel",
  },
  {
    src: "https://i.ibb.co/svH2c14/gct5.jpg",
    alt: "Restaurant",
    category: "Restaurant",
  },
  {
    src: "https://i.ibb.co/svH2c14/gct5.jpg",
    alt: "Restaurant",
    category: "Restaurant",
  },
  {
    src: "https://i.ibb.co/svH2c14/gct5.jpg",
    alt: "Restaurant",
    category: "Restaurant",
  },
  {
    src: "https://i.ibb.co/svH2c14/gct5.jpg",
    alt: "Hotel",
    category: "Hotel",
  },
];

const categories = ["All", "Rooms", "Restaurant", "Hotel"];

export default function GalleryComponent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((image) => image.category === activeCategory);

  return (
    <div className="py-4 px-4">
  
      <div className="flex justify-center mb-6 space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-lg font-medium ${
              activeCategory === category
                ? "text-orange-600 underline"
                : "text-gray-700 hover:text-orange-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-500"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          
            <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 ease-in-out hover:bg-opacity-50"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
