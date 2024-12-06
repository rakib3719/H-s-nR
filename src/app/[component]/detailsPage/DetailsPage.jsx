// import React from 'react';
// import ImageSlider from './ImageSlider';
// import RoomSature from './RoomSature';
// import ReservationCard from './ReservationCard';

// const DetailsPage = () => {
//     return (
//         <section>
//             <aside>
//                 {/* <ImageSlider /> */}

//                 <div className='flex gap-2'>
//                     <br />
                    
//                     <RoomSature />
//                     <ReservationCard/>
//                 </div>

//             </aside>

//         </section>
//     );
// };

// export default DetailsPage;








import React from 'react';
import ImageSlider from './ImageSlider';
import RoomSature from './RoomSature';
import ReservationCard from './ReservationCard';

const DetailsPage = () => {
    return (
        <section className="">
            
            <aside className="flex ">
                <div className="flex-1">
                    {/* <ImageSlider /> */}
                </div>

                {/* RoomSature and ReservationCard */}
                <div className="lg:flex">
                    <RoomSature />
                    <ReservationCard />
                </div>
            </aside>
        </section>
    );
};

export default DetailsPage;
