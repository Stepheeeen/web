import Image from "next/image";
import Link from "next/link";
import LogoLight from "../../public/FLAIR_TECH_LIGHT-removebg-preview.png";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  const nav = [
    { name: "Home", path: "/", active: "" },
    { name: "About Us", path: "/about", active: "" },
    { name: "Portfolio", path: "/portfolio", active: "" },
    { name: "Our Team", path: "/team", active: "" },
  ];

  return (
    <>
      {/* Call to Action - Responsive */}
      <motion.section className="flex flex-col md:flex-row w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="flex flex-col md:flex-row bg-gradient-to-br from-white to-violet-200 text-black/80 p-6 md:p-16 items-center"
        >
          <div className="w-full md:w-[70%] text-center md:text-left mb-6 md:mb-0">
            {/* <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#051826] fira">
              Partner with Us
            </h2>
            <h2 className="text-2xl md:text-6xl font-extrabold mb-4 text-[#000103]">
              Partner with Us
            </h2>
            <h2 className="text-2xl md:text-6xl font-extrabold mb-4 text-[#061b2c]">
              Partner with Us
            </h2> */}
            <h2 className="text-2xl md:text-5xl font-bold mb-4 text-[#020f18] syne">
              Partner with Us
            </h2>
            <p className="text-base md:text-xl mb-6 max-w-2xl text-black/70 fira">
              Ready to make an impact? Whether you&apos;re looking to grow your
              business or join an innovative team, we&apos;re here to help.
            </p>
          </div>

          <div className="w-full md:w-[30%] flex justify-center md:justify-end">
            <button className="p-3 md:p-4 border border-violet-400 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="flex flex-col md:flex-row bg-[#F3F3F3] text-black/80 p-6 md:p-16 items-center"
        >
          <div className="w-full md:w-[70%] text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 syne">
              Join Our Team
            </h2>
            <p className="text-base md:text-xl mb-6 max-w-2xl text-black/70 poppins">
              We&apos;re always on the lookout for talented, creative individuals to
              help shape the future with us. Join the team and let&apos;s build
              something amazing together!
            </p>
          </div>
          <div className="w-full md:w-[30%] flex justify-center md:justify-end">
            <button className="p-3 md:p-4 border border-violet-400 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right md:w-[50px] md:h-[50px]"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </motion.div>
      </motion.section>

      <footer className="bg-black text-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Logo + Tagline + Socials */}
          <div>
            <Link href={nav[0].path}>
              <Image
                src={LogoLight}
                alt="Flair Technology Logo"
                className="w-44 md:w-64 mb-4"
              />
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              We are passionate education dedicated to providing high-quality resources learners
            </p>
            <div className="flex gap-4">
              {/* Instagram */}
              <a href="https://www.instagram.com/flair_technologies?igsh=MWR5aTF0ZzczNTY4cw%3D%3D&utm_source=qr" aria-label="Instagram" className="hover:text-[#efa853] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                  {/* Instagram Path */}
                </svg>
              </a>

              {/* X */}
              <a href="https://x.com/flairtechlabs" aria-label="X (Twitter)" className="hover:text-[#efa853] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                  {/* X Path */}
                </svg>
              </a>

              {/* TikTok */}
              <a href="https://www.tiktok.com/@flair_technologies?_t=ZM-8xCyS0Ih5LK&_r=1" aria-label="TikTok" className="hover:text-[#efa853] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                  {/* TikTok Path */}
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {["Latest Services", "Web Design", "SEO Marketing", "Team Management", "Our Project"].map((item, index) => (
                <li key={index} className="hover:text-white transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Explore</h3>
            <ul className="space-y-3 text-sm">
              {nav.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className={`transition-colors ${pathname === link.path
                        ? "text-[#efa853] font-medium"
                        : "text-gray-400 hover:text-white"
                      }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-2 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-1" fill="currentColor" viewBox="0 0 16 16">
                  {/* WhatsApp icon */}
                </svg>
                <a href="https://wa.me/+36303690608">+(36) 30-369-0608</a>
              </li>

              <li className="flex items-start gap-2 hover:text-white transition-colors">
                <svg className="w-4 h-4 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  {/* Phone icon */}
                </svg>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    const isMobile = /iPhone|Android|Mobile|iPad/i.test(navigator.userAgent);
                    const link = isMobile ? 'tel:+971630288993' : 'https://wa.me/971630288993';
                    window.open(link, '_blank');
                  }}
                >
                  +(234) 805 258 9663
                </a>
              </li>

              <li className="flex items-start gap-2 hover:text-white transition-colors">
                <svg className="w-4 h-4 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  {/* Email icon */}
                </svg>
                <a href="mailto:flairtechhq@gmail.com">flairtechhq@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} FlairTech, Inc. All rights reserved.
        </div>
      </footer>

    </>
  );
};

export default Footer;
