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

'use client'
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Mydashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isCollapsed={isCollapsed} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <Topbar toggleSidebar={toggleSidebar} />

        {/* Page Content */}
        <main className="flex-grow bg-gray-100 p-6">
          <h1 className="text-2xl font-semibold">Welcome to My Dashboard</h1>
          <p className="mt-4">
            Click the toggle button on the top left to shrink or expand the sidebar.
          </p>
        </main>
      </div>
    </div>
  );
};

export default Mydashboard;
