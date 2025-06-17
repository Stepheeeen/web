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
            <h2 className="text-2xl md:text-6xl font-extrabold mb-4 text-[#051826]">
              Partner with Us
            </h2>
            <h2 className="text-2xl md:text-6xl font-extrabold mb-4 text-[#000103]">
              Partner with Us
            </h2>
            <h2 className="text-2xl md:text-6xl font-extrabold mb-4 text-[#061b2c]">
              Partner with Us
            </h2>
            <h2 className="text-2xl md:text-6xl font-extrabold mb-4 text-[#020f18]">
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
            <p className="text-base md:text-xl mb-6 max-w-2xl text-black/70 fira">
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

    <footer className="bg-black text-white py-10 px-5 md:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo and Socials */}
        <div>
          <div className="flex items-center mb-4">
            <Link href={nav[0].path}>
              <Image
                alt="Flair Technology Logo"
                src={LogoLight}
                className="w-[12rem] md:w-[16rem]"
              />
            </Link>
          </div>
          <p className="text-sm mb-8">
            We are passionate education dedicated to providing high-quality resources learners
          </p>
          <div className="flex space-x-[1rem]">
            {/* Instagram */}
            <a href="https://www.instagram.com/flair_technologies?igsh=MWR5aTF0ZzczNTY4cw%3D%3D&utm_source=qr" className="hover:text-[#efa853] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
              </svg>
            </a>
            {/* X */}
            <a href="https://x.com/flairtechlabs" className="hover:text-[#efa853] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
              </svg>
            </a>
            {/* Tiktok */}
            <a href="https://www.tiktok.com/@flair_technologies?_t=ZM-8xCyS0Ih5LK&_r=1" className="hover:text-[#efa853] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition-colors cursor-pointer">Latest Services</li>
            <li className="hover:text-white transition-colors cursor-pointer">Web Design</li>
            <li className="hover:text-white transition-colors cursor-pointer">SEO Marketing</li>
            <li className="hover:text-white transition-colors cursor-pointer">Team Management</li>
            <li className="hover:text-white transition-colors cursor-pointer">Our Project</li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-bold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            {nav.map((links, i) => (
              <li key={i} className="">
                <Link
                  href={links.path}
                  className={` ${
                    pathname === links.path
                      ? "text-[#efa853]"
                      : "hover:underline"
                  }`}
                >
                  {links.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="font-bold mb-4">Contact Us</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start hover:text-white transition-colors cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 mt-1" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
              </svg>
              <a href="https://wa.me/+36303690608" className="hover:text-white transition-colors">
                +(36) 30-369-0608
              </a>
            </li>
            <li className="flex items-start hover:text-white transition-colors cursor-pointer">
              <svg className="w-4 h-4 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8a15.9 15.9 0 006.6 6.6l2.2-2.2a1 1 0 011-.2c1.1.4 2.2.6 3.4.6a1 1 0 011 1v3.4a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.4a1 1 0 011 1c0 1.2.2 2.3.6 3.4a1 1 0 01-.2 1l-2.2 2.2z" />
              </svg>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  const isMobile = /iPhone|Android|Mobile|iPad/i.test(navigator.userAgent);
                  const link = isMobile
                    ? 'tel:+971630288993'
                    : 'https://wa.me/971630288993';
                  window.open(link, '_blank');
                }}
                className="hover:text-white transition-colors"
              >
                +(234) 805 258 9663
              </a>
            </li>
            <li className="flex items-start hover:text-white transition-colors cursor-pointer">
              <svg className="w-4 h-4 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.5l-8 5-8-5V6h16zM4 18v-9l8 5 8-5v9H4z" />
              </svg>
              <a href="mailto:flairtechhq@gmail.com">flairtechhq@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="md:text-sm text-center text-[13px] text-gray-400 mt-10 border-t border-gray-700 pt-5">
        <span>{new Date().getFullYear()}</span> &copy; FlairTech, Inc.
      </div>
    </footer>
  </>
  );
};

export default Footer;
