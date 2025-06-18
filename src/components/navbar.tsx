import Image from "next/image";
import React, { useState } from "react";
import LogoLight from "../../public/FLAIR_TECH_DARK-removebg-preview.png";
import LogoDark from "../../public/FLAIR_TECH_LIGHT-removebg-preview.png";
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
  
  const social = [
    { name: "Instagram", path: "ttps://www.instagram.com/flair_technologies?igsh=MWR5aTF0ZzczNTY4cw%3D%3D&utm_source=qr", active: "" },
    { name: "Twitter", path: "https://x.com/flairtechlabs", active: "" },
    { name: "Tiktok", path: "https://www.tiktok.com/@flair_technologies?_t=ZM-8xCyS0Ih5LK&_r=1", active: "" },
  ];

  return (
    <>
      <nav
        className={`w-full flex py-7 px-5 items-center justify-between bg-transparent text-black text-[18px] font-medium ${styling}`}
      >
        {LogoTheme === "dark" ? (<Image
          src={LogoLight}
          alt="Flair Technology Logo"
          className="w-44 md:w-64 mb-4"
        />) : (<Image
          src={LogoDark}
          alt="Flair Technology Logo"
          className="w-44 md:w-64 mb-4"
        />)}


        <button onClick={toggleSidebar}>
          <svg
            width="100"
            height="50"
            viewBox="0 0 100 50"
            xmlns="http://www.w3.org/2000/svg"
            className="group cursor-pointer"
          >
            <line
              x1="10"
              y1="10"
              x2="80"
              y2="10"
              stroke={`${LogoTheme === "dark" ? "black" : "white"}`}
              strokeWidth="2"
            />
            <line
              x1="40"
              y1="20"
              x2="80"
              y2="20"
              stroke={`${LogoTheme === "dark" ? "black" : "white"}`}
              strokeWidth="2"
              className="bottom-line transition-transform origin-left duration-300 ease-in-out"
            />
          </svg>
        </button>
      </nav>

      <div
        className={`fixed inset-0 flex items-center justify-center w-full h-full text-white syne bg-[#1b1b1b] md:p-32 z-50
    ${isOpen ? "sidebar-enter-active" : "sidebar-exit-active"}`}
      >
        <ul className="text-[30px] md:text-[37px] md:w-[34%]">
          {nav.map((links, i) => (
            <li key={i} className="mb-3">
              <Link
                href={links.path}
                className={`hover:underline font-medium ${pathname === links.path
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-violet-500 font-bold"
                  : ""
                  }`}
              >
                {links.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:w-[30%] md:flex flex-col items-start justify-center border-l border-l-white pl-20 h-full gap-3">
          <h1 className="text-[37px] geist">Get In Touch</h1>
          <div className="text-[18px] leading-relaxed flex flex-col gap-2">
            <p>Hungray <a href="http://wa.me/+36303690608">+(36) 30-369-0608</a></p>
            <p>Nigeria <a href="https://wa.me/971630288993">+(234) 805 258 9663</a></p>
            <a href="mailto:flairtechhq@gmail.com">flairtechhq@gmail.com</a>
          </div>

          <ul className="text-[21px] mt-4 poppins">
            {social.map((socials, i) => (
              <li key={i} className="mb-2">
                <Link href={socials.path} className={`font-medium`}>
                  {socials.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* <Image alt="Logo" src={LogoLight} className="w-[60px] absolute top-[6%] left-[4%]"/> */}

        <button onClick={toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x w-[45px] h-[45px] md:w-[58px] md:h-[58px] absolute top-[10%] right-[10%]"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Navbar;