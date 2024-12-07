
import Image from 'next/image';
import React from 'react';
import img1 from '../../../asset/random-section/2-1.webp'
import img2 from '../../../asset/random-section/4-5.webp'



const RandomSection = () => {
    return (
        <section className="py-10 max-w-[1400px] mx-auto px-4 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Card 1 */}
                <div className="relative w-full h-[300px] group overflow-hidden">
                    {/* Background Image */}
                    <Image
                        src={'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/08/3-1.webp'}
                        alt="Stay Section Background"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        className="absolute inset-0"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#ab8965] via-transparent to-transparent opacity-70"></div>

                    {/* Text for Default State */}
                    <div className="absolute inset-0 flex items-end justify-center pb-8">
                        <h1 className="text-white text-3xl font-semibold transition-transform duration-500 group-hover:translate-y-[-10px] group-hover:scale-105">
                            Stay
                        </h1>
                    </div>

                    {/* Hover Content Sliding Up */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#f8f3ee] text-black p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
                        {/* Dine Title with Delay on Hover and Disappearance */}
                        <h1 className="text-2xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 group-hover:scale-110 transform group-hover:translate-y-0 group-hover:delay-200">
                            Dine
                        </h1>
                        {/* Paragraph Text with Delay on Hover and Disappearance */}
                        <p className="text-center mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200 group-hover:translate-y-0 group-hover:scale-105 transform group-hover:delay-300">
                            Non ullamco magna qui non dolore sit ut proident quis ad ex nisi in esse sed
                            occaecat dolore consectetur tempor nostrud sit laboris in nostrud sed cillum
                            mollit irure exceptur.
                        </p>
                        {/* Button with Delay on Hover and Disappearance */}
                        <button className="px-6 py-2 bg-[#ab8965] text-white font-semibold rounded-md hover:bg-opacity-80 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 delay-300 transform group-hover:delay-400">
                            Read More
                        </button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="relative w-full h-[300px] group overflow-hidden">
                    {/* Background Image */}
                    <Image
                        src={'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/08/3-1.webp'}
                        alt="Stay Section Background"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        className="absolute inset-0"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#ab8965] via-transparent to-transparent opacity-70"></div>

                    {/* Text for Default State */}
                    <div className="absolute inset-0 flex items-end justify-center pb-8">
                        <h1 className="text-white text-3xl font-semibold transition-transform duration-500 group-hover:translate-y-[-10px] group-hover:scale-105">
                  Stay
                        </h1>
                    </div>

                    {/* Hover Content Sliding Up */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#f8f3ee] text-black p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
                        {/* Dine Title with Delay on Hover and Disappearance */}
                        <h1 className="text-2xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 group-hover:scale-110 transform group-hover:translate-y-0 group-hover:delay-200">
                            Dine
                        </h1>
                        {/* Paragraph Text with Delay on Hover and Disappearance */}
                        <p className="text-center mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200 group-hover:translate-y-0 group-hover:scale-105 transform group-hover:delay-300">
                        Non ullamco magna qui non dolore sit ut proident quis ad ex nisi in esse sed occaecat dolore consectetur tempor nostrud sit laboris in nostrud sed cillum mollit irure excepteur nulla magna cupidatat magna officia eiusmod dolore.
                        </p>
                        {/* Button with Delay on Hover and Disappearance */}
                        <button className="px-6 py-2 bg-[#ab8965] text-white font-semibold rounded-md hover:bg-opacity-80 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 delay-300 transform group-hover:delay-400">
                            Read More
                        </button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="relative w-full h-[300px] group overflow-hidden">
                    {/* Background Image */}
                    <Image
                        src={img1}
                        alt="Stay Section Background"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        className="absolute inset-0"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#ab8965] via-transparent to-transparent opacity-70"></div>

                    {/* Text for Default State */}
                    <div className="absolute inset-0 flex items-end justify-center pb-8">
                        <h1 className="text-white text-3xl font-semibold transition-transform duration-500 group-hover:translate-y-[-10px] group-hover:scale-105">
                            Stay
                        </h1>
                    </div>

                    {/* Hover Content Sliding Up */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#f8f3ee] text-black p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
                        {/* Dine Title with Delay on Hover and Disappearance */}
                        <h1 className="text-2xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 group-hover:scale-110 transform group-hover:translate-y-0 group-hover:delay-200">
                            Dine
                        </h1>
                        {/* Paragraph Text with Delay on Hover and Disappearance */}
                        <p className="text-center mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200 group-hover:translate-y-0 group-hover:scale-105 transform group-hover:delay-300">
                            Non ullamco magna qui non dolore sit ut proident quis ad ex nisi in esse sed
                            occaecat dolore consectetur tempor nostrud sit laboris in nostrud sed cillum
                            mollit irure exceptur.
                        </p>
                        {/* Button with Delay on Hover and Disappearance */}
                        <button className="px-6 py-2 bg-[#ab8965] text-white font-semibold rounded-md hover:bg-opacity-80 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 delay-300 transform group-hover:delay-400">
                            Read More
                        </button>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="relative w-full h-[300px] group overflow-hidden">
                    {/* Background Image */}
                    <Image
                        src={img2}
                        alt="Stay Section Background"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        className="absolute inset-0"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#ab8965] via-transparent to-transparent opacity-70"></div>

                    {/* Text for Default State */}
                    <div className="absolute inset-0 flex items-end justify-center pb-8">
                        <h1 className="text-white text-3xl font-semibold transition-transform duration-500 group-hover:translate-y-[-10px] group-hover:scale-105">
                            Stay
                        </h1>
                    </div>

                    {/* Hover Content Sliding Up */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#f8f3ee] text-black p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
                        {/* Dine Title with Delay on Hover and Disappearance */}
                        <h1 className="text-2xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 group-hover:scale-110 transform group-hover:translate-y-0 group-hover:delay-200">
                            Dine
                        </h1>
                        {/* Paragraph Text with Delay on Hover and Disappearance */}
                        <p className="text-center mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200 group-hover:translate-y-0 group-hover:scale-105 transform group-hover:delay-300">
                            Non ullamco magna qui non dolore sit ut proident quis ad ex nisi in esse sed
                            occaecat dolore consectetur tempor nostrud sit laboris in nostrud sed cillum
                            mollit irure exceptur.
                        </p>
                        {/* Button with Delay on Hover and Disappearance */}
                        <button className="px-6 py-2 bg-[#ab8965] text-white font-semibold rounded-md hover:bg-opacity-80 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 delay-300 transform group-hover:delay-400">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RandomSection;
