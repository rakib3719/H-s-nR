


// import React from 'react';
// import Link from 'next/link';
// import { 
//   FaHome, FaUser, FaUsers, FaDollarSign, FaShoppingCart, 
//   FaChartBar, FaThLarge, FaBed, FaUtensils, FaChevronLeft 
// } from 'react-icons/fa';

// const Sidebar = () => {
//   return (
//     <div className="bg-gray-900 text-white w-64 h-screen flex flex-col">
//       {/* Logo */}
//       <div className="flex items-center justify-center mt-10">
//         <div className="text-2xl font-bold text-green-500">
//           Oxain<span className="text-white">Hotel</span>
//         </div>
//       </div>

//       {/* User Info */}
//       <div className="flex items-center justify-center mt-6">
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
//         <SidebarLink href="/" icon={<FaHome />} title="Dashboard" />
//         <SidebarLink href="/account" icon={<FaUser />} title="Account" dropdown />
//         <SidebarLink href="/customer" icon={<FaUsers />} title="Customer" dropdown />
//         <SidebarLink href="/hr" icon={<FaUsers />} title="Human Resource" dropdown />
//         <SidebarLink href="/payment" icon={<FaDollarSign />} title="Payment Setting" dropdown />
//         <SidebarLink href="/purchase" icon={<FaShoppingCart />} title="Purchase Manage" dropdown />
//         <SidebarLink href="/reports" icon={<FaChartBar />} title="Reports" dropdown />
//         <SidebarLink href="/room-facilities" icon={<FaThLarge />} title="Room Facilities" dropdown />
//         <SidebarLink href="/reservation" icon={<FaBed />} title="Room Reservation" dropdown />
//         <SidebarLink 
//           href="/restaurant" 
//           icon={<FaUtensils />} 
//           title="Restaurant" 
//           addon={<span className="bg-red-500 text-white text-xs px-2 py-1 rounded ml-2">Addon</span>} 
//           dropdown 
//         />
//       </nav>
//     </div>
//   );
// };

// const SidebarLink = ({ href, icon, title, addon, dropdown }) => (
//   <Link href={href} passHref>
//     <span className="flex items-center py-2 px-6 hover:bg-gray-700 transition duration-300">
//       {icon && <span className="mr-3">{icon}</span>}
//       <span className="flex-1">{title}</span>
//       {addon && addon}
//       {dropdown && <FaChevronLeft className="ml-auto text-gray-400" />}
//     </span>
//   </Link>
// );

// export default Sidebar;



