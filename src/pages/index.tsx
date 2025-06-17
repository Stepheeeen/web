import Navbar from "@/components/navbar";
import React, { useState } from "react";
import { Video } from "@/components/video";
import { motion } from "framer-motion";
import Footer from "@/components/footer";
import Link from "next/link";

const index = () => {
  const [isHovered, setIsHovered] = useState(false);
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
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const Principles =  [{
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket text-[#437fbf]"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
    title: "Bold Creativity",
    description: "Challenging norms, breaking boundaries, and designing what's next.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkle text-[#437fbf]"
      >
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      </svg>
    ),
    title: "Future-Forward Thinking",
    description: "We embrace technology that anticipates tomorrow's needs, today.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers text-[#437fbf]">
        <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
        <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
        <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
      </svg>
    ),
    title: "Impactful Solutions",
    description: "Our solutions drive measurable results that propel businesses forward.",
  }];

  const solutions = [{
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-smartphone text-[#437fbf]"
      >
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    title: "Mobile Experiences",
    description:
      "Mobile apps that engage users and create memorable experiences.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-globe text-[#437fbf]"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    title: "Futuristic Web Solutions",
    description:
      "Web solutions designed to grow with your business and meet tomorrow's demands.",
  }];

  return (
    <>
      <Navbar styling={"absolute top-0 right-0 z-10"} theme={"light"} />

      <section className="hero-section relative min-h-screen flex justify-center items-center overflow-hidden">
        {/* Background video */}
        <Video />

        {/* Slide-in content */}
        <div className="hero-content relative z-10 text-center text-white px-4 md:px-6 py-10 md:py-20 animate__animated animate__fadeIn animate__delay-1s">
          <h1 className="text-3xl md:text-5xl lg:text-6xl  michroma font-extrabold text-[#efa853] tracking-wide mb-4 md:mb-6 animate__animated animate__slideInUp animate__delay-2s">
            Revolutionizing Tomorrow, Today.
          </h1>
          <p className="text-lg md:text-xl text-white mb-6 md:mb-8 animate__animated animate__fadeInUp animate__delay-3s geist">
            Empowering innovators to break barriers, create new realities, and
            lead the digital revolution.
          </p>
          <div className="hidden md:flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 animate__animated animate__fadeInUp animate__delay-4s">
            <button className="px-6 md:px-8 py-3 md:py-4 hover:bg-[#efa853] text-white border-[3px] border-[#efa853] rounded-full md:text-xl hover:font-medium transition-colors duration-300 geist">
              Explore the Future
            </button>
          </div>
          <button className="md:hidden px-8 md:px-8 py-2 md:py-4 bg-transparent border-2 border-white text-white rounded-full text-md hover:font-semibold transition-colors duration-300">
            Explore
          </button>
        </div>

        {/* Gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-[#976832] opacity-70 z-5 animate__animated animate__fadeIn animate__delay-2s"></div>

        {/* Sliding elements for additional intrigue */}
        <div className="absolute bottom-0 left-0 right-0 flex flex-col md:flex-row justify-between p-4 md:p-6 text-white z-10">
          <div className="mb-4 md:mb-0 animate__animated animate__fadeIn animate__delay-5s">
            <h2 className="text-base md:text-xl font-semibold poppins">
              The Future is Here
            </h2>
            <p className="mt-1 md:mt-2 text-sm md:text-base">
              Unleash your potential with cutting-edge solutions.
            </p>
          </div>
          <div className="animate__animated animate__fadeIn animate__delay-6s">
            <h2 className="text-base md:text-xl font-semibold poppins">
              Infinite Possibilities
            </h2>
            <p className="mt-1 md:mt-2 text-sm md:text-base">
              Shape the future of business, technology, and beyond.
            </p>
          </div>
        </div>
      </section>
      <div className="bg-[#f0f4fc] text-gray-900 font-sans min-h-screen">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="relative py-24 px-6"
        >
          {/* Content Container */}
          <div className="relative max-w-5xl mx-auto text-center">
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#396eA7] via-black to-[#396eA7] mb-10 pb-3 leading-tight tracking-tighter michroma"
            >
              Where Innovation
              <br />
              Meets Extraordinary
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-[23px] text-[#000103] max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              We're passionate architects of transformation, bridging visionary
              ideas with cutting-edge execution. Our mission is to craft
              innovative solutions that don't just change industries—they
              redefine possibilities.
            </motion.p>
          </div>
        </motion.div>

        {/* Key Principles */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="py-16 px-6 bg-white"
        >
          <div className="max-w-8xl mx-auto grid md:grid-cols-3 gap-8">
            {Principles.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#f0f4fc]/30 p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 text-center border border-violet-100"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold text-black/80 mb-3 ">
                  {item.title}
                </h3>
                <p className="text-black/60 geist">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Solutions */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="py-16 px-6 bg-[#f0f4fc]"
        >
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-[20px] md:text-[43px] font-semibold text-black/80 mb-12 poppins">
              Our Expertise, Your Edge
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="group relative"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {/* <div
                    className="absolute -inset-0.5 bg-gradient-to-br from-violet-100 to-white rounded-2xl opacity-30 group-hover:opacity-50 transition-all duration-300 blur-sm"
                  /> */}
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-violet-100 overflow-hidden group">
                    {/* Icon Background Container */}

                    {/* <div
                      className={`absolute -top-1/3 -right-1/3 w-2/3 h-2/3 transition-all duration-500 ease-in-out opacity-10 group-hover:opacity-30 group-hover:rotate-12 group-hover:scale-110
                      ${isHovered ? "text-violet-500" : "text-violet-200"}`}
                    >
                      {solution.icon}
                    </div> */}

                    {/* Content */}
                    <div className="relative z-10 space-y-4">
                      <div
                        className="mb-6 w-20 h-20 bg-gray-200/50 rounded-full flex items-center justify-center transition-all group-hover:bg-gray-200/70"
                      >
                        {solution.icon}
                      </div>
                      <h3
                        className="text-3xl font-bold text-black/90 transition-colors group-hover:text-[#437fbf] fira"
                      >
                        {solution.title}
                      </h3>
                      <p className="text-black/65 text-lg leading-relaxed mb-6 geist">
                        {solution.description}
                      </p>

                      {/* Enhanced Button */}
                      <div className="flex items-center justify-end fira">
                        <Link href="/portfolio" className="flex items-center group text-[#437fbf] hover:text-[#396eA7] font-semibold transition-colors">
                          <span className="mr-[2px]">Explore</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chevron-right"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </Link>
                      </div>
                    </div>

                    {/* Subtle Hover Effect (Line) */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#396eA7] to-white opacity-0 group-hover:opacity-100 transition-all duration-300"/>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>

      <Footer />
    </>
  );
};

export default index;
