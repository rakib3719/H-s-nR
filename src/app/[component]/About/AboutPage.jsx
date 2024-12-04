import Link from 'next/link';
import React from 'react';
import { FaAngleRight } from "react-icons/fa6";
import AboutWelcome from './AboutWelcome';
import OurTeam from './OurTeam';

const AboutPage = () => {
    return (
        <section className="relative">
            {/* Background Section */}
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
                <h1 className="text-4xl font-bold uppercase">About Us</h1>
                {/* Orange Line */}
                <div className="mt-2 w-24 h-1 bg-orange-500 mx-auto"></div>

                {/* Breadcrumb Navigation */}
                <div className="flex items-center space-x-2 mt-4 text-lg font-medium">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <FaAngleRight className="text-sm" />
                    <span>About</span>
                </div>
            </aside>

            <aside>
                <AboutWelcome />
            </aside>
            <aside>
                <OurTeam />
            </aside>
        </section>
    );
};

export default AboutPage;
