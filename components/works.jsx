"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "MeetDisk Ai",
      description: " Meet AI Application which is secure, cloud-based platform for storing and sharing files seamlessly.",
      image: "/projectlogo.png",    // Place screenshots in /public/projects/
      link: "http://meetdisk.vercel.app",
    },
    {
      title: "FinanceM",
      description: "An AI-powered Finance management app that transcribes the transaction and summarizes discussions with the help of graphs.",
      image: "/project2logo.png",
      link: "https://your-meet-ai-link.com",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full px-6 sm:px-12 lg:px-20 py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl sm:text-5xl font-bold text-gray-800 mb-6"
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block rounded-xl overflow-hidden shadow-xl bg-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            {/* Image */}
            <div className="relative w-full aspect-[16/9]">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500" />
              {/* Text overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 opacity-0 group-hover:opacity-100 transition duration-500">
                <h3 className="text-white text-2xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-200 text-sm max-w-md">{p.description}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
