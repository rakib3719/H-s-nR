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



const DetailsPage = ({data}) => {
    return (
        <section className="">
            
            <aside className="">
                <div className="">
                    <ImageSlider imagesArray={data.images} />
                </div>

                {/* RoomSature and ReservationCard */}
                <div className="lg:flex">
                    <RoomSature data={data} />
                    <ReservationCard data={data} />
                </div>
            </aside>
        </section>
    );
};

export default DetailsPage;
