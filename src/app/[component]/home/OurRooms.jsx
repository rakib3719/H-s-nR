

'use client';

import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const OurRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    setLoading(true)
    axios
      .get(`/api/ourroom`)
      .then((response) => {
        setRooms(response.data.rooms || []);
        setLoading(false)
      })
      .catch((error) => console.error('Error fetching rooms:', error));
  }, []);

  useEffect(() => {
    if (rooms.length === 0) return; // Wait until rooms data is available

    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track?.children || []);
    const nextButton = document.querySelector('.carousel-button-right');
    const prevButton = document.querySelector('.carousel-button-left');

    let slideWidth = slides[0]?.getBoundingClientRect().width || 0;

    const updateSlideWidth = () => {
      slideWidth = slides[0]?.getBoundingClientRect().width || 0;
      slides.forEach((slide, index) => {
        slide.style.left = `${slideWidth * index}px`;
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

    const handleNextClick = () => {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      moveToSlide(currentSlideIndex, currentSlideIndex);
    };

    const handlePrevClick = () => {
      currentSlideIndex =
        (currentSlideIndex - 1 + slides.length) % slides.length;
      moveToSlide(currentSlideIndex, currentSlideIndex);
    };

    nextButton?.addEventListener('click', handleNextClick);
    prevButton?.addEventListener('click', handlePrevClick);

    return () => {
      window.removeEventListener('resize', updateSlideWidth);
      nextButton?.removeEventListener('click', handleNextClick);
      prevButton?.removeEventListener('click', handlePrevClick);
    };
  }, [rooms]);

  return (
    <section className="bg-[#fff5ed] py-10 text-center max-w-[1500px] px-4 lg:px-12 m-auto">
      <h1 className="text-[#a98e79] uppercase text-sm tracking-wider">
        Rooms & Suites
      </h1>
      <h2 className="text-4xl font-semibold text-black mt-2">Our Rooms</h2>

      {loading && <h1>loading...</h1> }

      { !loading && rooms.length === 0 ? (
        <p className="mt-8 text-gray-500">No rooms available at the moment.</p>
      ) : (
        <div className="carousel mt-8 relative">
          <button
            className="carousel-button carousel-button-left absolute top-1/2 -translate-y-1/2 left-4 bg-black text-white p-2 rounded-l-3xl rounded-r-md z-10"
            aria-label="Previous Slide"
          >
            ❮
          </button>
          <div className="carousel-track-container overflow-hidden">
            <ul className="carousel-track flex transition-transform duration-500 ease-in-out">
              {rooms.map((room) => (
                <li
                  key={room._id}
                  className="carousel-slide flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4"
                >
                  <div className="group relative bg-white rounded-lg overflow-hidden shadow-lg">
                    {/* Image */}
                    <img
                      src={room.frontImage}
                      alt={room.name}
                      className="object-cover w-full h-64 sm:h-72 lg:h-80"
                      loading="lazy"
                    />

                    {/* Default Content */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-100 transition-all duration-300 group-hover:opacity-0">
                      <h3 className="text-2xl font-bold text-white">
                        {room.name}
                      </h3>
                      <p className="text-white">
                        {room.squareFeet} · {room.roomSize}
                      </p>
                    </div>

                    {/* Hover Content */}
                    <div className="absolute inset-0 bg-[#ab8965] flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                      <p className="text-white text-lg">From</p>
                      <h3 className="text-white text-4xl font-bold">
                        {room.price || 256}
                      </h3>

                      <Link href={`/details/${room._id}`}>
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
          <button
            className="carousel-button carousel-button-right absolute top-1/2 -translate-y-1/2 right-0 bg-black text-white p-2 rounded-r-3xl rounded-l-md z-10"
            aria-label="Next Slide"
          >
            ❯
          </button>
        </div>
      )}
    </section>
  );
};

export default OurRooms;
