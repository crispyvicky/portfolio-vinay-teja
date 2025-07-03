"use client";

import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";
import { SiX } from "react-icons/si";
import Link from "next/link";
import { motion } from "framer-motion";

const Home = () => {
  const SOCIAL_LINKS = [
    {
      name: "facebook",
      link: "https://www.facebook.com/people/VisionTech-Group/61576090701067/",
      icon: <FaFacebook />,
    },
    {
      name: "twitter",
      link: "https://x.com/GroupVisiontech",
      icon: <SiX />,
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/vinayteja_19/",
      icon: <FaInstagram />,
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/vinay-teja-2aa29a1a1/",
      icon: <FaLinkedin />,
    },
    {
      name: "telegram",
      link: "https://web.telegram.org/a/#-1002630400957",
      icon: <FaTelegram />,
    },
    {
      name: "youtube",
      link: "https://www.youtube.com/channel/UCXqEQUykoLtWECsUzY2SL9Q",
      icon: <FaYoutube />,
    },
  ];

  return (
    <section className="min-h-screen w-11/12 max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="lg:col-span-2 flex flex-col justify-center"
      >
        <p className="text-base sm:text-lg font-semibold">Hi I’m</p>
        <p className="text-2xl sm:text-4xl font-semibold text-[#A20895] mt-1">
         VINAY TEJA
        </p>
        <p className="text-3xl sm:text-3xl lg:text-3xl font-bold mt-1">
         FOUNDER & CEO
        </p>
        <p className="text-sm sm:text-base lg:text-lg font-medium mt-4 text-gray-700">
          In a world driven by acceleration, VisionTech emerged as a force of
          intention built to challenge the ordinary and awaken the
          extraordinary...
        </p>
        <p className="text-sm sm:text-base lg:text-lg font-medium mt-4 text-gray-700">
          Here, innovation is not a subject — it’s a mindset. Community,
          creativity, and code converge to craft experiences that shape
          character as much as skill...
        </p>
        <button className="text-sm sm:text-base bg-gradient-to-r from-[#9F1089] to-[#593CC2] w-fit px-6 py-3 mt-8 rounded-lg text-white font-semibold hover:opacity-90 transition">
          Explore Me
        </button>
      </motion.div>

      {/* Image & Socials Section */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center relative w-full"
      >
        {/* Optional decorative blob behind image */}
        {/* <img src="/blob.svg" className="absolute z-0 w-[300px]" /> */}

        {/* Main Image */}
        <img
          src="/image/image_1.png"
          alt="Vamshi Krishna"
          className="w-full max-w-[300px] sm:max-w-[350px] object-contain rounded-2xl hover:scale-105 transition-transform duration-300 z-10"
        />

        {/* Social Icons */}
        <div className="flex justify-center flex-wrap gap-4 text-1xl mt-6 z-10">
          {SOCIAL_LINKS.map((social) => (
            <Link
              href={social.link}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#A20895] transition bg-white p-3 rounded-full shadow-lg hover:scale-110"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
