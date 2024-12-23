import { useState } from "react";
const images = [
  {
    src: "https://i.ibb.co/nkK1hnf/1000128782.jpg",
    alt: "Room 1",
    category: "Rooms",
  },
  {
    src: "https://i.ibb.co/vkH8qJS/1000128783.jpg",
    alt: "Room 2",
    category: "Rooms",
  },
  {
    src: "https://i.ibb.co.com/Qv2fgf5/pexels-fotoaibe-1669799.jpg",
    alt: "Room 3",
    category: "Rooms",
  },
  {
    src: "https://scontent.fcgp4-2.fna.fbcdn.net/v/t39.30808-6/470178682_122115029402603522_4420168692400168140_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeGEipUz9v543DkPc6CM9daXwOEIT6uxaSbA4QhPq7FpJmIcmkmLkrgNiKc330NbEjph5VbUQiNdFnVuw6K_C80U&_nc_ohc=DlZV3Gd6uOgQ7kNvgHpxDFs&_nc_zt=23&_nc_ht=scontent.fcgp4-2.fna&_nc_gid=AnPVcOK-z8rmE9TM2jK_w5s&oh=00_AYDnUxILGxdpoFxos8vFzdgEzFuD48DgpyhknPNtYWyRMw&oe=6762305F",
    alt: "Room 3",
    category: "Rooms",
  },
  
 
  {
    src:'https://i.ibb.co.com/crSQ6DT/pexels-pixabay-262047.jpg',
    alt: "hotel",
    category: "Hotel",
  },
  {
    src:'https://i.ibb.co.com/w7yG8Hv/pexels-enginakyurt-1579253.jpg',
    alt: "hotel",
    category: "Hotel",
  },
  {
    src:'https://i.ibb.co.com/34FdQ6B/pexels-pixabay-261169.jpg',
    alt: "hotel",
    category: "Hotel",
  },
  {
    src:'https://i.ibb.co.com/b5zNpzZ/pexels-enginakyurt-2736388.jpg',
    alt: "hotel",
    category: "Hotel",
  },
];

const categories = ["All", "Rooms", "Hotel"];

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
