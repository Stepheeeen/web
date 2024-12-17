import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../../public/flair-tech.png";
import LogoLight from "../../public/flair-tech-light.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ styling, theme }: any) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [LogoTheme, setLogoTheme] = useState(theme);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set the initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const nav = [
    { name: "Home", path: "/", active: "" },
    { name: "About Us", path: "/about", active: "" },
    { name: "Portfolio", path: "/portfolio", active: "" },
    { name: "Our Team", path: "/team", active: "" },
  ];

  const social = [
    { name: "Facebook", path: "", active: "" },
    { name: "Twitter", path: "", active: "" },
    { name: "Github", path: "", active: "" },
  ];

  return (
    <>
      <nav
        className={`w-full flex py-7 px-5 items-center justify-between bg-transparent text-black text-[18px] font-medium ${styling}`}
      >
        {LogoTheme === "dark" ? (
          <Image alt="Logo" src={Logo} className="w-[70px]" />
        ) : (
          <Image alt="Logo" src={LogoLight} className="w-[70px]" />
        )}

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
        <ul className="text-[19px] md:w-[70%]">
          {nav.map((links, i) => (
            <li key={i} className="mb-3">
              <Link
                href={links.path}
                className={`hover:underline text-[49px] font-medium ${
                  pathname === links.path
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-violet-500 text-4xl font-bold"
                    : ""
                }`}
              >
                {links.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden text-[19px] md:w-[30%] md:flex flex-col items-start justify-center border-l border-l-white pl-20 h-full gap-3">
          <h1 className="text-[40px] syne">Contact Us</h1>
          <p className="text-[20px] leading-relaxed">
            Hungray +(36) 30-369-0608, <br /> Nigeria +(234) 805-258-9663.
            flairtechhq@gmail.com
          </p>

          <ul className="text-[21px] mt-4 syne">
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
            width="58"
            height="58"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x absolute top-[10%] right-[10%]"
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
