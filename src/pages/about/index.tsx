import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const About = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 500);

    return () => clearTimeout(animationTimer);
  }, []);

  const coreValues = [
    {
      id: "01",
      title: "Innovation",
      description:
        "We prioritize creativity and forward-thinking in every solution we develop.",
    },
    {
      id: "02",
      title: "Integrity",
      description:
        "We uphold the highest ethical standards in all our partnerships and projects.",
    },
    {
      id: "03",
      title: "Collaboration",
      description:
        "Teamwork and shared goals drive our success and customer satisfaction.",
    },
    {
      id: "04",
      title: "Excellence",
      description:
        "Delivering exceptional results is at the core of what we do.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#f0f4f8] to-[#e6eaf0] text-gray-800 min-h-screen">
      <Navbar styling={"z-10"} theme={"dark"} />

      {/* Animated Header */}
      <div
        className={`
        mb-8 md:mb-[127px] 
        transition-all duration-1000 
        px-4 
        ${
          isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }
      `}
      >
        <h1 className="text-3xl md:text-6xl font-bold mb-2 text-center text-indigo-600 syne">
          About Us
        </h1>
      </div>

      {/* About Us Section */}
      <section
        className={`
        w-full flex flex-col md:flex-row items-center gap-5 
        transition-all duration-1000 
        ${
          isAnimating
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-10"
        }
        px-4 md:px-12 mb-16
      `}
      >
        <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-2xl transform transition-transform hover:scale-105 mb-6 md:mb-0">
          <Image
            alt="Company"
            src={require("../../../public/Company.jpg")}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
        <div className="flex flex-col items-start p-6 md:p-9 bg-white rounded-2xl shadow-2xl w-full md:w-1/2">
          <div className="flex flex-col items-start w-full md:w-2/3">
            <p className="text-lg md:text-xl font-semibold text-indigo-600 syne text-center w-full">
              Who we are
            </p>
            <h1 className="text-2xl md:text-[40px] syne font-semibold text-gray-800 mb-4">
              Transforming Ideas into Digital Excellence
            </h1>
            <p className="text-base md:text-[19px] syne text-gray-600">
              At Flair Technology, we turn ideas into impactful digital
              solutions. Our team of passionate developers, designers, and
              strategists specializes in crafting innovative software for web,
              mobile, and cloud platforms. With expertise in AI and cutting-edge
              technologies, we help businesses thrive in the digital era with
              simple, effective, and results-driven solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-8 md:py-16 px-4 md:px-6 bg-transparent">
        {/* Mission Section */}
        <section
          className={`
          w-full flex flex-col md:flex-row-reverse items-center gap-5 mb-16
          transition-all duration-1000 
          ${
            isAnimating
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }
        `}
        >
          <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-2xl transform transition-transform hover:scale-105 mb-6 md:mb-0">
            <Image
              alt="Mission"
              src={require("../../../public/mission.jpg")}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          <div className="flex flex-col items-start p-6 md:p-9 bg-white rounded-2xl shadow-2xl w-full md:w-1/2">
            <div className="flex flex-col items-start w-full md:w-2/3">
              <h1 className="text-2xl md:text-[40px] syne font-semibold text-gray-800 mb-4">
                Our Mission
              </h1>
              <p className="text-base md:text-[19px] syne text-gray-600">
                Our mission is to deliver groundbreaking and dependable
                technology solutions that empower businesses and individuals. We
                aim to seamlessly integrate technology into everyday life,
                fostering innovation, growth, and creativity while driving
                efficiency and precision.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section
          className={`
          w-full flex flex-col md:flex-row items-center gap-5
          transition-all duration-1000 
          ${
            isAnimating
              ? "opacity-100 -translate-x-0"
              : "opacity-0 translate-x-10"
          }
        `}
        >
          <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-2xl transform transition-transform hover:scale-105 mb-6 md:mb-0">
            <Image
              alt="Vision"
              src={require("../../../public/vision.jpg")}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          <div className="flex flex-col items-start p-6 md:p-9 bg-white rounded-2xl shadow-2xl w-full md:w-1/2">
            <div className="flex flex-col items-start w-full md:w-2/3">
              <h1 className="text-2xl md:text-[40px] syne font-semibold text-gray-800 mb-4">
                Our Vision
              </h1>
              <p className="text-base md:text-[19px] syne text-gray-600">
                Our vision is to be a global leader in technological innovation,
                transforming bold ideas into impactful realities. By bridging
                the gap between imagination and implementation, we aspire to
                shape the future, inspire change, and redefine the boundaries of
                possibility.
              </p>
            </div>
          </div>
        </section>
      </section>

      {/* Core Values */}
      <section className="py-8 md:py-16 px-4 md:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2
            className={`
            text-3xl md:text-6xl font-bold text-center mb-8 md:mb-14 syne text-gray-800
            transition-all duration-1000 
            ${
              isAnimating
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }
          `}
          >
            Core Values
          </h2>
          <div
            className={`
            grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 place-items-center
            transition-all duration-1000 
            ${isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-90"}
          `}
          >
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="
                  relative w-full p-4 md:p-5 pt-6 
                  bg-white 
                  rounded-2xl 
                  shadow-2xl 
                  transform 
                  transition-all 
                  duration-300 
                  hover:scale-105
                "
              >
                <h3 className="text-3xl md:text-5xl font-semibold mt-5 syne mb-4 text-indigo-600">
                  {value.title}
                </h3>
                <p className="text-gray-600 mt-2 text-lg md:text-2xl syne w-[90%]">
                  {value.description}
                </p>
                <h3
                  className="
                  text-[80px] md:text-[140px] 
                  font-medium 
                  syne 
                  absolute 
                  top-[-30%] md:top-[-40%] 
                  left-[-15px] md:left-[-25px] 
                  text-indigo-600/20
                "
                >
                  {value.id}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;