


import React from 'react';
import { FaBookOpenReader } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Image from 'next/image';
const SpecialOffers = () => {
    return (
        <section className='flex justify-around gap-3'>

            <aside>
                <h1 className='text-[17px] uppercase'>Hurry Up</h1>
                <h5 className='font-semibold text-4xl'> Special Offers</h5>
                <div className='flex gap-2'>
                    <div className='w-[230px] text-left'>
                        <div className='bg-[#ab8965] w-[70px] h-[70px] text-white flex items-center justify-center'>
                            <FaBookOpenReader className='text-4xl' />
                        </div>

                        <h1 className='font-semibold'>Reception 24h / 7 Days</h1>
                        <p className='opacity-75'>Occaecat id ullamco consectetur labore officia eiusmod culpa dolore ut ullamco enim ut veniam nulla laboris id nisi.</p>
                    </div>
                    <div className='w-[230px] text-left'>
                        <div className='bg-[#ab8965] w-[70px] h-[70px] text-white flex items-center justify-center'>
                            <FaPhoneAlt className='text-4xl' />
                        </div>

                        <h1 className='font-semibold'>Reservation Online</h1>
                        <p className='opacity-75'>Occaecat id ullamco consectetur labore officia eiusmod culpa dolore ut ullamco enim ut veniam nulla laboris id nisi.</p>
                    </div>
                </div>

            </aside>

            <aside className='flex gap-2'>
                <Image
                    src={'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/4-1.webp'}
                    alt='photo'
                    width={250}
                    height={300}
                />
                <Image
                    src={'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/5-1.webp'}
                    alt='photo'
                    width={200}
                    height={200}
                />
            </aside>
        </section>
    );
};

export default SpecialOffers;