import React from 'react';
import ImageSlider from './ImageSlider';
import RoomSature from './RoomSature';
import ReservationCard from './ReservationCard';

const DetailsPage = () => {
    return (
        <section>
            <aside>
                {/* <ImageSlider /> */}

                <div className='flex gap-2'>
                    <RoomSature />
                    <ReservationCard/>
                </div>

            </aside>

        </section>
    );
};

export default DetailsPage;