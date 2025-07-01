"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavBar_Array = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Projects", link: "#project" },
    { name: "Contact Me", link: "#contact" },
  ];

  const LOGO_URL =
    "https://visiontech.world/_next/image?url=%2Fvisiontech-logo-no-background.png&w=640&q=75";

  return (
    <nav className="w-9/12 mx-auto py-4 flex justify-between items-center relative z-50">
      {/* Logo */}
      <img src={LOGO_URL} alt="VisionTech Logo" className="h-12 w-auto" />

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
        {NavBar_Array.map((navlink) => (
          <Link key={navlink.name} href={navlink.link}>
            <span className="cursor-pointer font-semibold hover:text-blue-600 transition-colors duration-300">
              {navlink.name}
            </span>
          </Link>
        ))}
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu with framer-motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden"
          >
            {NavBar_Array.map((navlink) => (
              <Link
                key={navlink.name}
                href={navlink.link}
                onClick={() => setIsOpen(false)}
              >
                <span className="cursor-pointer font-semibold hover:text-blue-600 transition-colors duration-300">
                  {navlink.name}
                </span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
