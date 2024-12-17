import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "AI-Powered Healthcare Platform",
      description:
        "Innovative machine learning solution for medical diagnostics and patient management.",
      technologies: ["React", "Python", "AI/ML", "Cloud"],
      image: "", // Placeholder for image
      category: "Web",
      link: "#",
    },
    {
      id: 2,
      title: "E-Commerce Optimization System",
      description:
        "Advanced analytics and recommendation engine for online retail.",
      technologies: ["Next.js", "TypeScript", "Machine Learning", "GraphQL"],
      image: "", // Placeholder for image
      category: "Mobile",
      link: "#",
    },
    {
      id: 3,
      title: "Smart City IoT Infrastructure",
      description:
        "Comprehensive IoT solution for urban infrastructure management and optimization.",
      technologies: ["React Native", "Node.js", "IoT", "Cloud Computing"],
      image: "", // Placeholder for image
      category: "Cloud",
      link: "#",
    },
    {
      id: 4,
      title: "Financial Analytics Dashboard",
      description:
        "Real-time financial tracking and predictive analytics platform.",
      technologies: ["React", "Python", "Data Science", "Blockchain"],
      image: "", // Placeholder for image
      category: "Web",
      link: "#",
    },
    {
      id: 5,
      title: "Educational Learning Management System",
      description:
        "Adaptive learning platform with personalized student tracking.",
      technologies: ["Next.js", "AI", "Cloud", "Mobile-Responsive"],
      image: "", // Placeholder for image
      category: "Mobile",
      link: "#",
    },
    {
      id: 6,
      title: "Sustainable Energy Management App",
      description:
        "Complex energy consumption tracking and optimization platform.",
      technologies: ["React Native", "IoT", "Data Visualization", "Cloud"],
      image: "", // Placeholder for image
      category: "Cloud",
      link: "#",
    },
  ];

  const categories = ["All", "Web", "Mobile", "Cloud"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  // Container Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  // Item Variants
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="bg-gradient-to-br from-[#f0f4f8] to-[#e6eaf0] min-h-screen">
      <Navbar styling={"z-10"} theme={"dark"} />

      <div className="container mx-auto px-6 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl font-bold text-center text-indigo-600 syne mb-12"
        >
          Our Portfolio
        </motion.h1>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-center mb-16 space-x-4"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                px-6 py-2 rounded-full text-base font-medium transition-all duration-300
                ${
                  activeFilter === category
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }
                focus:outline-none focus:ring-2 focus:ring-gray-300
              `}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover="hover"
                initial="hidden"
                animate="visible"
                exit="hidden"
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
                "
              >
                <motion.div
                  className="relative h-64 w-full overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
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
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-2xl font-bold text-gray-900 mb-3 syne"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-gray-600 mb-4 h-16"
                  >
                    {project.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex flex-wrap gap-2 mb-4 fira"
                  >
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="
                          bg-indigo-100 
                          text-indigo-800 
                          px-3 
                          py-1 
                          rounded-full 
                          text-sm
                        "
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                      block 
                      w-full 
                      text-center 
                      bg-gray-900 
                      text-white 
                      py-3 
                      rounded-full 
                      hover:bg-gray-800 
                      transition-colors 
                      duration-300
                      font-medium
                    "
                  >
                    View Project
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
