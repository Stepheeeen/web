import React, { useState, useEffect } from "react";
import { ChevronDown, Users, Target, Eye, Lightbulb, Shield, HandHeart, Award } from "lucide-react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const coreValues = [
    {
      id: "01",
      title: "Innovation",
      description: "We prioritize creativity and forward-thinking in every solution we develop.",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "from-blue-500 to-purple-600"
    },
    {
      id: "02",
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our partnerships and projects.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-teal-600"
    },
    {
      id: "03",
      title: "Collaboration",
      description: "Teamwork and shared goals drive our success and customer satisfaction.",
      icon: <HandHeart className="w-8 h-8" />,
      color: "from-orange-500 to-red-600"
    },
    {
      id: "04",
      title: "Excellence",
      description: "Delivering exceptional results is at the core of what we do.",
      icon: <Award className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-600"
    }
  ];

  const scrollToSection = (sectionId: any) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation would go here */}
      <Navbar styling="" theme="dark"/>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-indigo-400 to-cyan-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg">
              Welcome to Flair Technology
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-6 leading-tight">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Transforming Ideas into Digital Excellence
          </p>
          <button
            onClick={() => scrollToSection('intro')}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Discover Our Story
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Enhanced Introduction Section with Background */}
      <section
        id="intro"
        className="py-20 px-6 relative overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15, 23, 42, 0.85), rgba(30, 41, 59, 0.85)),
            url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Animated particles/dots background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-20 w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-ping"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-3xl blur-2xl"></div>
                <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-500/20 rounded-xl backdrop-blur-sm">
                      <Users className="w-8 h-8 text-blue-300" />
                    </div>
                    <span className="text-blue-300 font-semibold text-lg">Who We Are</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                    Transforming Ideas into Digital Excellence
                  </h2>
                  <p className="text-lg text-slate-200 leading-relaxed">
                    At Flair Technology, we turn ideas into impactful digital solutions. Our team of passionate developers, designers, and strategists specializes in crafting innovative software for web, mobile, and cloud platforms. With expertise in AI and cutting-edge technologies, we help businesses thrive in the digital era with simple, effective, and results-driven solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-cyan-500/30 rounded-3xl blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/10 hover:shadow-3xl hover:scale-105 transition-all duration-300">
                  <div className="grid grid-cols-2 gap-8 text-center">
                    <div className="group">
                      <div className="text-4xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">100+</div>
                      <div className="text-slate-300 group-hover:text-white transition-colors duration-300">Projects Completed</div>
                    </div>
                    <div className="group">
                      <div className="text-4xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">50+</div>
                      <div className="text-slate-300 group-hover:text-white transition-colors duration-300">Happy Clients</div>
                    </div>
                    <div className="group">
                      <div className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">5+</div>
                      <div className="text-slate-300 group-hover:text-white transition-colors duration-300">Years Experience</div>
                    </div>
                    <div className="group">
                      <div className="text-4xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300">24/7</div>
                      <div className="text-slate-300 group-hover:text-white transition-colors duration-300">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
              Our Purpose
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Driven by innovation, guided by integrity, and committed to excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">Our Mission</h3>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Our mission is to deliver groundbreaking and dependable technology solutions that empower businesses and individuals. We aim to seamlessly integrate technology into everyday life, fostering innovation, growth, and creativity while driving efficiency and precision.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">Our Vision</h3>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Our vision is to be a global leader in technological innovation, transforming bold ideas into impactful realities. By bridging the gap between imagination and implementation, we aspire to shape the future, inspire change, and redefine the boundaries of possibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
              Core Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 h-full">
                    {/* Large background number */}
                    <div className="absolute top-4 right-4 text-8xl font-bold text-slate-100 select-none">
                      {value.id}
                    </div>

                    <div className="relative z-10">
                      <div className={`inline-flex p-4 bg-gradient-to-r ${value.color} rounded-2xl mb-6 text-white`}>
                        {value.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-4">
                        {value.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Ideas?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's work together to create something extraordinary. Your vision, our expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
            <button className="px-8 py-4 border-2 border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer would go here */}
      <Footer/>
    </div>
  );
};

export default About;