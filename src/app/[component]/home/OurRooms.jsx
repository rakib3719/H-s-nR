// 'use client'

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination, Autoplay } from 'swiper/modules'; // Import Swiper modules

// const OurRooms = () => {
//   const [rooms, setRooms] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get(`/api/ourroom`)
//       .then((response) => {
//         setRooms(response.data.rooms || []);
//         setLoading(false);
//       })
//       .catch((error) => console.error('Error fetching rooms:', error));
//   }, []);

//   if (loading) {
//     return <p>Loading rooms...</p>;
//   }

//   return (
//     <div className="max-w-7xl mx-auto p-4">
//       <h1 className="text-3xl font-semibold text-center mb-8">Our Rooms</h1>
//       <Swiper
//         modules={[Pagination, Autoplay]}
//         spaceBetween={20}
//         slidesPerView={3} // Display 3 cards per row
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         className="rounded-lg overflow-hidden"
//       >
//         {rooms.map((room, index) => (
//           <SwiperSlide key={index} className="flex justify-center">
//             <div className="max-w-sm mx-auto p-4 bg-white shadow-lg rounded-lg overflow-hidden">
//               {/* Image Container */}
//               <div className="overflow-hidden rounded-lg">
//                 <img
//                   src={room.frontImage || 'https://via.placeholder.com/400'}
//                   alt={room.name}
//                   className="w-full h-48 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
//                 />
//               </div>

//               {/* Text Content */}
//               <div className="mt-4 text-center">
//                 <h1 className="text-2xl font-semibold text-gray-800">{room.name}</h1>
//                 <p className="text-gray-600 mt-2 text-lg">${room.price} / Night</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default OurRooms;













'use client'

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules'; // Import Swiper modules
import { TbCurrencyTaka } from "react-icons/tb";


const OurRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/ourroom`)
      .then((response) => {
        setRooms(response.data.rooms || []);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching rooms:', error));
  }, []);

  if (loading) {
    return <p>Loading rooms...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-8">Our Rooms</h1>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          // Mobile devices
          0: {
            slidesPerView: 1,
          },
          // Tablets
          640: {
            slidesPerView: 2,
          },
          // Desktops
          1024: {
            slidesPerView: 3,
          },
        }}
        className="rounded-lg overflow-hidden"
      >
        {rooms.map((room, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="max-w-sm mx-auto p-4 bg-white shadow-lg rounded-lg overflow-hidden">
              {/* Image Container */}
              <div className="overflow-hidden rounded-lg">
                <img
                  src={room.frontImage || 'https://via.placeholder.com/400'}
                  alt={room.name}
                  className="w-full h-48 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                />
              </div>

              {/* Text Content */}
              <div className="mt-4 text-center">
                <h1 className="text-2xl font-semibold text-gray-800">{room.name}</h1>
                <p className="text-gray-600 mt-2 text-lg flex items-center justify-center"><TbCurrencyTaka />{room.price} / Night</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurRooms;
