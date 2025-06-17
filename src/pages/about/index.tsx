import React, { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Hero from "../../../public/hamidu-samuel-mansaray-ynBZCC173iU-unsplash.jpg";
import FutureIllustration from "../../../public/software-devlopment--1024x1024-removebg-preview.png";
import FutureTech from "../../../public/section-lock-tech.jpg";

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
    <>

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
        <h1 className="text-3xl md:text-6xl font-bold mt-[90px] mb-2 text-center text-indigo-600 font-sans">
          About Uss
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
            src={require("../../../public/BUILDING SIGN.png")}
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
                  text-red-800/20
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





    
    <Navbar styling={"z-10"} theme={"dark"} />

       <div className="bg-white text-gray-900 font-sans">
        {/* Hero Section */}
        <section className="relative w-full h-72 md:h-[420px] flex items-center justify-center text-white">
          <div className="absolute inset-0 bg-url('../../../public/hamidu-samuel-mansaray-ynBZCC173iU-unsplash.jpg')"><Image className="absolute inset-0  w-[100%] h-[100%] bg-cover bg-center" src={Hero} alt="ddddddd" /></div>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">About <span className="text-blue-600">Us</span></h1>
            <p className="text-sm md:text-base mt-2">Home / About Us</p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-12 px-4 md:px-16 text-center">
          <div className="text-blue-600 text-sm font-medium">About Us</div>
          <h2 className="text-2xl md:text-4xl font-bold mt-2 leading-tight">
            Innovative Software Solutions<br className="hidden md:block" /> for the Future
          </h2>
        </section>

        {/* Impact Section */}
        <section className="bg-gray-100 py-10 px-4 md:px-16">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2 space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold">The Impact of Technology on Modern Society</h3>
              <p className="text-sm md:text-base leading-relaxed">Technology has revolutionized the way humans live, work, and interact. From communication to healthcare, transportation, and entertainment, technological advancements have significantly improved efficiency and convenience in the healthcare sector. Technology has played a crucial role in diagnosis, treatment, and patient care.</p>
              <p className="text-sm md:text-base leading-relaxed">Advanced imaging techniques, robotic surgeries, and telemedicine have improved medical outcomes accessibility.</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium">Read More</button>
            </div>
            <div className="lg:w-1/2">
              <Image src={FutureIllustration} alt="Impact Illustration" className="hidden xs:flex w-full max-w-md mx-auto" />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 px-4 md:px-16 text-center">
          <div className="text-blue-600 text-sm font-medium">Our Services</div>
          <h2 className="text-2xl md:text-4xl font-bold mt-2">Your Satisfaction, Our Service</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Web Design', desc: 'Web design is all about creating visually appealing and user-friendly websites. Web design' },
              { title: 'Web Development', desc: 'Web development is the process of building and maintaining websites or web applications.' },
              { title: 'SEO Services', desc: 'SEO is the process of optimizing a website to improve its ranking on search engines like Google.' },
            ].map((service, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow text-left">
                <div className="text-blue-600 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3v1.5M14.25 3v1.5m-8.5 4h13.5m-15 2.25h16.5M3 18.75h18M5.25 21h13.5M6 6.75h12" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Human Ingenuity Section */}
        <section className="bg-gray-100 py-12 px-4 md:px-16">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2 ">
              <Image src={FutureTech} alt="Human Ingenuity" className="w-[27rem] h-[27rem] rounded-lg" />
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-xl md:text-2xl font-semibold">Exploring the Boundaries of Human Ingenuity</h3>
              <p className="text-sm md:text-base mt-4 leading-relaxed">Technology has revolutionized every aspect of modern life, shaping how we communicate, work and interact with the world. From the invention of the wheel to the rise of artificial intelligence, technological advancements have continuously pushed the boundaries of human capability.</p>
              <p className="text-sm md:text-base mt-4 leading-relaxed">In the digital age, the Internet, smartphones, and cloud computing have made information more accessible than ever.</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium mt-4">Learn More</button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 px-4 md:px-16 text-center">
          <div className="text-blue-600 text-sm font-medium">Why Choose Us</div>
          <h2 className="text-2xl md:text-4xl font-bold mt-2">Where Experience Meets Compassion</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {coreValues.map((value, i) => (
              <div key={i} className="bg-white shadow-lg p-6 rounded-lg text-left
                  relative w-full md:p-5 pt-6 
                  transform 
                  transition-all 
                  duration-300 
                  hover:scale-105
              ">
                <div className="w-14 h-14 text-4xl rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-3 syne">
                  {/* <svg className="w-8 h-8 hover:text-amber-400 transform transition-all duration-200 hover:scale-105" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                  </svg> */}
                  {value.id}
                </div>
                <h4 className="font-semibold text-4xl mb-2">{value.title}</h4>
                <p className="text-lg pt-3 text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default About;