// 'use client'
// import Link from "next/link";
// import React, { useEffect } from "react";
// const OurRooms = () => {
//   useEffect(() => {
//     const track = document.querySelector(".carousel-track");
//     const slides = Array.from(track.children);
//     const nextButton = document.querySelector(".carousel-button-right");
//     const prevButton = document.querySelector(".carousel-button-left");
//     const slideWidth = slides[0].getBoundingClientRect().width;

//     // Arrange slides for 3 visible cards
//     slides.forEach((slide, index) => {
//       slide.style.left = slideWidth * index + "px";
//     });

//     const moveToSlide = (track, currentSlideIndex, targetSlideIndex) => {
//       const offset = targetSlideIndex * slideWidth;
//       track.style.transform = `translateX(-${offset}px)`;
//     };

//     let currentSlideIndex = 0;

//     // Click right button
//     nextButton.addEventListener("click", () => {
//       currentSlideIndex = (currentSlideIndex + 1) % slides.length;
//       moveToSlide(track, currentSlideIndex, currentSlideIndex);
//     });

//     // Click left button
//     prevButton.addEventListener("click", () => {
//       currentSlideIndex =
//         (currentSlideIndex - 1 + slides.length) % slides.length;
//       moveToSlide(track, currentSlideIndex, currentSlideIndex);
//     });
//   }, []);

//   const rooms = [
//     {
//       id: 1,
//       name: "Skyline Retreat",
//       guests: "2 Guests",
//       size: "35 Feet Size",
//       price: "$50",
//       image: 'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/g_5-533x533.webp',
//     },
//     {
//       id: 2,
//       name: "Urban Loft",
//       guests: "2 Guests",
//       size: "35 Feet Size",
//       price: "$50",
//       image: 'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/g_5-533x533.webp',
//     },
//     {
//       id: 3,
//       name: "Studio Sanctuary",
//       guests: "2 Guests",
//       size: "35 Feet Size",
//       price: "$50",
//       image: 'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/g_5-533x533.webp',
//     },
//     {
//       id: 4,
//       name: "Luxury Escape",
//       guests: "4 Guests",
//       size: "50 Feet Size",
//       price: "$100",
//       image: 'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/g_5-533x533.webp',
//     },
//   ];

//   return (
//     <section className="bg-[#fff5ed] py-10 text-center">
//       <h1 className="text-[#a98e79] uppercase text-sm tracking-wider">Rooms & Suites</h1>
//       <h2 className="text-4xl font-semibold text-black mt-2">Our Rooms</h2>

//       <div className="carousel">
//         <button className="carousel-button carousel-button-left">❮</button>
//         <div className="carousel-track-container overflow-hidden">
//           <ul className="carousel-track flex">
//             {rooms.map((room) => (
//               <li
//                 key={room.id}
//                 className="carousel-slide flex-shrink-0 w-1/3 px-4"
//               >
//                 <div className="group relative bg-white rounded-lg overflow-hidden shadow-lg">
//                   {/* Image */}
//                   <img
//                     src={room.image}
//                     alt={room.name}
//                     className="object-cover w-full h-72"
//                   />

//                   {/* Default Content */}
//                   <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-100 transition-all duration-300 group-hover:opacity-0">
//                     <h3 className="text-2xl font-bold text-white">{room.name}</h3>
//                     <p className="text-white">
//                       {room.guests} · {room.size}
//                     </p>
//                   </div>

//                   {/* Hover Content */}
//                   <div className="absolute inset-0 bg-[#ab8965] flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
//                     <p className="text-white text-lg">From</p>
//                     <h3 className="text-white text-4xl font-bold">{room.price}</h3>

//                     <Link href={'/details'}>
//                       <button className="uppercase mt-4 px-6 py-2 border border-[#e9dfd55c] text-white hover:bg-white hover:text-[#a98e79] transition-colors duration-300">
//                         View Details
//                       </button>
//                     </Link>

//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <button className="carousel-button carousel-button-right">❯</button>
//       </div>
//     </section>
//   );
// };

