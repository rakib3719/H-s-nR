// import Link from 'next/link';
// import React from 'react';
// import { FaAngleRight } from "react-icons/fa6";
// import AboutWelcome from './AboutWelcome';
// import OurTeam from './OurTeam';
// import AboutSlideImage from './AboutSlideImage';

// const AboutPage = () => {
//     return (
//         <section className="relative">
//             {/* Background Section */}

//             <aside
//                 className="relative h-[300px] flex flex-col justify-center items-center text-center text-white"
//                 style={{
//                     backgroundImage: `url('https://madebydesignesia.com/themes/almaris/images/background/3.webp')`,
//                     backgroundPosition: 'center',
//                     backgroundRepeat: 'no-repeat',
//                     backgroundSize: 'cover',
//                 }}
//             >
//                 {/* Title Section */}
//                 <h1 className="text-4xl font-bold uppercase">About Us</h1>
//                 {/* Orange Line */}
//                 <div className="mt-2 w-24 h-1 bg-orange-500 mx-auto"></div>

//                 {/* Breadcrumb Navigation */}
//                 <div className="flex items-center  space-x-2 mt-4 text-lg font-medium">
//                     <Link href="/" className="hover:underline">
//                         Home
//                     </Link>
//                     <FaAngleRight className="text-sm" />
//                     <span>About</span>
//                 </div>
//             </aside>

//             <aside>
//                 <AboutWelcome />
//             </aside>
//             <aside>
//                 <OurTeam />
//             </aside>
//         </section>
//     );
// };

// export default AboutPage;


import React from 'react';
import AboutSlideImage from './AboutSlideImage';
import hotel from '../../../../src/asset/images/francesca-saraco-_dS27XGgRyQ-unsplash.jpg'
import Image from 'next/image';
const AboutPage = () => {
    return (
        <div className='max-w-[1400px] mx-auto'>

            <AboutSlideImage />
            <aside className="flex flex-col md:flex-row items-center w-full px-6 py-10 bg-gray-100">
                {/* Left Content */}
                <div className="md:w-1/2 flex flex-col justify-center items-start text-left space-y-4">
                    <h2 className="text-4xl font-bold text-blue-800">Welcome to Our Hotel</h2>
                    <p className="text-gray-600 text-lg">
                        Experience the ultimate comfort and hospitality at our luxurious hotel.
                        With elegant rooms, exquisite dining, and outstanding service,
                        we ensure an unforgettable stay for all our guests.
                    </p>
                    <p className="text-gray-600 text-lg">
                        Whether you're here for business or leisure, we cater to your every need.
                        Relax, unwind, and create lasting memories with us.
                    </p>

                    {/* Additional Content */}
                    <div className="space-y-2">
                        <h3 className="text-2xl font-semibold text-blue-700">Amenities We Offer:</h3>
                        <ul className="list-disc list-inside text-gray-600 text-lg">
                            <li>Luxurious rooms with modern facilities</li>
                            <li>Fine dining experiences with multi-cuisine restaurants</li>
                            <li>State-of-the-art fitness center and spa</li>
                            <li>High-speed Wi-Fi across the property</li>
                            <li>Dedicated concierge and room service</li>
                        </ul>
                    </div>

                    {/* <div className="space-y-2 mt-4">
                        <h3 className="text-2xl font-semibold text-blue-700">What Our Guests Say:</h3>
                        <p className="italic text-gray-600">
                            "The hotel exceeded all our expectations! The staff were incredibly welcoming,
                            and the facilities were top-notch. Can't wait to return!" – John Doe
                        </p>
                    </div> */}


                </div>


                {/* Right Image */}
                <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
                    <Image
                        width={450}
                        height={550}
                        src={hotel} // Replace with your image URL
                        alt="Hotel"
                        className="rounded-lg shadow-lg w-full h-[400px] max-w-sm md:max-w-md object-cover"
                    />
                </div>
            </aside>
        </div>
    );
};

export default AboutPage;