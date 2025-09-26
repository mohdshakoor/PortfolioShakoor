"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { assets, serviceData } from "@/assets/assets";

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: (i) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.3, duration: 0.6, delay: i * 0.15 },
  }),
};

const Services = () => {
  return (
    <section
      id="services"
      className="w-full px-6 sm:px-10 lg:px-[12%] py-16 scroll-mt-20 bg-gray-50 dark:bg-gray-900"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h4 className="text-lg sm:text-xl font-Ovo text-gray-500 mb-2">
          What I Offer
        </h4>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-Ovo font-bold text-gray-800 dark:text-white">
          My Services
        </h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-5">
          I am a Full Stack web developer from Lucknow India , with 1 years of  experience .
           As a recent CSE student eager to learn, I love turning ideas into interactive experiences and am excited to grow as a full-stack developer.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            {/* Card with hover 3D tilt effect using CSS */}
            <motion.div
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-500 flex flex-col h-full"
            >
              {/* Floating icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-primary/20 to-primary/40 rounded-full mb-5 mx-auto shadow-md hover:shadow-lg transition-all duration-500">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Image src={icon} alt={title} className="w-8 h-8" />
                </motion.div>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white text-center mb-3">
                {title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center flex-1">
                {description}
              </p>

              <a
                href={link}
                className="mt-5 inline-flex items-center justify-center gap-2 text-sm sm:text-base font-medium text-primary hover:underline"
              >
                Read more
                <Image alt="" src={assets.right_arrow} className="w-4 h-auto" />
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
