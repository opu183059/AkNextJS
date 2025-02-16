"use client";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import Link from "next/link";
import opuImage from "../../../public/avatar3.png";
import Image from "next/image";
import { GoMail } from "react-icons/go";
import TypingAnimation from "./homecomponents/TypingAnimation";
import { useEffect } from "react";
import Aos from "aos";

const Banner = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="min-h-screen container mx-auto lg:pt-0 pt-32" id="home">
      <div className="flex flex-col lg:flex-row justify-between items-center min-h-screen lg:gap-12">
        <div className="lg:w-7/12 w-11/12 lg:text-left text-center">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="uppercase bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text font-extrabold lg:text-5xl md:text-4xl text-3xl"
          >
            Akther uz zaman
          </h1>
          <TypingAnimation />
          <p data-aos="fade-up" data-aos-duration="1600" className="text-xl">
            Passionate MERN Stack developer experienced in frontend
            technologies, creating user-friendly websites with HTML, CSS,
            JavaScript, React.js and Node.js. Strong eye for design,
            problem-solving skills, and attention to detail. <br /> Let&apos;s
            collaborate on creating impactful web solutions.
          </p>

          <div
            data-aos="fade-up"
            data-aos-duration="1600"
            className="icons flex justify-center lg:justify-start gap-2 mt-4"
          >
            <h1 className="uppercase">Contact with me in</h1>
            <a
              href="https://www.linkedin.com/in/akther-uz-zaman-852827278/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin
                size={25}
                className="text-sky-400 rounded hover:shadow-lg hover:shadow-sky-400/70 transition-all"
              ></AiFillLinkedin>
            </a>

            <a
              href="https://www.facebook.com/opu.fahim"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillFacebook
                size={25}
                className="text-blue-500 rounded hover:shadow-lg hover:shadow-blue-500/70 transition-all"
              ></AiFillFacebook>
            </a>
            <a aria-label="Chat on WhatsApp" href="https://wa.me/01521227899">
              <AiOutlineWhatsApp
                size={24}
                className="text-green-500 rounded hover:shadow-lg hover:shadow-green-500/70 transition-all"
              ></AiOutlineWhatsApp>
            </a>
            <a href="mailto:opuctg440@gmail.com">
              <AiOutlineMail
                size={24}
                className="text-orange-600 rounded hover:shadow-lg hover:shadow-orange-600 transition-all"
              ></AiOutlineMail>
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="flex justify-center lg:justify-start items-center gap-4 mt-4"
          >
            <Link href={"/"} className="btn10 cursor-pointer">
              <GoMail></GoMail>Message
            </Link>
            {/* <a
              ref={resume}
              download="aktheruzzaman_resume.pdf"
              className="btn10 cursor-pointer"
            >
              <AiOutlineDownload></AiOutlineDownload> Resume
            </a> */}
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="lg:w-5/12 pt-10 p-5 lg:pt-0"
        >
          <Image src={opuImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
