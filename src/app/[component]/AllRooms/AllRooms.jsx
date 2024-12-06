
// 'use client'
// import Link from "next/link";
// import React from "react";

// const AllRooms = () => {
//     const rooms = [
//         {
//           id: 1,
//           name: "Skyline Retreat",
//           guests: "2 Guests",
//           size: "35 Feet Size",
//           price: "$50",
//           image: 'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/g_5-533x533.webp',
//         },
//         {
//           id: 2,
//           name: "Urban Loft",
//           guests: "2 Guests",
//           size: "35 Feet Size",
//           price: "$50",
//           image: 'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/g_5-533x533.webp',
//         },
//         {
//           id: 3,
//           name: "Studio Sanctuary",
//           guests: "2 Guests",
//           size: "35 Feet Size",
//           price: "$50",
//           image: 'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/g_5-533x533.webp',
//         },
//         {
//           id: 4,
//           name: "Luxury Escape",
//           guests: "4 Guests",
//           size: "50 Feet Size",
//           price: "$100",
//           image: 'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/g_5-533x533.webp',
//         },
//         {
//           id: 5,
//           name: "Luxury Escape",
//           guests: "4 Guests",
//           size: "50 Feet Size",
//           price: "$100",
//           image: 'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/g_5-533x533.webp',
//         },
//         {
//           id: 6,
//           name: "Luxury Escape",
//           guests: "4 Guests",
//           size: "50 Feet Size",
//           price: "$100",
//           image: 'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/g_5-533x533.webp',
//         },
//       ];
//     return (
//         <section className="bg-[#fff5ed] py-10 text-center">
//         <h1 className="text-[#a98e79] uppercase text-sm tracking-wider">Rooms & Suites</h1>
//         <h2 className="text-4xl font-semibold text-black mt-2">Our Rooms</h2>

//         <div className="carousel">
//           <div className="carousel-track-container overflow-hidden">
//             <ul className="carousel-track flex">
//               {rooms.map((room) => (
//                 <li
//                   key={room.id}
//                   className="carousel-slide flex-shrink-0 w-1/3 px-4"
//                 >
//                   <div className="group relative bg-white rounded-lg overflow-hidden shadow-lg">
//                     {/* Image */}
//                     <img
//                       src={room.image}
//                       alt={room.name}
//                       className="object-cover w-full h-72"
//                     />

//                     {/* Default Content */}
//                     <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-100 transition-all duration-300 group-hover:opacity-0">
//                       <h3 className="text-2xl font-bold text-white">{room.name}</h3>
//                       <p className="text-white">
//                         {room.guests} · {room.size}
//                       </p>
//                     </div>

//                     {/* Hover Content */}
//                     <div className="absolute inset-0 bg-[#ab8965] flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
//                       <p className="text-white text-lg">From</p>
//                       <h3 className="text-white text-4xl font-bold">{room.price}</h3>

//                       <Link href={'/details'}>
//                         <button className="uppercase mt-4 px-6 py-2 border border-[#e9dfd55c] text-white hover:bg-white hover:text-[#a98e79] transition-colors duration-300">
//                           View Details
//                         </button>
//                       </Link>

//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>

//         </div>
//       </section>
//     );
// };

// export default AllRooms;












// 'use client';
// import Link from 'next/link';
// import React, { useState } from 'react';
// import { FaAngleRight } from 'react-icons/fa6';

// const AllRooms = ({ getRooms }) => {

//   const [rooms, setRooms] = useState(getRooms || [])
//   const [currentPage, setCurrentPage] = useState(1);
//   const roomsPerPage = 6;
//   console.log(rooms);

//   // Pagination logic
//   const indexOfLastRoom = currentPage * roomsPerPage;
//   const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
//   const currentRooms = rooms.slice(indexOfFirstRoom, indexOfLastRoom);
//   const totalPages = Math.ceil(rooms.length / roomsPerPage);

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage((prev) => prev + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prev) => prev - 1);
//     }
//   };

//   return (
//     <section>

//       <aside
//         className="relative  h-[300px] flex flex-col justify-center items-center text-center text-white"
//         style={{
//           backgroundImage: `url('https://madebydesignesia.com/themes/almaris/images/background/3.webp')`,
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           backgroundSize: 'cover',
//         }}
//       >
//         {/* Title Section */}
//         <h1 className="text-4xl font-bold uppercase pt-11">All Rooms</h1>
//         {/* Orange Line */}
//         <div className="mt-2 w-24 h-1 bg-orange-500 mx-auto"></div>

//         <p>Indulge in the ultimate blend of elegance and comfort <br /> in our meticulously designed rooms. <br /> Choose your room today.</p>


//         {/* Breadcrumb Navigation */}
//         <div className="flex items-center  space-x-2 mt-4 text-lg font-medium">
//           <Link href="/" className="hover:underline">
//             Home
//           </Link>
//           <FaAngleRight className="text-sm" />
//           <span>All rooms</span>
//         </div>
//       </aside>

//       <aside className="bg-[#fff5ed] py-10 text-center">
        

//         {/* Rooms Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 mt-10 ">
//           {rooms.map((room) => (
//             <div
//               key={room._id}
//               className="group relative bg-white  overflow-hidden shadow-lg "
//             >
//               {/* Image */}
//               <img
//                 src={room.frontImage}
//                 alt={room.name}
//                 className="object-cover w-full h-72"
//               />

