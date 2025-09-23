import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Works = () => {
  return (
    <section
      id="work"
      className="w-full px-6 sm:px-10 lg:px-[12%] py-16 scroll-mt-20 bg-gradient-to-b from-white to-gray-50"
    >
      <h4 className="text-center mb-3 text-lg tracking-wide text-gray-500 font-Ovo">
        My Portfolio
      </h4>
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold font-Ovo text-gray-800">
        My Latest Work
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-6 mb-14 font-Ovo text-base sm:text-lg text-gray-600">
        Welcome to my web development portfolio! Explore a collection of projects showcasing
        my expertise in frontend and backend development.
      </p>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {workData.map((project, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl group transition-all duration-500"
          >
            {/* Background image with scale effect */}
            <div
              className="aspect-square bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Content box */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-11/12 bg-white rounded-md py-4 px-5 
                            flex items-center justify-between shadow-lg transform group-hover:-translate-y-2 
                            transition-all duration-500">
              <div>
                <h3 className="font-semibold text-sm sm:text-base text-gray-800">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-500">{project.description}</p>
              </div>
              <Image
                src={assets.send_icon}
                alt="Open project"
                width={22}
                height={22}
                className="ml-4 w-6 h-6 text-gray-700 group-hover:translate-x-1 transition-transform"
              />
            </div>
          </div>
        ))}
      </div>

     {/* Wrapper to center the button */}
<div className="flex justify-center mt-16">
  <a
    href="#"
    className="inline-flex items-center gap-2
               border border-gray-700 text-gray-700 rounded-full
               py-3 px-8 text-base
               hover:bg-gray-800 hover:text-white
               transition-colors duration-500"
  >
    Show more
    <Image
      src={assets.right_arrow_bold}
      alt="Right arrow"
      className="w-4 h-4"
    />
  </a>
</div>

    </section>
  );
};

export default Works;
