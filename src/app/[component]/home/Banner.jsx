


// 'use client';

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import ReactDatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { FaCheckCircle, FaMapMarkerAlt, FaCalendarAlt, FaUser } from 'react-icons/fa';
// import { format } from 'date-fns';
// import bannerImg from '@/asset/images/banner.webp';

// const Banner = () => {
//   const [isDateModalOpen, setIsDateModalOpen] = useState(false);
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(null);

//   const openDateModal = () => setIsDateModalOpen(true);
//   const closeDateModal = () => setIsDateModalOpen(false);

//   return (
//     <div className="relative pt-28 bg-[#fff5ed] overflow-hidden">
//       {/* Main Container */}
//       <div className="lg:flex max-w-[1400px] mx-auto px-4 lg:px-12 items-center py-16 gap-12 lg:text-left text-center">
//         {/* Left Section */}
//         <motion.section
//           className="flex-1"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, ease: 'easeOut' }}
//         >
//           <h1 className="font-montserrat font-bold text-4xl lg:text-6xl text-[#ab8965] leading-tight">
//             Hotel Seven View
//           </h1>
//           <p className="font-lato text-gray-700 mt-6 text-lg">
//             Immerse yourself in the epitome of luxury at <b>Hotel Seven View</b>, your premier destination in Uttara Dhaka.
//             Our hotel redefines elegance and comfort, offering an exquisite escape for discerning travelers.
//           </p>
//           <ul className="mt-6 space-y-2">
//             <li className="flex items-center text-gray-600">
//               <FaCheckCircle className="text-[#ab8965] mr-3" /> World-class amenities and services
//             </li>
//             <li className="flex items-center text-gray-600">
//               <FaCheckCircle className="text-[#ab8965] mr-3" /> Located in the heart of New York
//             </li>
//             <li className="flex items-center text-gray-600">
//               <FaCheckCircle className="text-[#ab8965] mr-3" /> 24/7 personalized support
//             </li>
//           </ul>
//           <div className="flex gap-4 mt-8">
//             <motion.button
//               className="bg-[#ab8965] text-white px-6 py-3 rounded-md font-semibold shadow-md hover:shadow-lg hover:bg-[#937557] transition-all"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Book Your Stay
//             </motion.button>
//             <motion.button
//               className="border-2 border-[#ab8965] text-[#ab8965] px-6 py-3 rounded-md font-semibold hover:bg-[#ab8965] hover:text-white transition-all"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Explore More
//             </motion.button>
//           </div>
//         </motion.section>

//         {/* Right Section: Image */}
//         <motion.section
//           className="mt-12 lg:mt-0 flex-1"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, ease: 'easeOut' }}
//         >
//           <Image
//             src={bannerImg}
//             alt="Hotel Seven View Banner"
//             className="rounded-lg shadow-md"
//           />
//         </motion.section>
//       </div>

//       {/* Search Bar Section */}
//       <div className="relative bg-white shadow-lg rounded-lg max-w-6xl mx-auto -mt-10 p-4 lg:p-6 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6">
//         {/* Location Input */}
//         <div className="flex items-center border border-gray-300 rounded-lg p-3 flex-1 w-full lg:w-auto">
//           <FaMapMarkerAlt className="text-gray-500 mr-2" />
//           <div>
//             <p className="text-gray-600 text-sm">Where do you want to stay?</p>
//             <input
//               type="text"
//               placeholder="Enter Location"
//               className="w-full outline-none text-gray-800 placeholder-gray-400"
//             />
//           </div>
//         </div>

//         {/* Date Input */}
//         <div
//           className="flex items-center border border-gray-300 rounded-lg p-3 flex-1 w-full lg:w-auto cursor-pointer"
//           onClick={openDateModal}
//         >
//           <FaCalendarAlt className="text-gray-500 mr-2" />
//           <div>
//             <p className="text-gray-600 text-sm">Check In - Check Out</p>
//             <p className="text-gray-800">
//               {startDate && endDate
//                 ? `${format(startDate, 'dd MMM, yyyy')} - ${format(endDate, 'dd MMM, yyyy')}`
//                 : 'Select Date'}
//             </p>
//           </div>
//         </div>

//         {/* Guest Input */}
//         <div className="flex items-center border border-gray-300 rounded-lg p-3 flex-1 w-full lg:w-auto">
//           <FaUser className="text-gray-500 mr-2" />
//           <div>
//             <p className="text-gray-600 text-sm">Guest</p>
//             <input
//               type="text"
//               placeholder="Guest"
//               className="w-full outline-none text-gray-800 placeholder-gray-400"
//             />
//           </div>
//         </div>

//         {/* Search Button */}
//         <button className="bg-[#ff217a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e91e63] transition-all w-full lg:w-auto">
//           Search
//         </button>
//       </div>

//       {/* Date Picker Modal */}
//       {isDateModalOpen && (
//         <div className="fixed w-full inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
//             <div className="flex justify-between items-center border-b pb-4 mb-4">
//               <h2 className="text-xl font-bold text-gray-800">Select Dates</h2>
//               <button onClick={closeDateModal} className="text-gray-600 text-lg hover:text-gray-800">
//                 &times;
//               </button>
//             </div>
//             <ReactDatePicker
//             className='w-full'
//               selected={startDate}
//               onChange={(dates) => {
//                 const [start, end] = dates;
//                 setStartDate(start);
//                 setEndDate(end);
//               }}
//               startDate={startDate}
//               endDate={endDate}
//               selectsRange
//               inline
//               calendarClassName='w-full'
//             />
//             <button
//               className="mt-4 w-full bg-[#ff217a] text-white py-2 rounded-md font-semibold hover:bg-[#e91e63] transition-all"
//               onClick={closeDateModal}
//             >
//               Done
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Banner;








