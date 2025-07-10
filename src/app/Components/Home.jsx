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
    <section className="min-h-screen w-full bg-gradient-to-br from-white to-[#fdf6fb] py-14 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <p className="text-base sm:text-lg font-semibold">Hi I’m</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#A20895]">VINAY TEJA</h1>
          <p className="text-2xl font-semibold">FOUNDER & CEO</p>

          <div className="text-sm sm:text-base lg:text-lg font-semibold mt-4 text-gray-700">
            <p>
              My journey started with a simple belief: technology should not only solve problems,
              but inspire growth — both personally and professionally. That belief turned into a mission:
              to create an ecosystem where innovation, integrity, and intention come together.
            </p>

            <p>
              At <span className="text-[#42109F] font-bold">VisionTech</span> we build
              experiences that shape skills and character. I believe in leading with empathy,
              mentoring young talent, and pushing boundaries with bold ideas.
            </p>

            <p>
              Here, innovation is not a subject — it’s a mindset. Community, creativity,
              and code converge to craft experiences that shape character as much as skill.
            </p>
          </div>
        </motion.div>

        {/* Image + Socials Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* Image box with glow effect */}
          {/* Image box with glow effect */}
<div className="relative w-full max-w-[400px] h-[550px] rounded-3xl overflow-hidden shadow-xl flex-shrink-0">
  <div
    className="absolute inset-0 scale-110 blur-xl opacity-90 z-0 rounded-3xl"
    style={{
      backgroundImage: "url('/image/back1.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  ></div>

  <img
  src="/image/vinayz.jpg"
  alt="Vinay Teja"
  className="relative z-10 w-full h-full object-cover object-center rounded-3xl hover:scale-105 transition-transform duration-300"
/>
</div>


          {/* Social Media Icons */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {SOCIAL_LINKS.map((social) => (
              <Link
                href={social.link}
                key={social.name}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl bg-white p-3 rounded-full shadow-md hover:scale-110 hover:text-[#A20895] transition-all duration-200"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
