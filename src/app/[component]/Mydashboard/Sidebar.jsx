





// 'use client'

// import React from 'react';
// import Link from 'next/link';
// import { 
//   FaHome, FaUser, FaUsers, FaDollarSign, FaShoppingCart, 
//   FaChartBar, FaThLarge, FaBed, FaUtensils, FaChevronLeft 
// } from 'react-icons/fa';

// const Sidebar = ({ isCollapsed, showMobileSidebar,handlePageChange }) => {
//   return (
//     <div
//       className={`bg-gray-900 text-white h-screen flex flex-col fixed md:relative z-50 transition-all duration-300 
//         ${isCollapsed ? 'w-16' : 'w-64'} 

//         ${showMobileSidebar ? 'left-0' : '-left-64'} md:left-0`}
//     >
//       {/* Logo */}
//       <div className={`flex items-center justify-center mt-10 ${isCollapsed && 'hidden'}`}>
//         <div className="text-2xl font-bold text-green-500">
//           Oxain<span className="text-white">Hotel</span>
//         </div>
//       </div>

//       {/* User Info */}
//       <div className={`flex items-center justify-center mt-6 ${isCollapsed && 'hidden'}`}>
//         <img
//           src="https://hotel.bdtask-demo.com/xainhotel/assets/img/user/m3.png"
//           alt="Avatar"
//           className="rounded-full w-12 h-12"
//         />
//         <div className="ml-4">
//           <div className="text-sm font-semibold">Jhon Doye</div>
//         </div>
//       </div>

//       {/* Navigation Links */}
//       <nav className="mt-10 flex-1">
//         <SidebarLink href="/" icon={<FaHome />} title="Dashboard" isCollapsed={isCollapsed}  />
//         <SidebarLink href="/room" icon={<FaUser />} title="Room" dropdown isCollapsed={isCollapsed}   onClick={() => handlePageChange('Account')}/>
//         <SidebarLink href="/booking" icon={<FaUsers />} title="Booking" dropdown isCollapsed={isCollapsed} onClick={() => handlePageChange('Customer')} />
//         <SidebarLink href="/message" icon={<FaUsers />} title="Message" dropdown isCollapsed={isCollapsed} onClick={() => handlePageChange('Human Resource')}/>
//         <SidebarLink href="/payment" icon={<FaDollarSign />} title="Payment Setting" dropdown isCollapsed={isCollapsed} onClick={() => handlePageChange('Payment Setting')}/>
//         <SidebarLink href="/purchase" icon={<FaShoppingCart />} title="Purchase Manage" dropdown isCollapsed={isCollapsed} onClick={()=>handlePageChange('Purchase Manage')} />
//         <SidebarLink href="/reports" icon={<FaChartBar />} title="Reports" dropdown isCollapsed={isCollapsed} onClick={()=>handlePageChange('Reports')}/>
//         <SidebarLink href="/room-facilities" icon={<FaThLarge />} title="Room Facilities" dropdown isCollapsed={isCollapsed} onClick={()=>handlePageChange('Room Facilities')}/>
//         <SidebarLink href="/reservation" icon={<FaBed />} title="Room Reservation" dropdown isCollapsed={isCollapsed}  onClick={()=>handlePageChange('Room Reservation')}/>
//         <SidebarLink
//           href="/restaurant"
//           icon={<FaUtensils />}
//           title="Restaurant"
//           addon={
//             !isCollapsed && (
//               <span className="bg-red-500 text-white text-xs px-2 py-1 rounded ml-2">Addon</span>
//             )
//           }
//           dropdown
//           isCollapsed={isCollapsed}
//         />
//       </nav>
//     </div>
//   );
// };

// const SidebarLink = ({ href, icon, title, addon, dropdown, isCollapsed,onClick }) => (
//   <div onClick={onClick}>
//     <div className="flex items-center py-2 px-6 hover:bg-gray-700 transition duration-300 cursor-pointer">
//       {icon && <span className="mr-3">{icon}</span>}
//       {!isCollapsed && <span className="flex-1">{title}</span>}
//       {addon && addon}
//       {dropdown && !isCollapsed && <FaChevronLeft className="ml-auto text-gray-400" />}
//     </div>
//   </div>
// );

// export default Sidebar;
















'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FaHome, FaUser, FaUsers, FaDollarSign, FaShoppingCart,
  FaChartBar, FaThLarge, FaBed, FaUtensils, FaChevronLeft, FaChevronDown,
  FaBookmark
} from 'react-icons/fa';
import { IoBed } from "react-icons/io5";