'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCheckCircle, FaMapMarkerAlt, FaCalendarAlt, FaUser } from 'react-icons/fa';
import { format } from 'date-fns';
import bannerImg from '@/asset/images/banner.webp';

const Banner = () => {
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [guests, setGuests] = useState({
    adults: 2,
    children: 0,
    rooms: 1,
  });

  const openDateModal = () => setIsDateModalOpen(true);
  const closeDateModal = () => setIsDateModalOpen(false);
  const openGuestModal = () => setIsGuestModalOpen(true);
  const closeGuestModal = () => setIsGuestModalOpen(false);

  // Handle Increment/Decrement for guest selection
  const updateGuests = (key, value) => {
    setGuests((prev) => ({
      ...prev,
      [key]: Math.max(0, value), // Prevent negative values
    }));
  };

  return (
    <div className="relative bg-[#fff5ed] overflow-hidden">
      {/* Main Container */}
      <div className=" pt-28  lg:flex max-w-[1400px] mx-auto px-4 lg:px-12 items-center py-16 gap-12 lg:text-left text-center">
        {/* Left Section */}
        <motion.section
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="font-montserrat font-bold text-4xl lg:text-6xl text-[#ab8965] leading-tight">
            Hotel Seven View
          </h1>
          <p className="font-lato text-gray-700 mt-6 text-lg">
            Immerse yourself in the epitome of luxury at <b>Hotel Seven View</b>, your premier destination in Uttara Dhaka.
            Our hotel redefines elegance and comfort, offering an exquisite escape for discerning travelers.
          </p>
          <ul className="mt-6 space-y-2 hidden">
            <li className="flex items-center text-gray-600">
              <FaCheckCircle className="text-[#ab8965] mr-3" /> World-class amenities and services
            </li>
            <li className="flex items-center text-gray-600">
              <FaCheckCircle className="text-[#ab8965] mr-3" /> Located in the heart of New York
            </li>
            <li className="flex items-center text-gray-600">
              <FaCheckCircle className="text-[#ab8965] mr-3" /> 24/7 personalized support
            </li>
          </ul>
        </motion.section>

        {/* Right Section */}
        <motion.section
          className="mt-12 lg:mt-0 flex-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Image src={bannerImg} alt="Hotel Seven View Banner" className="rounded-lg shadow-md" />
        </motion.section>
      </div>

      {/* Search Bar Section */}
      <div className="relative bg-white shadow-lg rounded-lg max-w-6xl mx-auto -mt-10 p-4 lg:p-6 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6">
        {/* Location Input */}
        <div className="items-center border border-gray-300 rounded-lg p-3 flex-1 w-full lg:w-auto hidden">
          <FaMapMarkerAlt className="text-gray-500 mr-2" />
          <div>
            <p className="text-gray-600 text-sm">Where do you want to stay?</p>
            <input
              type="text"
              placeholder="Enter Location"
              className="w-full outline-none text-gray-800 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Date Input */}
        <div
          className="flex items-center border border-gray-300 rounded-lg p-3 flex-1 w-full lg:w-auto cursor-pointer"
          onClick={openDateModal}
        >
          <FaCalendarAlt className="text-gray-500 mr-2" />
          <div>
            <p className="text-gray-600 text-sm">Check In - Check Out</p>
            <p className="text-gray-800">
              {startDate && endDate
                ? `${format(startDate, 'dd MMM, yyyy')} - ${format(endDate, 'dd MMM, yyyy')}`
                : 'Select Date'}
            </p>
          </div>
        </div>

        {/* Guest Input */}
        <div
          className="flex items-center border border-gray-300 rounded-lg p-3 flex-1 w-full lg:w-auto cursor-pointer"
          onClick={openGuestModal}
        >
          <FaUser className="text-gray-500 mr-2" />
          <div>
            <p className="text-gray-600 text-sm">Guest</p>
            <p className="text-gray-800">
              {`${guests.adults} Adults, ${guests.children} Children, ${guests.rooms} Rooms`}
            </p>
          </div>
        </div>

        {/* Search Button */}
        <button className="bg-[#ff217a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e91e63] transition-all w-full lg:w-auto">
          Search
        </button>
      </div>

      {/* Guest Modal */}
      {isGuestModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Select Guests</h2>
            {['adults', 'children', 'rooms'].map((key) => (
              <div key={key} className="flex justify-between items-center mb-4">
                <p className="capitalize">{key}</p>
                <div className="flex items-center gap-2">
                  <button
                    className="bg-gray-300 px-2 rounded"
                    onClick={() => updateGuests(key, guests[key] - 1)}
                  >
                    -
                  </button>
                  <span>{guests[key]}</span>
                  <button
                    className="bg-gray-300 px-2 rounded"
                    onClick={() => updateGuests(key, guests[key] + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
            <button
              className="bg-[#ff217a] text-white py-2 rounded-md font-semibold hover:bg-[#e91e63] transition-all w-full"
              onClick={closeGuestModal}
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Date Picker Modal */}
      {isDateModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <ReactDatePicker
              selected={startDate}
              onChange={(dates) => {
                const [start, end] = dates;
                setStartDate(start);
                setEndDate(end);
              }}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
              calendarClassName='w-full'
            />
            <button
              className="mt-4 w-full bg-[#ff217a] text-white py-2 rounded-md font-semibold hover:bg-[#e91e63] transition-all"
              onClick={closeDateModal}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
