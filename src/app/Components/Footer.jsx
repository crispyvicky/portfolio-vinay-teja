import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
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
