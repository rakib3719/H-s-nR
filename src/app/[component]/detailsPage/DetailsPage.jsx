'use client'




import React, { useEffect, useState } from 'react';
import ImageSlider from './ImageSlider';
import RoomSature from './RoomSature';
import ReservationCard from './ReservationCard';
import axios from 'axios';

const DetailsPage = ({params}) => {

    const [data, setData] = useState({})
const [loader, setLoader] = useState(false)
const bookingData = {
    name: data?.name,
    price: data?.price,
    roomNumber : data?.roomNumber
  }

const loadData = async(id)=>{
setLoader(true)
    try {
        const resp =await axios.get(`/api/details/${id}`)
        setData(resp?.data)
        setLoader(false)
        
    } catch (error) {
        setLoader(false)
    }
   
}
useEffect(()=>{
loadData(params?.id)

},[])

if(loader){
    return <p>Loading....</p>
}
    
    return (
        <section className="">
            
            <aside className="flex ">
                <div className="flex-1">
                    {/* <ImageSlider /> */}
                </div>
<h1>dsfdsafdfsa{data?.price}</h1>
                {/* RoomSature and ReservationCard */}
                <div className="lg:flex">
                    <RoomSature data={data} />
                    <ReservationCard bookingData={bookingData}/>
                </div>
            </aside>
        </section>
    );
};

export default DetailsPage;
