import Image from 'next/image';
import { assets } from '@/assets/assets';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* background graphic */}
      <div className="fixed top-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="." className="w-full" />
      </div>

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          backgroundColor: isScroll ? 'rgba(255,255,255,0.6)' : 'transparent',
          backdropFilter: isScroll ? 'blur(12px)' : 'blur(0px)'
        }}
        transition={{ type: 'spring', stiffness: 80 }}
        className="fixed w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 shadow-sm"
      >
        {/* Logo */}
        <a href="#">
          <Image
            src={assets.logo}
            alt="Logo"
            className="w-36 md:w-40 h-auto cursor-pointer mr-14"
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3">
          {['Home','About me','Services','My Work','Contact me'].map((item, i) => (
            <motion.li
              key={item}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * i }}
            >
              <a
                href={`#${item.toLowerCase().replace(/\s/g,'')}`}
                className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                           after:bg-gray-800 after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="" className="w-6" />
          </button>
          <a
            href="#contactme"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 hover:shadow-md transition"
          >
            Contact
            <Image src={assets.arrow_icon} alt="arrow" className="w-3" />
          </a>

          {/* Mobile toggle */}
          <button
            className="block md:hidden ml-3"
            onClick={() => setMenuOpen(true)}
          >
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile side menu with AnimatePresence */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 80 }}
            className="fixed right-0 top-0 bottom-0 w-64 bg-rose-50 h-screen z-50 flex flex-col gap-6 py-20 px-10 shadow-lg"
          >
            <div
              className="absolute right-6 top-6 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <Image src={assets.close_black} alt="" className="w-5" />
            </div>
            {['Home','About me','Services','My Work','Contact me'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s/g,'')}`}
                  onClick={() => setMenuOpen(false)}
                  className="block text-lg hover:text-rose-600 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
