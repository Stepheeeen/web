import Navbar from "@/components/navbar";
import React, { useState } from "react";
import { Video } from "@/components/video";
import { motion } from "framer-motion";
import Footer from "@/components/footer";
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

  return (
    <>
      <Navbar styling={"absolute top-0 right-0 z-10"} theme={"light"} />

      <section className="hero-section relative min-h-screen flex justify-center items-center overflow-hidden">
        {/* Background video */}
        <Video />

        {/* Slide-in content */}
        <div className="hero-content relative z-10 text-center text-white px-4 md:px-6 py-10 md:py-20 animate__animated animate__fadeIn animate__delay-1s">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold syne text-violet-400 tracking-wide mb-4 md:mb-6 animate__animated animate__slideInUp animate__delay-2s">
            Revolutionizing Tomorrow, Today.
          </h1>
          <p className="text-lg md:text-xl text-white mb-6 md:mb-8 animate__animated animate__fadeInUp animate__delay-3s syne">
            Empowering innovators to break barriers, create new realities, and
            lead the digital revolution.
          </p>
          <div className="hidden md:flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 animate__animated animate__fadeInUp animate__delay-4s">
            <button className="px-6 md:px-8 py-3 md:py-4 bg-violet-500 hover:bg-violet-600 text-white rounded-full text-lg md:text-2xl transition-colors duration-300 syne">
              Explore the Future
            </button>
            <button className="px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-white text-white rounded-full text-lg md:text-2xl transition-colors duration-300 syne">
              Get Started
            </button>
          </div>
          <button className="md:hidden px-8 md:px-8 py-2 md:py-4 bg-transparent border-2 border-white text-white rounded-full text-md md:text-2xl transition-colors duration-300 syne">
            Explore
          </button>
        </div>

        {/* Gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-violet-900 opacity-70 z-5 animate__animated animate__fadeIn animate__delay-2s"></div>

        {/* Sliding elements for additional intrigue */}
        <div className="absolute bottom-0 left-0 right-0 flex flex-col md:flex-row justify-between p-4 md:p-6 text-white z-10">
          <div className="mb-4 md:mb-0 animate__animated animate__fadeIn animate__delay-5s">
            <h2 className="text-base md:text-xl font-semibold fira">
              The Future is Here
            </h2>
            <p className="mt-1 md:mt-2 text-sm md:text-base syne">
              Unleash your potential with cutting-edge solutions.
            </p>
          </div>
          <div className="animate__animated animate__fadeIn animate__delay-6s">
            <h2 className="text-base md:text-xl font-semibold fira">
              Infinite Possibilities
            </h2>
            <p className="mt-1 md:mt-2 text-sm md:text-base syne">
              Shape the future of business, technology, and beyond.
            </p>
          </div>
        </div>
      </section>
      <div className="bg-white text-gray-900 font-sans min-h-screen">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="relative bg-gradient-to-br from-violet-50 via-white to-violet-100 py-24 px-6"
        >
          {/* Background Geometric Pattern */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-200 via-white to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-violet-300 via-white to-transparent"></div>
          </div>

          {/* Content Container */}
          <div className="relative max-w-5xl mx-auto text-center">
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-7xl font-extrabold syne text-transparent bg-clip-text bg-gradient-to-r from-violet-800 via-black to-violet-800 mb-10 leading-tight tracking-tighter"
            >
              Where Innovation
              <br />
              Meets Extraordinary
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="ext-xl md:text-2xl text-violet-900/80 max-w-3xl mx-auto mb-12 leading-relaxed fira"
            >
              We&apos;re passionate architects of transformation, bridging visionary
              ideas with cutting-edge execution. Our mission is to craft
              innovative solutions that don&apos;t just change industries—they
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
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="68"
                    height="68"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-rocket text-violet-600"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                  </svg>
                ),
                title: "Bold Creativity",
                description:
                  "Challenging norms, breaking boundaries, and designing what's next.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="68"
                    height="68"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-sparkle text-violet-600"
                  >
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                  </svg>
                ),
                title: "Future-Forward Thinking",
                description:
                  "We embrace technology that anticipates tomorrow's needs, today.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="68"
                    height="68"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-layers text-violet-600"
                  >
                    <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
                    <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
                    <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
                  </svg>
                ),
                title: "Impactful Solutions",
                description:
                  "Our solutions drive measurable results that propel businesses forward.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-violet-50/30 p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 text-center border border-violet-100"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold text-black/80 mb-3 syne">
                  {item.title}
                </h3>
                <p className="text-black/60 fira">{item.description}</p>
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
          className="py-16 px-6 bg-violet-50/30"
        >
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-black/80 mb-12 syne">
              Our Expertise, Your Edge
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
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
                      className="lucide lucide-smartphone text-violet-600"
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
                      className="lucide lucide-globe text-violet-600"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                  ),
                  title: "Futuristic Web Solutions",
                  description:
                    "Web solutions designed to grow with your business and meet tomorrow&apos;s demands.",
                },
              ].map((solution, index) => (
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
                  <div
                    className="
          absolute 
          -inset-0.5 
          bg-gradient-to-br 
          from-violet-100 
          to-white 
          rounded-2xl 
          opacity-30 
          group-hover:opacity-50 
          transition-all 
          duration-300 
          blur-sm
        "
                  />
                  <div
                    className="
          relative 
          bg-white 
          p-8 
          rounded-2xl 
          shadow-lg 
          hover:shadow-2xl 
          transition-all 
          duration-300 
          border 
          border-violet-100 
          overflow-hidden
          group
        "
                  >
                    {/* Icon Background Container */}
                    <div
                      className={`
            absolute 
            -top-1/3 
            -right-1/3 
            w-2/3 
            h-2/3 
            transition-all 
            duration-500 
            ease-in-out
            opacity-10
            group-hover:opacity-30
            group-hover:rotate-12
            group-hover:scale-110
            ${isHovered ? "text-violet-500" : "text-violet-200"}
          `}
                    >
                      {solution.icon}
                    </div>

                    {/* Content */}
                    <div className="relative z-10 space-y-4">
                      <div
                        className="
              mb-6 
              w-20 
              h-20 
              bg-violet-100/50 
              rounded-full 
              flex 
              items-center 
              justify-center 
              transition-all 
              group-hover:bg-violet-200/70
            "
                      >
                        {solution.icon}
                      </div>

                      <h3
                        className="
              text-3xl 
              font-bold 
              text-black/90 
              transition-colors 
              group-hover:text-violet-800
              syne
            "
                      >
                        {solution.title}
                      </h3>
                      <p
                        className="
              text-black/70 
              text-lg 
              leading-relaxed 
              mb-6
              fira
            "
                      >
                        {solution.description}
                      </p>

                      {/* Enhanced Button */}
                      <div className="flex items-center justify-end fira">
                        <button
                          className="
                flex 
                items-center 
                group 
                text-violet-600 
                hover:text-violet-800 
                font-semibold 
                transition-colors
              "
                        >
                          <span className="mr-2">Explore</span>
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
                        </button>
                      </div>
                    </div>

                    {/* Subtle Hover Effect */}
                    <div
                      className="
            absolute 
            top-0 
            left-0 
            w-full 
            h-1 
            bg-gradient-to-r 
            from-violet-500 
            to-white 
            opacity-0 
            group-hover:opacity-100 
            transition-all 
            duration-300
          "
                    />
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
