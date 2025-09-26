"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "MeetDisk Ai",
      description:
        "Meet AI Application – secure, cloud-based platform for storing and sharing files seamlessly.",
      image: "/projectlogo.png",
      link: "https://meetdisk.vercel.app",
    },
    {
      title: "FinanceM",
      description:
        "AI-powered Finance management app that transcribes transactions and summarizes discussions with interactive graphs.",
      image: "/project2logo.png",
      link: "https://your-meet-ai-link.com",
    },
  ];

  return (
    <section
      id="work"
      className="relative w-full px-4 sm:px-8 lg:px-20 py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Floating background animation */}
      <motion.div
        className="absolute -top-32 -right-32 w-[40rem] h-[40rem] bg-gradient-to-br from-blue-100 via-pink-100 to-purple-200 rounded-full blur-3xl opacity-40"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative text-center text-4xl sm:text-5xl font-extrabold text-gray-800 mb-12 tracking-tight"
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.3 }}
            whileHover={{ scale: 1.05, rotate: 0.5 }}
            whileTap={{ scale: 0.98 }}
            className="group relative block rounded-2xl overflow-hidden shadow-2xl bg-white/30 backdrop-blur-xl border border-white/40 transform-gpu"
          >
            {/* Subtle animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-30 blur-xl"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Image */}
            <motion.div
              className="relative w-full aspect-[16/9]"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </motion.div>

            {/* Text overlay with animated reveal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 backdrop-blur-md bg-black/40 rounded-2xl"
            >
              <h3 className="text-white text-2xl sm:text-3xl font-semibold mb-3 drop-shadow-md">
                {p.title}
              </h3>
              <p className="text-gray-200 text-sm sm:text-base max-w-md">
                {p.description}
              </p>
            </motion.div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
