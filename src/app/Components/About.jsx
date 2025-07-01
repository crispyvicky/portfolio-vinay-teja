import React from "react";

const About = () => {
  return (
    <div id="about" className="h-[90vh] mt-10 m-auto w-9/12 py-5 grid grid-cols-3">
      <div className="flex items-center relative">
        <img src="/image/image_2.png" />
      </div>
      <div className="col-span-2  flex flex-col">
        <p className="text-[40px] font-bold">About Me</p>
        <p className="text-[20px] font-semibold  mt-5">
          VisionTech was built with a clear purpose to transform how we learn,
          grow, and lead in a world defined by constant change. It stands as a
          space where innovation shapes education, and knowledge evolves into
          real-world impact.
        </p>
        <p className="text-[20px] font-semibold mt-5">
          Through a powerful blend of technology, mentorship, and human
          connection, VisionTech cultivates future-ready minds equipped with
          clarity, confidence, and creativity. This journey reflects a deeper
          commitment to empower individuals to rise with purpose and lead with
          vision.
        </p>
        <p
          className="w-9/12 mx-auto mt-10 text-xl text-center text-[#42109F] font-bold"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
        >
          Learning becomes power when it’s driven by vision and lived with
          purpose.
        </p>
      </div>
    </div>
  );
};

export default About;
