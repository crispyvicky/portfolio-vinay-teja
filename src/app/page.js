import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Projects from "./Components/Projects";

const page = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
    </div>
  );
};

export default page;
