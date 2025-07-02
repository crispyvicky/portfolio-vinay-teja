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
    <section className="h-[90vh] m-auto w-9/12 py-5 lg:grid grid-cols-3">
      {/* Intro Here */}
      <div className="col-span-2  flex flex-col">
        <p className="lg:text-[20px] py-2 font-semibold">Hi I’m</p>
        <p className="lg:text-[40px] text-[#A20895] font-semibold">VINAY TEJA</p>
        <p className="lg:text-[70px] font-bold">FOUNDER & CEO</p>
        <p className="lg:text-[20px] text-sm font-semibold">
          In a world driven by acceleration, VisionTech emerged as a force of
          intention built to challenge the ordinary and awaken the
          extraordinary. It’s not just a hub for education, but a launchpad for
          transformation, where every learner is seen as a future leader.
        </p>
        <p className="lg:text-[20px] mt-4 font-semibold">
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
          <div className="w-3/5 m-auto flex justify-between">
            {SOCIAL_LINKS.map((social) => (
              <Link href={social.link} className="text-xl" key={social.name}>
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
