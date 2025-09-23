import React from 'react';
import Image from 'next/image';
import { assets, serviceData } from '@/assets/assets';

const Services = () => {
  return (
    <div id="services" className="w-full px-6 sm:px-10 lg:px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I offer</h4>
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo">My Services</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-base sm:text-lg">
        I am a frontend developer from California, USA with 10 years of experience
        in multiple companies like Microsoft, Tesla and Apple.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl p-6 sm:p-8 hover:shadow-lg cursor-pointer 
                       hover:bg-lightHover hover:-translate-y-1 transition duration-500"
          >
            <Image src={icon} alt="" className="w-10 h-auto" />
            <h3 className="text-lg sm:text-xl my-4 text-gray-700 font-semibold">{title}</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-6">{description}</p>
            <a
              href={link}
              className="flex items-center gap-2 text-sm sm:text-base mt-5 text-primary hover:underline"
            >
              Read more
              <Image alt="" src={assets.right_arrow} className="w-4 h-auto" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

