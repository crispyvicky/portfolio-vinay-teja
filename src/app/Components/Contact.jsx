import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-11/12 max-w-6xl mx-auto flex flex-col items-center my-20 pt-28 "
    >
      <h2 className="text-[#000] font-extrabold text-4xl mb-2">
        Lets Design Together
      </h2>
      <p className="w-2/3 m-auto text-2xl text-center mt-4 font-semibold">
        We turn imagination into action crafting ideas, learning, and growing
        side by side.
      </p>
      <div className="my-4 flex gap-3 m-auto w-2/3">
        <input className="border p-4 rounded-xl w-9/12" placeholder="Enter Your Email"/>
        <button className="bg-[#BA22A3D9] text-white p-4  rounded-xl font-semibold cursor-pointer">Contact Me</button>

      </div>
    </div>
  );
};

export default Contact;
