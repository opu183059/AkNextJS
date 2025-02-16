import React from "react";
import animationData from "../../../public/coading.json";
import LottieAnimation from "../shared/LottieAnimation";

const About = () => {
  return (
    <div className="min-h-screen lg:pt-10 pt-20 container mx-auto" id="about">
      <h2
        data-aos="fade-left"
        data-aos-duration="2000"
        className="uppercase bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text font-extrabold lg:text-5xl text-3xl text-center pt-5"
      >
        About me
      </h2>
      <div className="flex lg:flex-row flex-col items-center justify-center gap-10">
        <div className="left lg:w-1/2">
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="flex flex-col justify-center items-center"
          >
            <LottieAnimation animationData={animationData} loop={true} />
            <p className="mb-5 text-center text-lg p-5 lg:p-0">
              Skilled web developer specialized in frontend technologies such as
              HTML, CSS, JavaScript, and React.js. Adept at creating
              user-friendly websites with responsive interfaces and a keen eye
              for design.
            </p>
          </div>
        </div>
        <div className="right lg:w-1/2 w-10/12 lg:text-left text-center">
          <h1
            data-aos="fade-left"
            data-aos-duration="2000"
            className="uppercase text-violet-500 font-extrabold text-xl"
          >
            Education
          </h1>
          <h1 data-aos="fade-left" data-aos-duration="2000" className="text-lg">
            BSc in CSE, <br /> International Islamic University Chittagong
          </h1>
          <h1
            data-aos="fade-left"
            data-aos-duration="2000"
            className="uppercase text-violet-500 font-extrabold text-xl"
          >
            Address
          </h1>
          <h1 data-aos="fade-left" data-aos-duration="2000" className="text-lg">
            Chittagong, Bangladesh. GPO: 4000
          </h1>
          <h1
            data-aos="fade-left"
            data-aos-duration="2000"
            className="uppercase text-violet-500 font-extrabold text-xl"
          >
            Email
          </h1>
          <h1
            data-aos="fade-left"
            data-aos-duration="2000"
            className="mb-5 text-lg"
          >
            opuctg440@gmail.com
          </h1>

          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            className="uppercase text-violet-500 font-extrabold lg:text-xl text-2xl mb-5"
          >
            Skills
          </p>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="skillImg grid md:grid-cols-5 grid-cols-3 gap-12 justify-items-center"
          >
            <img
              src="https://i.ibb.co/ws6kcfH/html.png"
              alt=""
              className="animate-skillAnimate3 shadow-lg shadow-amber-500/50 p-3 transition-all cursor-pointer rounded-3xl"
            />
            <img
              src="https://i.ibb.co/KW3m0s2/css.png"
              alt=""
              className="animate-skillAnimate shadow-lg shadow-sky-400/50 p-3 transition-all cursor-pointer rounded-3xl"
            />
            <img
              src="https://i.ibb.co/rF43Hzr/javascript.png"
              alt=""
              className="animate-skillAnimate3 shadow-lg shadow-yellow-400/80 p-3 transition-all cursor-pointer rounded-3xl"
            />
            <img
              src="https://i.ibb.co/YWyPjsk/react.png"
              alt=""
              className="animate-skillAnimate2 shadow-lg shadow-blue-400/70 p-3 transition-all cursor-pointer rounded-3xl"
            />
            <img
              src="https://i.ibb.co/2nzmhdZ/expressjs.png"
              alt=""
              className="animate-skillAnimate shadow-lg shadow-gray-400/50 p-3 transition-all cursor-pointer rounded-3xl"
            />
            <img
              src="https://i.ibb.co/qrRjJ3s/firebase.png"
              alt=""
              className="animate-skillAnimate2 shadow-lg shadow-yellow-400/70 p-3 transition-all cursor-pointer rounded-3xl"
            />

            <img
              src="https://i.ibb.co/R99rPZn/redux.png"
              alt=""
              className="animate-skillAnimate shadow-lg shadow-violet-500/50 p-3 transition-all cursor-pointer rounded-3xl"
            />
            <img
              src="https://i.ibb.co/gybsqHg/mongo.png"
              alt=""
              className="animate-skillAnimate3 shadow-lg shadow-green-400/70 p-3 transition-all cursor-pointer rounded-3xl"
            />
            <img
              src="https://i.ibb.co/ZSRzvgV/node.png"
              alt=""
              className="animate-skillAnimate shadow-lg shadow-lime-500/70 p-3 transition-all cursor-pointer rounded-3xl"
            />
            <img
              src="https://i.ibb.co/31mcmCK/nextjs.png"
              alt="next"
              className="animate-skillAnimate3 shadow-lg shadow-white/50 p-3 transition-all cursor-pointer rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
