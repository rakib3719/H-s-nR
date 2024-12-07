'use client'




import React, { useEffect, useState } from 'react';
import ImageSlider from './ImageSlider';
import RoomSature from './RoomSature';
import ReservationCard from './ReservationCard';
import axios from 'axios';

const DetailsPage = ({ params }) => {

    const [data, setData] = useState({})
    const [loader, setLoader] = useState(false)


    const loadData = async (id) => {
        setLoader(true)
        try {
            const resp = await axios.get(`/api/details/${id}`)
            setData(resp?.data)
            setLoader(false)

        } catch (error) {
            setLoader(false)
        }

    }
    useEffect(() => {
        loadData(params?.id)

    }, [])

   
    


    return (
        <section className="">

            <aside className="">
                <div className="">
                    <ImageSlider data={data} />
                </div>

                {/* RoomSature and ReservationCard */}
                <div className=" max-w-7xl mx-auto py-10 px-4 lg:flex gap-2">
                    <RoomSature data={data} />
                    <ReservationCard />
                </div>
            </aside>
        </section>
    );
};

export default DetailsPage;