//               {/* Default Content */}
//               <div className="absolute inset-0 bg-gradient-to-t from-[#ab8965] via-transparent to-transparent flex flex-col justify-end p-4 opacity-100 transition-all duration-300 group-hover:opacity-0">
//                 <h3 className="text-2xl font-bold text-white">{room.name}</h3>
//                 <p className="text-white">
//                   {room.guests} · {room.size}
//                 </p>
//               </div>

//               {/* Hover Content */}
//               <div className="absolute inset-0 bg-[#ab8965] flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
//                 <p className="text-white text-lg">From</p>
//                 <h3 className="text-white text-4xl font-bold">{room.price}</h3>

//                 <Link href={'/details'}>
//                   <button className="uppercase mt-4 px-6 py-2 border border-[#e9dfd55c] text-white hover:bg-white hover:text-[#a98e79] transition-colors duration-300">
//                     View Details
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Pagination Controls */}
//         <div className="flex justify-center items-center mt-10 space-x-4">
//           <button
//             onClick={handlePrevPage}
//             disabled={currentPage === 1}
//             className={`px-4 py-2 rounded-md bg-[#ab8965] text-white ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
//               }`}
//           >
//             Previous
//           </button>
//          <div className='flex gap-2'>
//           <button className='bg-black rounded-lg text-3xl font-semibold w-[70px] text-white'>1</button>
//           <button className='bg-black rounded-lg text-3xl font-semibold w-[70px] text-white'>2</button>
//           <button className='bg-black rounded-lg text-3xl font-semibold w-[70px] text-white'>3</button>
//           <button className='bg-black rounded-lg text-3xl font-semibold w-[70px] text-white'>4</button>
//           <button className='bg-black rounded-lg text-3xl font-semibold w-[70px] text-white'>5</button>
//           <button className='bg-black rounded-lg text-3xl font-semibold w-[70px] text-white'>6</button>
//          </div>
//           <button
//             onClick={handleNextPage}
//             disabled={currentPage === totalPages}
//             className={`px-4 py-2 rounded-md bg-[#ab8965] text-white ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
//               }`}
//           >
//             Next
//           </button>
//         </div>
//       </aside>

//     </section>
//   );
// };

// export default AllRooms;





'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaAngleRight } from 'react-icons/fa6';
import axios from 'axios';

const AllRooms = ({getRooms}) => {
  const [rooms, setRooms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const roomsPerPage = 6;
  const [loading,setLoading]=useState(true)

  // Fetch rooms data based on the current page
  const fetchRooms = async (page) => {
    try {
      setLoading(true)
      const response = await axios.get(
        `/api/room?page=${page}&limit=${roomsPerPage}`
      );
      console.log('API Response:', response.data); // Debug here
      setRooms(response.data.data || []);
      setLoading(false)
      setTotalPages(response.data.totalPages || 1);
    } catch (error) {
      console.error('Error fetching rooms:', error.message);
    }
  };
  

  useEffect(() => {
    fetchRooms(currentPage);
  }, [currentPage]);

  if (loading) {
    return <h1>loading..</h1>
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <section >
      <aside
        className="relative h-[300px] flex flex-col justify-center items-center text-center text-white"
        style={{
          backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('https://madebydesignesia.com/themes/almaris/images/background/3.webp')`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <h1 className="text-4xl font-bold uppercase pt-11 mt-16">All Rooms</h1>
        <div className="mt-2 w-24 h-1 bg-orange-500 mx-auto"></div>
        <p>
          Indulge in the ultimate blend of elegance and comfort <br /> in our
          meticulously designed rooms. <br /> Choose your room today.
        </p>
        <div className="flex items-center space-x-2 mt-4 text-lg font-medium">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <FaAngleRight className="text-sm" />
          <span>All rooms</span>
        </div>
      </aside>

      <aside className="py-10 text-center max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 mt-10">
          {rooms.map((room) => (
            <div
              key={room._id}
              className="group relative bg-white overflow-hidden shadow-lg"
            >
              <img
                src={room.frontImage}
                alt={room.name}
                className="object-cover w-full h-72"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#ab8965] via-transparent to-transparent flex flex-col justify-end p-4 opacity-100 transition-all duration-300 group-hover:opacity-0">
                <h3 className="text-2xl font-bold text-white">{room.name}</h3>
                <p className="text-white">
                  {room.guests} · {room.size}
                </p>
              </div>
              <div className="absolute inset-0 bg-[#ab8965] flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <p className="text-white text-lg">From</p>
                <h3 className="text-white text-4xl font-bold">{room.price}</h3>
                <Link href={`/details/${room._id}`}>
                  <button className="uppercase mt-4 px-6 py-2 border border-[#e9dfd55c] text-white hover:bg-white hover:text-[#a98e79] transition-colors duration-300">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-10 space-x-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md bg-[#ab8965] text-white ${
              currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded-md ${
                currentPage === index + 1
                  ? 'bg-black text-white'
                  : 'bg-gray-200 text-black'
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md bg-[#ab8965] text-white ${
              currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Next
          </button>
        </div>
      </aside>
    </section>
  );
};

export default AllRooms;


