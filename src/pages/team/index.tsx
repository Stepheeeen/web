import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Elena Rodriguez",
      role: "Chief Executive Officer",
      bio: "Visionary leader with 15+ years of technology strategy experience.",
      image: "", //require("../../../public/team-elena.jpg")
      linkedin: "#",
      twitter: "#",
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Chief Technology Officer",
      bio: "Expert in AI and cloud computing with multiple patent innovations.",
      image: "", //require("../../../public/team-marcus.jpg")
      linkedin: "#",
      twitter: "#",
    },
    {
      id: 3,
      name: "Aisha Patel",
      role: "Head of Product Design",
      bio: "Design thinking expert transforming complex ideas into elegant solutions.",
      image: "", //require("../../../public/team-aisha.jpg")
      linkedin: "#",
      twitter: "#",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Lead Software Architect",
      bio: "Full-stack innovator specializing in scalable enterprise solutions.",
      image: "", //require("../../../public/team-david.jpg")
      linkedin: "#",
      twitter: "#",
    },
    {
      id: 5,
      name: "Sarah Thompson",
      role: "Data Science Director",
      bio: "Machine learning pioneer with groundbreaking AI research background.",
      image: "", //require("../../../public/team-sarah.jpg")
      linkedin: "#",
      twitter: "#",
    },
    {
      id: 6,
      name: "Alex Rivera",
      role: "Head of Strategic Partnerships",
      bio: "Global network expert connecting innovative technologies and businesses.",
      image: "", //require("../../../public/team-alex.jpg")
      linkedin: "#",
      twitter: "#",
    },
  ];

  // Page-level animation variants
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  // Individual team member card animation variants
  const cardVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 120,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageVariants}
      className="bg-white min-h-screen"
    >
      <Navbar styling={"z-10"} theme={"dark"} />

      <div className="container mx-auto px-6 py-12">
        <motion.h1
          variants={pageVariants}
          className="text-6xl font-bold text-center text-gray-900 syne mb-14"
        >
          Our Team
        </motion.h1>

        <motion.p
          variants={pageVariants}
          className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-xl leading-relaxed syne"
        >
          Our diverse team of experts brings together innovative thinking, deep
          technical expertise, and a passion for solving complex challenges.
          We're united by our commitment to pushing the boundaries of technology
          and creating meaningful impact.
        </motion.p>

        <motion.div
          variants={pageVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover="hover"
              className="
                group
                bg-white 
                border 
                border-gray-200
                rounded-2xl 
                overflow-hidden 
                transition-all 
                duration-300 
                hover:shadow-xl
                text-center
                pb-6
              "
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative h-80 w-full overflow-hidden"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="
                    transition-transform 
                    duration-300 
                    group-hover:scale-105
                  "
                />
              </motion.div>
              <div className="p-6">
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-2xl font-bold text-gray-900 mb-2 syne"
                >
                  {member.name}
                </motion.h3>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="mb-4 font-medium fira text-[#9e9e9e]"
                >
                  {member.role}
                </motion.p>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-gray-600 font-medium mb-4 h-20 font-serif"
                >
                  {member.bio}
                </motion.p>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex justify-center space-x-4"
                >
                  <a
                    href={member.linkedin}
                    className="
                      text-gray-700
                      hover:text-gray-900
                      transition-colors
                      duration-300
                    "
                  >
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </motion.svg>
                  </a>
                  <a
                    href={member.twitter}
                    className="
                      text-gray-700
                      hover:text-gray-900
                      transition-colors
                      duration-300
                    "
                  >
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </motion.svg>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Footer />
    </motion.div>
  );
};

export default TeamPage;