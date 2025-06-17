import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PhoneInput from "@/components/phoneInput";
import Image from "next/image";
import { motion } from 'framer-motion'
import React, { useState, useEffect } from "react";

const ContactUs = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 1);

    return () => clearTimeout(animationTimer);
  }, []);

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

  return (
    <>
      <Navbar styling={"z-10"} theme={"dark"} />

      <div className="min-h-screen bg-[#f0f4fc] mt-[20px] p-6 xs:p-10 flex flex-col lg:flex-row gap-10 justify-center items-center">
        {/* Left Column */}
        <div className={`lg:w-1/2 space-y-6 transition-all duration-1000 ${ isAnimating ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10" } `}>
          <h1 className="text-6xl font-semibold text-black">Contact Us</h1>
          <p className="text-gray-700">Email, call, or complete the form to learn how <br /> FlairTech can solve your messaging problem.</p>
          <div className="text-gray-800 flex flex-col space-y-2">
            <p>flairtechhq@gmail.com</p>
            <p>+(234) 805 258 9663</p>
            <a href="#" className="text-black underline">Customer Support</a>
          </div>

          <div className="pt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-sm text-black">Customer Support</h3>
              <p className="text-sm text-gray-700">Our support team is available around the clock to address any concerns or queries you may have.</p>
            </div>
            <div>
              <h3 className="font-semibold text-sm text-black">Feedback and Suggestions</h3>
              <p className="text-sm text-gray-700">We value your feedback and are continuously working to improve FlairTech. Your input is crucial in shaping the future of FlairTech.</p>
            </div>
            <div>
              <h3 className="font-semibold text-sm text-black">Media Inquiries</h3>
              <p className="text-sm text-gray-700">For media-related questions or press inquiries, please contact us at <a href="mailto:flairtechhq@gmail.com" className="text-blue-600">flairtechhq@gmail.com</a>.</p>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="lg:w-1/3 bg-white rounded-2xl shadow-lg p-4 xs:p-8 space-y-5"
        >
          <h2 className="text-4xl font-semibold">Get in Touch</h2>
          <p className="text-sm text-gray-600">You can reach us anytime</p>
          <form className="space-y-4">
            <div className="flex gap-2">
              <input type="text" placeholder="First name" className="w-1/2 rounded-full border px-4 py-2 text-sm outline-none" />
              <input type="text" placeholder="Last name" className="w-1/2 rounded-full border px-4 py-2 text-sm outline-none" />
            </div>
            <input type="email" placeholder="Your email" className="w-full rounded-full border px-4 py-2 text-sm outline-none" />
            <div className="flex gap-2">
              {/* <select className="rounded-full border px-4 py-2 text-sm outline-none">
                <option>+62</option>
                <option>+1</option>
                <option>+44</option>
              </select> */}
              {/* <input type="tel" placeholder="Phone number" className="flex-1 rounded-full border px-4 py-2 text-sm outline-none" pattern="[0-9]" inputMode="numeric"/> */}
              <PhoneInput />
            </div>
            <textarea placeholder="How can we help?" maxLength={300} className="w-full rounded-xl border px-4 py-2 text-sm outline-none resize-none h-40" />
            <button type="submit" className="w-full rounded-full bg-blue-600 text-white py-2 font-semibold">Submit</button>
          </form>
          <p className="text-xs text-center text-gray-500">
            By contacting us, you agree to our <a href="#" className="text-blue-600 font-medium">Terms of service</a> and <a href="#" className="text-blue-600 font-medium">Privacy Policy</a>
          </p>
        </motion.div>
      </div>
    <Footer />
    </>
  );
}

export default ContactUs;