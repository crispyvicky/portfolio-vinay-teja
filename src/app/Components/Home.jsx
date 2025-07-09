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
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4 max-w-xl"
        >
          <p className="text-base sm:text-lg font-semibold text-center">Hi I’m</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-center text-[#A20895]">
            VINAY TEJA
          </h1>
          <p className="text-2xl font-semibold text-center">FOUNDER & CEO</p>
          <p className="text-base text-gray-700 leading-relaxed mt-4 text-center text-base font-semibold text-gray-700">
            My journey started with a simple belief: technology should not only
            solve problems, but inspire growth — both personally and
            professionally. That belief turned into a mission: to create an
            ecosystem where innovation, integrity, and intention come together.
          </p>
          <p className="text-base text-gray-700 leading-relaxed text-center text-base font-semibold text-gray-700">
            At VisionTech, we don't just build apps or websites — we build
            experiences that shape skills and character. I believe in leading
            with empathy, mentoring young talent, and pushing boundaries with
            bold ideas. With a background in tech and a passion for creativity.
          </p>
          <p className="text-base text-gray-700 leading-relaxed text-center text-base font-semibold text-gray-700">
            Here, innovation is not a subject — it’s a mindset. Community,
            creativity, and code converge to craft experiences that shape
            character as much as skill.
          </p>
        </motion.div>

        {/* Image + Social Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center relative"
        >
          <div className="relative w-[350px] h-[350px] rounded-2xl overflow-visible">
            {/* Glow Background Image with blur */}
            <div
              className="absolute inset-0 scale-110 blur-xl opacity-90 z-0 rounded-2xl"
              style={{
                backgroundImage: "url('/image/back1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Foreground Main Image relative z-10 w-full rounded-3xl hover:scale-105 transition-transform duration-300 object-cover*/}
            <img
              src="/image/vinay2.png"
              alt="Vamshi Krishna"
              className="relative z-10 w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Social Icons */}
          <div className="flex justify-center flex-wrap gap-3 mt-6 z-10">
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