const Sidebar = ({ isCollapsed, showMobileSidebar, handlePageChange }) => {
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleExpand = (menu) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  return (
    <div
      className={`bg-gray-900 text-white h-screen  flex flex-col fixed md:relative z-50 transition-all duration-300 
        ${isCollapsed ? 'w-16' : 'w-64'} 
        ${showMobileSidebar ? 'left-0' : '-left-64'} md:left-0`}
    >
      {/* Logo */}
      <div className={`flex items-center justify-center mt-10 ${isCollapsed && 'hidden'}`}>
        <div className="text-2xl font-bold text-green-500">
           Hotel <span className="text-white">Seven View</span>
        </div>
      </div>

      {/* User Info */}
      <div className={`flex items-center justify-center mt-6 ${isCollapsed && 'hidden'}`}>
        <img
          src="https://hotel.bdtask-demo.com/xainhotel/assets/img/user/m3.png"
          alt="Avatar"
          className="rounded-full w-12 h-12"
        />
        <div className="ml-4">
          <div className="text-sm font-semibold">Admin</div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="mt-10 flex-1">
        <SidebarLink
          href="/"
          icon={<FaHome />}
          title="Dashboard"
          isCollapsed={isCollapsed}
          onClick={() => handlePageChange('Dashboard')}
        />

        <SidebarLink
          icon={<IoBed />}
          title="Room"
          isCollapsed={isCollapsed}
          dropdown
          isExpanded={expandedMenu === 'Room'}
          onExpand={() => toggleExpand('Room')}
          subLinks={[
            { title: 'Add Room', onClick: () => handlePageChange('Add Room') },
            { title: 'All Rooms', onClick: () => handlePageChange('All Rooms') },
          ]}
        />

        <SidebarLink
          icon={<FaBookmark />}
          title="Booking"
          isCollapsed={isCollapsed}
          dropdown
          isExpanded={expandedMenu === 'Booking'}
          onExpand={() => toggleExpand('Booking')}
          subLinks={[
            { title: 'Booking Management', onClick: () => handlePageChange('Booking Management') },
            { title: 'Add Booking', onClick: () => handlePageChange('Add Booking') },
          ]}
        />

        <SidebarLink
         onClick={() => handlePageChange('Message')}
          icon={<FaUsers />}
          title="Message"
          isCollapsed={isCollapsed}
        />
      </nav>
    </div>
  );
};

const SidebarLink = ({
  href,
  icon,
  title,
  dropdown,
  isCollapsed,
  isExpanded,
  onExpand,
  subLinks = [],
  onClick
}) => (
  <>
    <div
      className="flex items-center py-2 px-6 hover:bg-gray-700 transition duration-300 cursor-pointer"
      onClick={dropdown ? onExpand : onClick}
    >
      {icon && <span className="mr-3">{icon}</span>}
      {!isCollapsed && <span className="flex-1">{title}</span>}
      {dropdown && !isCollapsed && (
        <span className="ml-auto">
          {isExpanded ? <FaChevronDown className="text-gray-400" /> : <FaChevronLeft className="text-gray-400" />}
        </span>
      )}
    </div>

    {/* Sub-links */}
    {isExpanded && (
      <div className="pl-10">
        {subLinks.map((subLink, index) => (
          <div
            key={index}
            className="py-2 text-sm hover:text-green-500 cursor-pointer"
            onClick={subLink.onClick}
          >
            {subLink.title}
          </div>
        ))}
      </div>
    )}
  </>
);

export default Sidebar;









// import React from 'react';
// import Link from 'next/link';
// import {
//   FaHome, FaUser, FaUsers, FaDollarSign, FaShoppingCart,
//   FaChartBar, FaThLarge, FaBed, FaUtensils, FaChevronLeft
// } from 'react-icons/fa';

// const Sidebar = ({ isCollapsed, showMobileSidebar, handlePageChange }) => {
//   return (
//     <div
//       className={`bg-gray-900 text-white h-screen flex flex-col transition-all duration-300 z-50 ${
//         isCollapsed ? 'w-16' : 'w-64'
//       } ${showMobileSidebar ? 'absolute md:relative' : 'hidden md:flex'}`}
//     >
//       {/* Logo */}
//       <div className={`flex items-center justify-center mt-10 ${isCollapsed && 'hidden'}`}>
//         <div className="text-2xl font-bold text-green-500">
//           Oxain<span className="text-white">Hotel</span>
//         </div>
//       </div>

//       {/* Navigation Links */}
//       <nav className="mt-10 flex-1">
//         <SidebarLink
//           title="Dashboard"
//           icon={<FaHome />}
//           onClick={() => handlePageChange('Dashboard')}
//           isCollapsed={isCollapsed}
//         />
//         <SidebarLink
//           title="Account"
//           icon={<FaUser />}
//           onClick={() => handlePageChange('Account')}
//           isCollapsed={isCollapsed}
//         />
//         <SidebarLink
//           title="Customer"
//           icon={<FaUsers />}
//           onClick={() => handlePageChange('Customer')}
//           isCollapsed={isCollapsed}
//         />
//         <SidebarLink
//           title="Human Resource"
//           icon={<FaUsers />}
//           onClick={() => handlePageChange('Human Resource')}
//           isCollapsed={isCollapsed}
//         />
//         <SidebarLink
//           title="Payment Setting"
//           icon={<FaDollarSign />}
//           onClick={() => handlePageChange('Payment Setting')}
//           isCollapsed={isCollapsed}
//         />
//       </nav>
//     </div>
//   );
// };

// const SidebarLink = ({ title, icon, onClick, isCollapsed }) => (
//   <div
//     onClick={onClick}
//     className="flex items-center py-2 px-6 hover:bg-gray-700 cursor-pointer transition duration-300"
//   >
//     {icon && <span className="mr-3">{icon}</span>}
//     {!isCollapsed && <span className="flex-1">{title}</span>}
//   </div>
// );

// export default Sidebar;
