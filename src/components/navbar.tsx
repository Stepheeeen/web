import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../public/FLAIR_TECH_DARK-removebg-preview.png";
import Menu from "../../public/menu-svg.svg";
import Close from "../../public/close-icon.svg";
import CloseBlck from "../../public/close-x-svg.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ styling, theme }: { styling: string; theme: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [LogoTheme, setLogoTheme] = useState(theme);
  const pathname = usePathname();

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const nav = [
    { name: "Home", path: "/", active: "" },
    { name: "About Us", path: "/about", active: "" },
    { name: "Portfolio", path: "/portfolio", active: "" },
    { name: "Our Team", path: "/team", active: "" },
    { name: "Contact Us", path: "/contact", active: "" },
  ];
  
  return (
    <>
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-0 px-[6px] py-[3px] flex justify-between items-center">
        <a href="/" className="flex justify-center items-center space-x-3 cursor-pointer">
          <Image alt="Logo" src={Logo} className="w-[14rem] md:w-[14.5rem] lg:w-[15.5rem]" />
        </a>

        <button
          className="md:hidden"
          onClick={toggleSidebar}
          aria-label="Toggle menu" 
        >
          <Image alt="menu-icon" src={Menu} className="w-[35px]" />
        </button>

        <ul className="hidden md:flex space-x-6 lg:space-x-8 text-gray-500 text-lg font-medium">
          {nav.map((links, i) => (
            <li key={i}>
              <Link
                href={links.path}
                className={`transition-colors duration-400 ${
                  pathname === links.path
                    ? "text-[#efa853]"
                    : "hover:text-black "
                }`}
              >
                {links.name}
              </Link>
            </li>
          ))}
        </ul> 
        <button className="hidden lg:flex px-[21px] py-[3px] bg-[#437fbf] border-[4px] border-[#437fbf] text-white rounded-[7px] text-lg font-medium transition-colors duration-400 hover:border-[#396eA7] hover:bg-[#396eA7] ">
          <a href={nav[4].path} >
            Get Started
          </a>
        </button>
      </div>

      {/* Menu for smaller devices */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-[#f6f6f6] shadow-lg transform transition-transform duration-500 ease-in-out z-40 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex justify-end py-[15px] px-[10px]">
          <button onClick={toggleSidebar} aria-label="Close menu">
            <Image alt="close-icon" src={CloseBlck} className="w-[35px]" />
          </button>
        </div>
        <ul className="px-8 space-y-4">
          {nav.map((links, i) => (
            <li key={i} className="mb-3">
              <Link
                href={links.path}
                className={`hover:underline text-[25px] font-medium ${
                  pathname === links.path
                    ? "text-transparent bg-clip-text bg-[#efa853] font-bold"
                    : "text-black"
                }`}
              >
                {links.name}
              </Link>
            </li>
          ))}
        </ul>
        
      </div>
      
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </nav> 
    </>
  );
};

export default Navbar;
