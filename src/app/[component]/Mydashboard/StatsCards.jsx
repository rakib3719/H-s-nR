// import React from "react";
// import { FaCalendarAlt, FaDollarSign, FaUser } from "react-icons/fa";

// const StatsCards = () => {

//   const stats = [
//     {
//       id: 1,
//       title: "TODAY BOOKING",
//       value: "2",
//       icon: <FaCalendarAlt className="text-white text-2xl" />, // Icon
//       bgColor: "bg-orange-500", // Background color
//     },
//     {
//       id: 2,
//       title: "TOTAL AMOUNT",
//       value: "510.4m",
//       icon: <FaDollarSign className="text-white text-2xl" />, // Icon
//       bgColor: "bg-green-500", // Background color
//     },
//     {
//       id: 3,
//       title: "TOTAL CUSTOMER",
//       value: "3.1k",
//       icon: <FaUser className="text-white text-2xl" />, // Icon
//       bgColor: "bg-red-500", // Background color
//     },
//     {
//       id: 4,
//       title: "TOTAL BOOKING",
//       value: "1k",
//       icon: <FaCalendarAlt className="text-white text-2xl" />, // Icon
//       bgColor: "bg-blue-500", // Background color
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 bg-gray-100">
//       {stats.map((stat) => (
//         <div
//           key={stat.id}
//           className="bg-white shadow-md rounded-md p-4 flex items-center space-x-4"
//         >
//           <div
//             className={`w-12 h-12 flex items-center justify-center rounded-full ${stat.bgColor}`}
//           >
//             {stat.icon}
//           </div>
//           <div>
//             <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
//             <p className="text-black text-lg font-bold">{stat.value}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StatsCards;











'use client';

import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaDollarSign, FaUser } from "react-icons/fa";

const StatsCards = () => {
    const [loading,setLoading]=useState(true)
  const [stats, setStats] = useState({
    totalToday: 0,
    totalAmount: 0,
    totalMonth: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true)
        const response = await fetch("/api/booked-total");
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
      finally{
        setLoading(setLoading(false))
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return 'data is loading..'
  }

  const statsData = [
    {
      id: 1,
      title: "TODAY BOOKING",
      value: stats.totalToday,
      icon: <FaCalendarAlt className="text-white text-2xl" />, // Icon
      bgColor: "bg-orange-500", // Background color
    },
    {
      id: 2,
      title: "TOTAL AMOUNT",
      value: `$${stats.totalAmount}`,
      icon: <FaDollarSign className="text-white text-2xl" />, // Icon
      bgColor: "bg-green-500", // Background color
    },
    {
      id: 3,
      title: "TOTAL MONTHLY BOOKING",
      value: stats.totalMonth,
      icon: <FaUser className="text-white text-2xl" />, // Icon
      bgColor: "bg-red-500", // Background color
    },
  ];


  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 bg-gray-100">
      {statsData.map((stat) => (
        <div
          key={stat.id}
          className="bg-white shadow-md rounded-md p-4 flex items-center space-x-4"
        >
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-full ${stat.bgColor}`}
          >
            {stat.icon}
          </div>
          <div>
            <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
            <p className="text-black text-lg font-bold">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
