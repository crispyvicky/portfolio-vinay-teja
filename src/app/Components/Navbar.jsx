import React from "react";

const Navbar = () => {
  const NavBar_Array = [
    {
      name: "Home",
      link: "",
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
      link: "#projects",
    },
    {
      name: "Contact Me",
      link: "#contact",
    },
  ];
  const LOGO_URL =
    "https://visiontech.world/_next/image?url=%2Fvisiontech-logo-no-background.png&w=640&q=75";
  return (
    <nav className="flex justify-between items-center w-9/12 py-5 m-auto">
      <img src={LOGO_URL} alt="VisionTech Logo" className="h-[50px]" />
      <div className="flex gap-10">
        {NavBar_Array.map((navlink) => (
          <button key={navlink.name} className="cursor-pointer font-semibold">
            {navlink.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
