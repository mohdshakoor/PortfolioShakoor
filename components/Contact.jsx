"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [status, setStatus] = useState(""); // sending/success/error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "9b0a84c5-4ac3-4083-8cc5-f57de47a0b23",
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("Message sent successfully!");
        e.target.reset();
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      setStatus("An error occurred. Please try again.");
      console.error(err);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen py-16 px-4 sm:px-6 lg:px-12
                 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Floating animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-indigo-200 via-purple-200 to-pink-200 opacity-40 blur-3xl"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mx-auto relative z-10"
      >
        <h4 className="mb-2 text-base sm:text-lg font-Ovo text-gray-700 tracking-wide">
          Connect with me
        </h4>
        <h2 className="text-4xl sm:text-5xl font-Ovo font-semibold text-gray-900">
          Get In Touch
        </h2>
        <p className="mt-5 mb-6 text-sm sm:text-base text-gray-700 px-2">
          I’d love to hear from you! Whether you have a question, feedback,
          or just want to say hello, drop a message below and I’ll get back
          to you as soon as possible.
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="relative z-10 max-w-2xl w-full bg-white/80 backdrop-blur-lg 
                   rounded-2xl shadow-xl p-6 sm:p-8 mt-8 space-y-6
                   border border-gray-200"
      >
        <motion.div
          className="flex flex-col gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {["name", "email", "message"].map((field, i) => (
            <motion.div
              key={field}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {field === "message" ? (
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Your Message"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3
                             text-gray-800 placeholder-gray-500 resize-none
                             focus:outline-none focus:ring-2 focus:ring-indigo-500
                             hover:shadow-md transition"
                />
              ) : (
                <input
                  name={field}
                  type={field === "email" ? "email" : "text"}
                  placeholder={
                    field === "name" ? "Your Name" : "Your Email"
                  }
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3
                             text-gray-800 placeholder-gray-500
                             focus:outline-none focus:ring-2 focus:ring-indigo-500
                             hover:shadow-md transition"
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="inline-flex items-center gap-2 bg-black text-white 
                     font-medium px-6 py-3 rounded-xl shadow-lg
                     hover:bg-gray-900 transition duration-200
                     text-sm sm:text-base"
        >
          Submit now
          <Image
            src={assets.right_arrow_white}
            alt="arrow icon"
            className="w-4 h-4"
          />
        </motion.button>

        {/* Animated Status Message */}
        <AnimatePresence>
          {status && (
            <motion.p
              key="status"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 text-gray-700 font-medium text-center"
            >
              {status}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.form>
    </section>
  );
};

export default Contact;
