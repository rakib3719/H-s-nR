// import React from 'react';
// import Sidebar from './Sidebar';
// import Topbar from './Topbar';

// const Mydashboard = () => {
//     return (
//         <section>
//             <aside className='flex gap-3 items-start'>
//                 <Sidebar />
//                 <Topbar />
//             </aside>

//         </section>
//     );
// };

// export default Mydashboard;





// // this is for laptop devices

// 'use client'
// import React, { useState } from 'react';
// import Sidebar from './Sidebar';
// import Topbar from './Topbar';

// const Mydashboard = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const toggleSidebar = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <Sidebar isCollapsed={isCollapsed} />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Topbar */}
//         <Topbar toggleSidebar={toggleSidebar} />

//         {/* Page Content */}
//         <main className="flex-grow bg-gray-100 p-6">
//           <h1 className="text-2xl font-semibold">Welcome to My Dashboard</h1>
//           <p className="mt-4">
//             Click the toggle button on the top left to shrink or expand the sidebar.
//           </p>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Mydashboard;















// // // okay
// 'use client';
// import React, { useState } from 'react';
// import Sidebar from './Sidebar';
// import Topbar from './Topbar';

// const Mydashboard = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [showMobileSidebar, setShowMobileSidebar] = useState(false);

//   const toggleSidebar = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   const toggleMobileSidebar = () => {
//     setShowMobileSidebar(!showMobileSidebar);
//   };

//   return (
//     <div className="flex h-screen relative">
//       {/* Sidebar */}
//       <Sidebar isCollapsed={isCollapsed} showMobileSidebar={showMobileSidebar} />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Topbar */}
//         <Topbar toggleSidebar={toggleSidebar} toggleMobileSidebar={toggleMobileSidebar} />

//         {/* Page Content */}
//         <main className="flex-grow bg-gray-100 p-6">
//           <h1 className="text-2xl font-semibold">Welcome to My Dashboard</h1>
//           <p className="mt-4">
//             Click the toggle button on the top left to shrink or expand the sidebar.
//           </p>
//         </main>
//       </div>

//       {/* Mobile Sidebar Overlay */}
//       {showMobileSidebar && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
//           onClick={toggleMobileSidebar}
//         ></div>
//       )}
//     </div>
//   );
// };

// export default Mydashboard;















'use client';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Mydashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [activePage, setActivePage] = useState('Dashboard'); // State to track active page

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileSidebar = () => {
    setShowMobileSidebar(!showMobileSidebar);
  };

  // Handle page change
  const handlePageChange = (page) => {
    setActivePage(page);
    setShowMobileSidebar(false); // Close mobile sidebar on page selection
  };

  // Render content based on active page
  const renderContent = () => {
    switch (activePage) {
      case 'Dashboard':
        return <h1 className="text-2xl font-semibold">Welcome to My Dashboard</h1>;
      case 'Account':
        return <h1 className="text-2xl font-semibold">Account Details</h1>;
      case 'Customer':
        return <h1 className="text-2xl font-semibold">Customer Management</h1>;
      case 'Human Resource':
        return <h1 className="text-2xl font-semibold">HR Dashboard</h1>;
      case 'Payment Setting':
        return <h1 className="text-2xl font-semibold">Payment Settings</h1>;
      default:
        return <h1 className="text-2xl font-semibold">Page Not Found</h1>;
    }
  };

  return (
    <div className="flex h-screen relative">
      {/* Sidebar */}
      <Sidebar
        isCollapsed={isCollapsed}
        showMobileSidebar={showMobileSidebar}
        handlePageChange={handlePageChange}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <Topbar
          toggleSidebar={toggleSidebar}
          toggleMobileSidebar={toggleMobileSidebar}
        />

        {/* Page Content */}
        <main className="flex-grow bg-gray-100 p-6">
          {renderContent()}
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {showMobileSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMobileSidebar}
        ></div>
      )}
    </div>
  );
};

export default Mydashboard;
