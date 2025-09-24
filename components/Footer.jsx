import { assets } from "@/assets/assets";
import Image from "next/image";

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
    <footer className="bg-white text-white py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-4 animate-fadeIn">
          <Image src={assets.logo} alt="Logo" className="w-28 mx-auto" />
        </div>

        {/* Contact Email */}
        <div className="flex justify-center items-center gap-2 mb-4 animate-slideUp text-sm text-gray-200">
          <Image src={assets.mail_icon} alt="Email Icon" className="w-5 h-5" />
          <span>erABDULSHAKOOR.S@gmail.com</span>
        </div>

        {/* Social Links */}
        <ul className="flex justify-center gap-6 mb-2">
          {socialLinks.map((link, idx) => (
            <li
              key={idx}
              className="transform transition-transform duration-300 hover:scale-110"
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white"
              >
                {link.icon && (
                  <Image
                    src={link.icon}
                    alt={`${link.name} icon`}
                    className="w-5 h-5"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Footer Text */}
        <p className="text-gray-400 text-xs animate-fadeIn">
          &copy; {new Date().getFullYear()} Abdul Shaqoor. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
