import Image from "next/image";
import Link from "next/link";
import LogoLight from "../../public/flair-tech-light.png";
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

  const social = [
    { name: "Facebook", path: "", active: "" },
    { name: "Twitter", path: "", active: "" },
    { name: "Github", path: "", active: "" },
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
            <h2 className="text-2xl md:text-4xl font-bold mb-4 syne">
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

      {/* Footer - Responsive */}
      <footer className="bg-[#1b1b1b] text-white py-12 px-4 md:p-32 syne">
        <div className="container mx-auto flex flex-col md:flex-row">
          {/* Navigation Column */}
          <div className="w-full md:w-[70%] mb-10 md:mb-0">
            <div className="flex items-center gap-2 mb-9">
              <Image
                alt="Flair Technology Logo"
                src={LogoLight}
                className="w-10 md:w-14"
              />
              <h1 className="text-2xl md:text-[37px] text-white syne">
                Flair Technology
              </h1>
            </div>

            <ul className="space-y-2">
              {nav.map((links, i) => (
                <li key={i}>
                  <Link
                    href={links.path}
                    className={`text-xl md:text-[30px] font-medium hover:underline ${
                      pathname === links.path
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-violet-500"
                        : ""
                    }`}
                  >
                    {links.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="w-full md:w-[35%] md:border-l md:border-l-white md:pl-16 space-y-4">
            <h1 className="text-2xl md:text-[40px] syne mb-4">Contact Us</h1>
            <p className="text-base md:text-[20px] leading-relaxed">
              Nigeria{" "}
              <Link
                href={"https://wa.me/message/XB2AUX4POWEFD1"}
                className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-violet-400"
              >
                +(234) 805-258-9663
              </Link>
              <br /> Hungary{" "}
              <Link
                href={"https://wa.me/+36303690608"}
                className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-violet-400"
              >
                +(36) 30-369-0608
              </Link>
              <br />
              <Link href={"mailto:flairtechhq@gmail.com"}>
                flairtechhq@gmail.com
              </Link>
            </p>

            <ul className="space-y-2 mt-4">
              {social.map((socials, i) => (
                <li key={i}>
                  <Link
                    href={socials.path}
                    className="font-medium text-base md:text-[21px]"
                  >
                    {socials.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-white/50 text-sm md:text-base mt-4">
              ©copyright 2024
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
