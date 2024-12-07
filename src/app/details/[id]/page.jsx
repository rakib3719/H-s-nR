import React from 'react';

import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa6';
import DetailsPage from '@/app/[component]/detailsPage/DetailsPage';
import axios from 'axios';

const getdata=async (id) => {
    let resp=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/details/${id}`)
    return resp.data
}


const Page = async({params}) => {
    const {id}=params
    let data =await getdata(id)
    console.log('dk',data);

    if (!data) {
        return <h1>loading...</h1>
    }
    
    return (
       <div>
         <aside
        className="relative h-[300px] flex flex-col justify-center items-center text-center text-white"
        style={{
            backgroundImage: `url('https://madebydesignesia.com/themes/almaris/images/background/3.webp')`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}
    >
        {/* Title Section */}
        <h1 className="text-4xl font-bold uppercase">Details</h1>
        {/* Orange Line */}
        <div className="mt-2 w-24 h-1 bg-orange-500 mx-auto"></div>

        {/* Breadcrumb Navigation */}
        <div className="flex items-center  space-x-2 mt-4 text-lg font-medium">
            <Link href="/" className="hover:underline">
                Home
            </Link>
            <FaAngleRight className="text-sm" />
            <span>Details</span>
        </div>
    </aside>

        <div className='mt-40'>

            <DetailsPage data={data}/>
        </div>
       </div>
    );
};

export default Page;