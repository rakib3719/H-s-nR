'use client'
import Image from "next/image";


import Link from "next/link";

import { usePathname } from "next/navigation";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";


const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

  const pathname = usePathname();

  if (pathname.includes('/admin') || pathname.includes('/login')) {
    return null;
  }

  console.log(pathname.split('/')[1], "pathname");
  const currentPage = pathname.split('/')[1];

  // Navigation menu items array
  const menuItems = [
    { pathname: "Home", path: "/" },
    { pathname: "About Us", path: "/about" },
    { pathname: "Our Projects", path: "/project" },
    { pathname: "Contact Us", path: "/contact" },
    { pathname: "Why Choose Us?", path: "/#why" },
  ];


  return (
    <div  className={`absolute top-0 left-0 w-full z-50 transition-all  duration-300 ${
        isScrolled
          ? "sticky shadow-lg border-t border-gray-500 text-white bg-black "
          : "bg-transparent border-b bg-black border-gray-500"
      }`}>
      {/* <Header /> */}
      {/* Navbar */}
      <nav className="">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center h-20">

          {/* Logo Section */}
          <div className="flex font-bold items-center space-x-4">
            {/* <Image src={logo} alt="Logo" className="w-28 h-28 rounded-lg" /> */}

            Hotel-Seven-View
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-lg text-[#4A4A4A] font-medium">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`hover:text-[#1E2A47] transition-all ${!isScrolled ? `text-gray-400`:    `text-white`} font-jost font-bold  duration-300 ease-in-out transform hover:scale-105 ${
                  pathname === item.path ? "text-[#233153]" : ""
                }`}
              >
                {item.pathname}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
