"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/mohdshakoor",
      icon: assets.github_icon,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/abdul-shakoor-0142a52a6/",
      icon: assets.linkedin_icon,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/shaqoor_11",
      icon: assets.instagram_icon,
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-t from-gray-50 via-white to-gray-50">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 opacity-40 blur-3xl"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto px-4 py-12 text-center"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <Image src={assets.logo} alt="Logo" className="w-28 mx-auto" />
        </motion.div>

        {/* Contact Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center items-center gap-2 mb-6 text-sm text-gray-600"
        >
          <Image src={assets.mail_icon} alt="Email Icon" className="w-5 h-5" />
          <a
            href="mailto:erABDULSHAKOOR.S@gmail.com"
            className="hover:underline hover:text-gray-800 transition"
          >
            erABDULSHAKOOR.S@gmail.com
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="flex justify-center gap-6 mb-8"
        >
          {socialLinks.map((link, idx) => (
            <motion.li
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-2 rounded-full 
                           bg-white shadow-md hover:shadow-xl 
                           hover:-translate-y-1 transition duration-300"
              >
                {link.icon ? ( // ✅ render only if icon exists
                  <Image
                    src={link.icon}
                    alt={`${link.name} icon`}
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                ) : null}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-500 text-xs sm:text-sm"
        >
          &copy; {new Date().getFullYear()} Abdul Shaqoor. All rights reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;


