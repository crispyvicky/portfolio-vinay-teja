import React from "react";

const Projects = () => {
  return (
    <section
      id="project"
      className="w-11/12 max-w-6xl mx-auto flex flex-col items-center my-16 pt-16 "
    >
      <h2 className="text-[#000] font-extrabold text-4xl mb-2">My Projects</h2>
      <p className="w-9/12 m-auto text-xl text-center mt-4 font-semibold">
        VisionTech is a career-building platform offering hands-on training, internships, and placement support in tech, content, design, and healthcare.
      </p>

      <div className="mt-10 w-full my-10 border border-[#EE09CB] border-x-8 border-x-[#EE09CB] rounded-2xl overflow-hidden shadow-2xl">
        <img src="/image/visiontech_website.png"/>

      </div>
       <p
          className="w-9/12 mx-auto mt-10  text-center text-[#42109F] font-bold text-2xl"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
        >
            Start with clarity, stay consistent, and trust the process — that’s the formula I follow.
        </p>

    </section>
  );
};

export default Projects;
