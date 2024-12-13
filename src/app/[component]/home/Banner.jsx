'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import bannerImg from '@/asset/images/banner.webp';
import { FaCheckCircle } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className="relative pt-28 bg-[#fff5ed] overflow-hidden">
      <div className="lg:flex max-w-[1400px] mx-auto px-4 lg:px-12 items-center py-16 gap-12 lg:text-left text-center">
        {/* Left Section: Text and CTA */}
        <motion.section
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="font-montserrat font-bold text-4xl lg:text-6xl text-[#ab8965] leading-tight">
            Hotel Seven View
          </h1>
          <p className="font-lato text-gray-700 mt-6 text-lg">
            Immerse yourself in the epitome of luxury at **Hotel Seven View**, your premier destination in Uttara Dhaka. 
            Our hotel redefines elegance and comfort, offering an exquisite escape for discerning travelers.
          </p>
          <ul className="mt-6 space-y-2">
            <li className="flex items-center text-gray-600">
              <FaCheckCircle className="text-[#ab8965] mr-3" /> World-class amenities and services
            </li>
            <li className="flex items-center text-gray-600">
              <FaCheckCircle className="text-[#ab8965] mr-3" /> Located in the heart of New York
            </li>
            <li className="flex items-center text-gray-600">
              <FaCheckCircle className="text-[#ab8965] mr-3" /> 24/7 personalized support
            </li>
          </ul>
          <div className="flex gap-4 mt-8">
            <motion.button
              className="bg-[#ab8965] text-white px-6 py-3 rounded-md font-semibold shadow-md hover:shadow-lg hover:bg-[#937557] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Stay
            </motion.button>
            <motion.button
              className="border-2 border-[#ab8965] text-[#ab8965] px-6 py-3 rounded-md font-semibold hover:bg-[#ab8965] hover:text-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore More
            </motion.button>
          </div>
        </motion.section>

        {/* Right Section: Image */}
        <motion.section
          className="mt-12 lg:mt-0 flex-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Image
            src={bannerImg}
            alt="Hotel Seven View Banner"
            className=""
          />
        </motion.section>
      </div>

      {/* Decorative Overlay */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#ab8965] rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#ab8965] rounded-full opacity-20 blur-3xl" />
    </div>
  );
};

export default Banner;
