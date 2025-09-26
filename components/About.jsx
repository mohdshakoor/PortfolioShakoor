"use client";

import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.6, ease: 'easeOut' },
  }),
};

const About = () => {
  return (
    <section
      id="about"
      className="w-full px-6 sm:px-10 lg:px-[12%] py-16 scroll-mt-20 bg-white dark:bg-neutral-900"
    >
      {/* Headings */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center"
      >
        <motion.h4
          variants={fadeUp}
          className="mb-2 text-lg font-Ovo tracking-wide text-gray-600 dark:text-gray-400"
        >
          Introduction
        </motion.h4>
        <motion.h2
          variants={fadeUp}
          className="text-4xl sm:text-5xl font-Ovo font-semibold text-gray-800 dark:text-gray-100"
        >
          About Me
        </motion.h2>
      </motion.div>

      {/* Content */}
      <div className="flex w-full flex-col lg:flex-row items-start gap-12 lg:gap-20 mt-16">
        {/* User Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-64 sm:w-80 mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500"
        >
          <Image
            src={assets.user_image}
            alt="User portrait"
            className="w-full rounded-3xl transition-transform duration-500 hover:scale-105"
            priority
          />
        </motion.div>

        {/* Text & Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1 font-Ovo"
        >
          <motion.p
            variants={fadeUp}
            className="mb-10 max-w-2xl text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
          >
            I’m a <span className="font-semibold">Professional Web Developer</span> with over a
            year of hands-on experience crafting high-performance, user-focused web applications.
            I love turning complex problems into elegant digital solutions while collaborating with
            dynamic teams to deliver measurable impact.
          </motion.p>

          {/* Info Cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, title, description }, index) => (
              <motion.li
                key={index}
                custom={index}
                variants={fadeUp}
                className="border border-gray-300 dark:border-gray-700 rounded-xl p-6 cursor-pointer 
                           hover:scale-105 hover:shadow-xl transition-all duration-300 bg-white dark:bg-neutral-800"
              >
                <Image src={icon} alt={title} className="w-7 mt-2" />
                <h3 className="my-4 font-semibold text-gray-800 dark:text-gray-100 text-lg">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-snug">
                  {description}
                </p>
              </motion.li>
            ))}
          </ul>

          {/* Tools */}
          <motion.h4
            variants={fadeUp}
            className="my-8 text-gray-800 dark:text-gray-100 text-xl font-semibold"
          >
            Tools I Use
          </motion.h4>

          <motion.ul
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-14 sm:w-16 aspect-square
                           border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-neutral-800
                           hover:-translate-y-1 hover:shadow-lg transition-transform duration-300"
              >
                <Image src={tool} alt="Tool" className="w-6 sm:w-8" />
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
