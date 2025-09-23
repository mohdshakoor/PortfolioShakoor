import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState(''); // To show sending/success/error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const formData = new FormData(e.target);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '9b0a84c5-4ac3-4083-8cc5-f57de47a0b23', 
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('Message sent successfully!');
        e.target.reset();
      } else {
        setStatus('Failed to send message.');
      }
    } catch (err) {
      setStatus('An error occurred. Please try again.');
      console.error(err);
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen py-16 scroll-mt-20 
                 bg-[url('/bg-url.png')] bg-no-repeat bg-center 
                 bg-[length:90%_auto] px-4 sm:px-6 lg:px-12"
    >
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h4 className="mb-2 text-base sm:text-lg font-Ovo text-gray-600 tracking-wide">
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
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl 
                   shadow-md p-6 sm:p-8 space-y-5 sm:space-y-6 mt-8"
      >
        <div className="flex flex-col gap-4">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3
                       text-gray-800 placeholder-gray-500
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3
                       text-gray-800 placeholder-gray-500
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3
                       text-gray-800 placeholder-gray-500
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-black text-white 
                     font-medium px-6 py-3 rounded-xl shadow 
                     hover:bg-gray-900 transition duration-200
                     text-sm sm:text-base"
        >
          Submit now
          <Image
            src={assets.right_arrow_white}
            alt="arrow icon"
            className="w-4 h-4 "
          />
        </button>

        {status && <p className="mt-4 text-gray-700">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
