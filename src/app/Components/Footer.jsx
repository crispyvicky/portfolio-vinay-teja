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

const Footer = () => {

  const NavBar_Array = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Projects",
      link: "#project",
    },
    {
      name: "Contact Me",
      link: "#contact",
    },
  ];
  
 const SOCIAL_LINKS = [
  {
    name: "facebook",
    link: "https://www.facebook.com/people/VisionTech-Group/61576090701067/",
    icon: <FaFacebook />,
  },
  {
    name: "twitter",
    link: "https://x.com/GroupVisiontech",
    icon: <SiX />, // updated icon for X (Twitter)
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
    <footer className="bg-[#F8F8F8]">
      <div className="flex flex-col items-center gap-15 pt-15">
        <p className="text-[40px] font-bold p-1">
          <span className="bg-[#BA22A3D9] text-white px-2">V</span>INAY TEJA
        </p>

        <div className="flex gap-10">
          {NavBar_Array.map((navlink) => (
            <Link href={navlink.link} key={navlink.name}>
              <button  className="cursor-pointer">
                {navlink.name}
              </button>
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div className="w-full  py-2">
          <div className="w-[200px] m-auto flex justify-between">
            {SOCIAL_LINKS.map((social) => (
              <Link href={social.link} className="text-xl">
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full bg-[#545454] text-[#FFFFFF] p-2 py-4 text-center">
          Copyright © 2024 VisionTech. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