// export default OurRooms;








'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';

const OurRooms = () => {
  useEffect(() => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button-right');
    const prevButton = document.querySelector('.carousel-button-left');
    let slideWidth = slides[0].getBoundingClientRect().width;

    const updateSlideWidth = () => {
      slideWidth = slides[0].getBoundingClientRect().width;
      slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
      });
    };

    // Rearrange slides on window resize
    window.addEventListener('resize', updateSlideWidth);
    updateSlideWidth();

    const moveToSlide = (currentSlideIndex, targetSlideIndex) => {
      const offset = targetSlideIndex * slideWidth;
      track.style.transform = `translateX(-${offset}px)`;
    };

    let currentSlideIndex = 0;

    // Click right button
    nextButton.addEventListener('click', () => {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      moveToSlide(currentSlideIndex, currentSlideIndex);
    });

    // Click left button
    prevButton.addEventListener('click', () => {
      currentSlideIndex =
        (currentSlideIndex - 1 + slides.length) % slides.length;
      moveToSlide(currentSlideIndex, currentSlideIndex);
    });

    return () => {
      window.removeEventListener('resize', updateSlideWidth);
    };
  }, []);

  const rooms = [
    {
      id: 1,
      name: 'Skyline Retreat',
      guests: '2 Guests',
      size: '35 Feet Size',
      price: '$50',
      image: 'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/g_5-533x533.webp',
    },
    {
      id: 2,
      name: 'Urban Loft',
      guests: '2 Guests',
      size: '35 Feet Size',
      price: '$50',
      image: 'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/g_5-533x533.webp',
    },
    {
      id: 3,
      name: 'Studio Sanctuary',
      guests: '2 Guests',
      size: '35 Feet Size',
      price: '$50',
      image: 'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/g_5-533x533.webp',
    },
    {
      id: 4,
      name: 'Luxury Escape',
      guests: '4 Guests',
      size: '50 Feet Size',
      price: '$100',
      image: 'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/g_5-533x533.webp',
    },
  ];

  return (
    <section className="bg-[#fff5ed] py-10 text-center">
      <h1 className="text-[#a98e79] uppercase text-sm tracking-wider">
        Rooms & Suites
      </h1>
      <h2 className="text-4xl font-semibold text-black mt-2">Our Rooms</h2>

      <div className="carousel mt-8 relative">
        <button className="carousel-button carousel-button-left absolute top-1/2 -translate-y-1/2 left-4 bg-black text-white p-2 rounded-full z-10">
          ❮
        </button>
        <div className="carousel-track-container overflow-hidden">
          <ul className="carousel-track flex transition-transform duration-500 ease-in-out">
            {rooms.map((room) => (
              <li
                key={room.id}
                className="carousel-slide flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4"
              >
                <div className="group relative bg-white rounded-lg overflow-hidden shadow-lg">
                  {/* Image */}
                  <img
                    src={room.image}
                    alt={room.name}
                    className="object-cover w-full h-64 sm:h-72 lg:h-80"
                  />

                  {/* Default Content */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-100 transition-all duration-300 group-hover:opacity-0">
                    <h3 className="text-2xl font-bold text-white">
                      {room.name}
                    </h3>
                    <p className="text-white">
                      {room.guests} · {room.size}
                    </p>
                  </div>

                  {/* Hover Content */}
                  <div className="absolute inset-0 bg-[#ab8965] flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                    <p className="text-white text-lg">From</p>
                    <h3 className="text-white text-4xl font-bold">
                      {room.price}
                    </h3>

                    <Link href={'/details'}>
                      <button className="uppercase mt-4 px-6 py-2 border border-[#e9dfd55c] text-white hover:bg-white hover:text-[#a98e79] transition-colors duration-300">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <button className="carousel-button carousel-button-right absolute top-1/2 -translate-y-1/2 right-4 bg-black text-white p-2 rounded-full z-10">
          ❯
        </button>
      </div>
    </section>
  );
};

export default OurRooms;
