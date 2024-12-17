import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Mydashboard = () => {
    return (
        <section>
            <aside className='flex gap-3 items-start'>
                <Sidebar />
                <Topbar />
            </aside>

        </section>
    );
};

export default Mydashboard;