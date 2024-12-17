// import React from 'react';
// import { FaAlignLeft } from 'react-icons/fa';

// const Topbar = () => {
//   return (
//     <div className="flex items-center p-4 bg-white shadow w-full">
//       <div className="flex-grow">
//         <div className="flex items-center space-x-4">
//             <div><FaAlignLeft/></div>
//           <div className="bg-green-500 text-white px-4 py-2 rounded">Website</div>
//           <div className="bg-blue-500 text-white px-4 py-2 rounded">Customer Invoice</div>
//           <div className="bg-gray-800 text-white px-4 py-2 rounded">Booking Report</div>
//         </div>
//       </div>
//       <div className="flex items-center space-x-4">
//         <div className="w-6 h-6 bg-gray-300 rounded"></div>
//         <div className="w-6 h-6 bg-gray-300 rounded"></div>
//         <div className="w-6 h-6 bg-gray-300 rounded"></div>
//         <div className="text-lg font-mono">19:55:49</div>
//       </div>
//     </div>
//   );
// };

// export default Topbar;




// // this is for laptop devices

import React from 'react';
import { FaAlignLeft } from 'react-icons/fa';

const Topbar = ({ toggleSidebar }) => {
  return (
    <div className="flex items-center p-4 bg-white shadow w-full">
      {/* Left Side */}
      <div className="flex-grow">
        <div className="flex items-center space-x-4">
          <button onClick={toggleSidebar} className="text-gray-700">
            <FaAlignLeft className="text-2xl cursor-pointer" />
          </button>
          <div className="bg-green-500 text-white px-4 py-2 rounded">Website</div>
          <div className="bg-blue-500 text-white px-4 py-2 rounded">Customer Invoice</div>
          <div className="bg-gray-800 text-white px-4 py-2 rounded">Booking Report</div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        <div className="w-6 h-6 bg-gray-300 rounded"></div>
        <div className="w-6 h-6 bg-gray-300 rounded"></div>
        <div className="w-6 h-6 bg-gray-300 rounded"></div>
        <div className="text-lg font-mono">19:55:49</div>
      </div>
    </div>
  );
};

export default Topbar;
