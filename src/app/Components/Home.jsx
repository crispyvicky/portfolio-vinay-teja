import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

const Home = () => {
  const SOCIAL_LINKS = [
    {
      name: "facebook",
      link: "/",
      icon: <FaFacebook />,
    },
    {
      name: "twitter",
      link: "/",
      icon: <FaTwitter />,
    },
    {
      name: "instagram",
      link: "/",
      icon: <FaInstagram />,
    },
    {
      name: "linkedin",
      link: "/",
      icon: <FaLinkedin />,
    },
  ];
  return (
    <section className="h-[90vh] m-auto w-9/12 py-5 grid grid-cols-3">
      {/* Intro Here */}
      <div className="col-span-2  flex flex-col">
        <p className="text-[20px] py-2 font-semibold">Hi I’m</p>
        <p className="text-[40px] text-[#A20895] font-semibold">VINAY TEJA</p>
        <p className="text-[70px] font-bold">FOUNDER & CEO</p>
        <p className="text-[20px] font-semibold">
          In a world driven by acceleration, VisionTech emerged as a force of
          intention built to challenge the ordinary and awaken the
          extraordinary. It’s not just a hub for education, but a launchpad for
          transformation, where every learner is seen as a future leader.
        </p>
        <p className="text-[20px] mt-4 font-semibold">
          Here, innovation is not a subject it's a mindset. Community,
          creativity, and code converge to craft experiences that shape
          character as much as skill. This space is more than a platform, it's a
          living reflection of a mission to rewire how the next generation
          thinks, builds, and leads in tomorrow’s world.
        </p>
        <button className="text-sm bg-gradient-to-r from-[#9F1089] to-[#593CC2] w-[200px] text-white p-3 mt-10 rounded-lg cursor-pointer">
          Explore Me
        </button>
      </div>

      {/* Image Here */}
      <div className="flex items-center relative">
        <img src="/image/image_1.png" />

        {/* Social Links */}
        <div className="w-full absolute bottom-15 py-2">
          <div className="w-2/5 m-auto flex justify-between">
            {SOCIAL_LINKS.map((social) => (
              <Link href={social.link} className="text-xl">
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
