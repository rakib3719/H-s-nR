'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBookOpenReader } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Image from 'next/image';

const SpecialOffers = () => {
    const ref = useRef(null); 
    const isInView = useInView(ref, { once: true }); 
    const textVariant = {
        hidden: { opacity: 0, x: 100 }, 
        visible: { opacity: 1, x: 0, transition: { duration: 1 } }, 
    };

    const imageVariant = {
        hidden: { opacity: 0, y: 50 }, 
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }, 
    };

    return (
        <section
            ref={ref} 
            className="flex justify-around gap-3 py-10"
        >
        
            <motion.aside
                initial="hidden"
                animate={isInView ? "visible" : "hidden"} 
                variants={textVariant}
            >
                <h1 className="text-[17px] uppercase">Hurry Up</h1>
                <h5 className="font-semibold text-4xl">Special Offers</h5>
                <div className="flex gap-6 mt-4">
                    <div className="w-[260px] text-left">
                        <div className="bg-[#ab8965] w-[70px] h-[70px] text-white flex items-center justify-center">
                            <FaBookOpenReader className="text-4xl" />
                        </div>
                        <h1 className="font-semibold mt-2">Reception 24h / 7 Days</h1>
                        <p className="opacity-75 mt-2">
                            Occaecat id ullamco consectetur labore officia eiusmod culpa dolore ut ullamco enim ut veniam nulla laboris id nisi.
                        </p>
                    </div>
                    <div className="w-[260px] text-left">
                        <div className="bg-[#ab8965] w-[70px] h-[70px] text-white flex items-center justify-center">
                            <FaPhoneAlt className="text-4xl" />
                        </div>
                        <h1 className="font-semibold mt-2">Reservation Online</h1>
                        <p className="opacity-75 mt-2">
                            Occaecat id ullamco consectetur labore officia eiusmod culpa dolore ut ullamco enim ut veniam nulla laboris id nisi.
                        </p>
                    </div>
                </div>
            </motion.aside>

            <motion.aside
                className="flex items-center gap-4"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"} 
                variants={imageVariant}
            >
                <Image
                    src={'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/4-1.webp'}
                    alt="photo"
                    width={250}
                    height={300}
                    className="rounded-md object-cover"
                />
               
                <Image
                    src={'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/5-1.webp'}
                    alt="photo"
                    width={200}
                    height={180} 
                    className="rounded-md object-cover h-[330px]"
                />
            </motion.aside>
        </section>
    );
};

export default SpecialOffers;
