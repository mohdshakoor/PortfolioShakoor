// components/Header.tsx
"use client";

import { assets } from "../assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const Header = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen w-11/12 max-w-5xl mx-auto text-center px-4"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-6"
      >
        <Image
          src={assets.profile_img}
          alt="Abdul Shakoor"
          className="rounded-full w-32 sm:w-40 lg:w-48 shadow-2xl ring-4 ring-gray-200 dark:ring-gray-700"
        />
      </motion.div>

      {/* Intro Text */}
      <motion.h3
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="flex items-center justify-center gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I&apos;m Abdul Shakoor
        <Image src={assets.hand_icon} alt="" className="w-6 animate-wave" />
      </motion.h3>

      {/* Gradient Headline */}
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
      >
        Web Developer Based in India
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="max-w-2xl mt-4 text-base md:text-lg text-gray-700 dark:text-gray-300 font-Ovo"
      >
        Aspiring Software Developer with a passion for building clean,
        user-friendly web applications and crafting seamless digital
        experiences.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="flex flex-col sm:flex-row items-center gap-4 mt-8"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="px-10 py-3 rounded-full bg-black text-white border border-white flex items-center gap-2 shadow-lg hover:bg-gray-900 transition-colors"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 rounded-full border border-gray-400 flex items-center gap-2 hover:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          My Resume
          <Image src={assets.download_icon} alt="" className="w-4" />
        </motion.a>
      </motion.div>

      {/* Optional subtle floating background shapes */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute bg-gradient-to-r from-purple-300 to-pink-300 opacity-20 blur-3xl w-96 h-96 -top-24 -left-24 rounded-full animate-pulse" />
        <div className="absolute bg-gradient-to-r from-indigo-300 to-cyan-300 opacity-20 blur-3xl w-96 h-96 bottom-0 right-0 rounded-full animate-pulse delay-1000" />
      </div>
    </section>
  );
};

export default Header;
