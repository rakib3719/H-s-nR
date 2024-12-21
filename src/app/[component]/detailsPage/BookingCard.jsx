// import React, { useState } from "react";
// import { FaCalendarAlt, FaUser } from "react-icons/fa";

// const BookingCard = () => {
//   const [checkInDate, setCheckInDate] = useState("");
//   const [checkOutDate, setCheckOutDate] = useState("");
//   const [guests, setGuests] = useState("");

//   return (
//     <div className="max-w-sm p-6 bg-white shadow-md rounded-lg border border-gray-200">
//       {/* Rent Sale Section */}
//       <div className="text-center">
//         <h2 className="text-gray-500 text-sm font-medium">Rent Sale</h2>
//         <p className="text-pink-500 text-2xl font-bold mt-2">
//           BDT 2299<span className="text-base font-normal text-gray-600">/day</span>
//         </p>
//       </div>

//       {/* Date Selection */}
//       <div className="mt-6">
//         <div className="grid grid-cols-2 gap-4">
//           <div className="flex items-center border rounded-lg p-2 space-x-2">
//             <FaCalendarAlt className="text-gray-500" />
//             <div>
//               <p className="text-xs text-gray-500">Check In</p>
//               <input
//                 type="date"
//                 value={checkInDate}
//                 onChange={(e) => setCheckInDate(e.target.value)}
//                 className="w-full border-none outline-none text-sm text-gray-800"
//               />
//             </div>
//           </div>
//           <div className="flex items-center border rounded-lg p-2 space-x-2">
//             <FaCalendarAlt className="text-gray-500" />
//             <div>
//               <p className="text-xs text-gray-500">Check Out</p>
//               <input
//                 type="date"
//                 value={checkOutDate}
//                 onChange={(e) => setCheckOutDate(e.target.value)}
//                 className="w-full border-none outline-none text-sm text-gray-800"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Guests Selection */}
//       <div className="mt-4">
//         <div className="flex items-center border rounded-lg p-2 space-x-2">
//           <FaUser className="text-gray-500" />
//           <select
//             value={guests}
//             onChange={(e) => setGuests(e.target.value)}
//             className="w-full border-none outline-none text-sm text-gray-800"
//           >
//             <option value="" disabled>
//               Guest
//             </option>
//             <option value="1">1 Guest</option>
//             <option value="2">2 Guests</option>
//             <option value="3">3 Guests</option>
//             <option value="4">4 Guests</option>
//           </select>
//         </div>
//       </div>

//       {/* Book Now Button */}
//       <button className="mt-6 w-full bg-pink-500 text-white text-sm font-medium py-3 rounded-lg hover:bg-pink-600 transition-colors">
//         BOOK NOW
//       </button>
//     </div>
//   );
// };

// export default BookingCard;

import React, { useState } from "react";
import { FaCalendarAlt, FaUser } from "react-icons/fa";

const BookingCard = () => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    infants: 0,
  });
  const [showGuestModal, setShowGuestModal] = useState(false);

  const updateGuestCount = (type, operation) => {
    setGuests((prevGuests) => {
      const newCount =
        operation === "increment"
          ? prevGuests[type] + 1
          : Math.max(0, prevGuests[type] - 1);
      return { ...prevGuests, [type]: newCount };
    });
  };

  return (
    <div className="max-w-sm p-6 bg-white shadow-md rounded-lg border border-gray-200 relative">
      {/* Rent Sale Section */}
      <div className="text-center">
        <h2 className="text-gray-500 text-sm font-medium">Rent Sale</h2>
        <p className="text-pink-500 text-2xl font-bold mt-2">
          BDT 2299<span className="text-base font-normal text-gray-600">/day</span>
        </p>
      </div>

      {/* Date Selection */}
      <div className="mt-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center border rounded-lg p-2 space-x-2">
            <FaCalendarAlt className="text-gray-500" />
            <div>
              <p className="text-xs text-gray-500">Check In</p>
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="w-full border-none outline-none text-sm text-gray-800"
              />
            </div>
          </div>
          <div className="flex items-center border rounded-lg p-2 space-x-2">
            <FaCalendarAlt className="text-gray-500" />
            <div>
              <p className="text-xs text-gray-500">Check Out</p>
              <input
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="w-full border-none outline-none text-sm text-gray-800"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Guests Selection */}
      <div className="mt-4 relative">
        <div
          className="flex items-center border rounded-lg p-2 space-x-2 cursor-pointer"
          onClick={() => setShowGuestModal(true)}
        >
          <FaUser className="text-gray-500" />
          <div className="w-full">
            <p className="text-sm text-gray-800">
              {guests.adults + guests.children + guests.infants || "Guest"}
            </p>
          </div>
        </div>

        {/* Guest Modal */}
        {showGuestModal && (
          <div className="absolute top-14 left-0 w-full bg-white shadow-lg rounded-lg p-4 z-50">
            {/* Adults */}
            <div className="flex justify-between items-center py-2 border-b">
              <div>
                <p className="text-sm font-medium">Adult</p>
                <p className="text-xs text-gray-500">Ages 13 or above</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateGuestCount("adults", "decrement")}
                  className="w-8 h-8 flex items-center justify-center border rounded-full text-lg"
                >
                  –
                </button>
                <span className="text-sm font-medium">{guests.adults}</span>
                <button
                  onClick={() => updateGuestCount("adults", "increment")}
                  className="w-8 h-8 flex items-center justify-center border rounded-full bg-black text-white text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Children */}
            <div className="flex justify-between items-center py-2 border-b">
              <div>
                <p className="text-sm font-medium">Children</p>
                <p className="text-xs text-gray-500">Ages 2-12</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateGuestCount("children", "decrement")}
                  className="w-8 h-8 flex items-center justify-center border rounded-full text-lg"
                >
                  –
                </button>
                <span className="text-sm font-medium">{guests.children}</span>
                <button
                  onClick={() => updateGuestCount("children", "increment")}
                  className="w-8 h-8 flex items-center justify-center border rounded-full bg-black text-white text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Infants */}
            <div className="flex justify-between items-center py-2">
              <div>
                <p className="text-sm font-medium">Infants</p>
                <p className="text-xs text-gray-500">Under 2</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateGuestCount("infants", "decrement")}
                  className="w-8 h-8 flex items-center justify-center border rounded-full text-lg"
                >
                  –
                </button>
                <span className="text-sm font-medium">{guests.infants}</span>
                <button
                  onClick={() => updateGuestCount("infants", "increment")}
                  className="w-8 h-8 flex items-center justify-center border rounded-full bg-black text-white text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Done Button */}
            <button
              onClick={() => setShowGuestModal(false)}
              className="mt-4 w-full py-2 bg-pink-500 text-white text-sm font-medium rounded-lg hover:bg-pink-600 transition"
            >
              Done
            </button>
          </div>
        )}
      </div>

      {/* Book Now Button */}
      <button className="mt-6 w-full bg-pink-500 text-white text-sm font-medium py-3 rounded-lg hover:bg-pink-600 transition-colors">
        BOOK NOW
      </button>
    </div>
  );
};

export default BookingCard;
