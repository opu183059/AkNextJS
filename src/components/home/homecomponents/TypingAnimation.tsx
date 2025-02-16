"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1400"
      className="flex flex-col lg:flex-row justify-center lg:justify-start items-center mb-2"
    >
      <p className="mr-2 md:text-3xl text-2xl">I am a</p>
      <TypeAnimation
        sequence={[
          `Web Developer`,
          2000,
          `MERN Stack Developer`,
          1800,
          `Software Developer`,
          1800,
          `Frontend Developer`,
          1800,
        ]}
        speed={10}
        repeat={Infinity}
        className="text-fuchsia-700 font-bold md:text-5xl text-3xl"
      ></TypeAnimation>
    </div>
  );
};

export default TypingAnimation;
