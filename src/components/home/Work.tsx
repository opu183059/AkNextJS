import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import img1 from "../../../public/portfolio-img1.jpg";
import img2 from "../../../public/portfolio-img2.jpg";
import img3 from "../../../public/portfolio-img3.jpg";
import img4 from "../../../public/portfolio-img4.jpg";
import Image from "next/image";

const Work = () => {
  return (
    <div
      className="container mx-auto lg:pt-16 pt-24 min-h-screen justify-center"
      id="work"
    >
      <h1
        data-aos="zoom-in-down"
        data-aos-duration="1000"
        className="text-center uppercase bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text font-extrabold lg:text-5xl text-4xl"
      >
        Portfolio
      </h1>
      <div className="mt-7 portfolioContainer mx-auto grid lg:grid-cols-2 gap-8">
        <div
          data-aos="zoom-in-left"
          data-aos-duration="2000"
          className="flex flex-col lg:text-right text-center justify-center"
        >
          <h1 className="uppercase bg-gradient-to-r from-fuchsia-500 to-violet-500 text-transparent bg-clip-text font-extrabold lg:text-3xl text-xl">
            My latest Works
          </h1>
          <p className="text-gray-200 lg:p-0 lg:ps-10 p-10">
            Here are some of my latest Works done with <br /> ReactJS, NodeJS,
            MongoDB, Firebase
          </p>
        </div>
        {/* portfolio 1  */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="group relative overflow-hidden border-2 border-white/50 rounded-xl lg:mx-2 mx-4"
        >
          <div>
            <div className="group-hover:bg-black/70 w-full h-full absolute z-30 transition-all duration-300"></div>
            <Image
              src={img3}
              alt=""
              className="group-hover:scale-125 transition-all duration-500"
            />

            <div className="absolute -bottom-full left-1 md:left-10 z-50 md:group-hover:bottom-3 group-hover:bottom-1 transition-all duration-500">
              <h2 className="md:text-xl text-base uppercase text-violet-400 font-bold">
                Craftopia
              </h2>
              <p className="text-sm md:text-base">
                MERN Stack project with Dashboard Functionality
              </p>
              <p className="text-sm md:text-base">Features,</p>
              <ul className="md:ml-2 text-sm md:text-base">
                <li className="hidden md:flex items-center gap-1">
                  <MdVerified className="text-violet-400"></MdVerified>Login
                  with email, password and google login
                </li>
                <li className="flex items-center gap-1">
                  <MdVerified className="text-violet-400"></MdVerified>Users can
                  enroll classes, view them on dashboard
                </li>
                <li className="flex items-center gap-1">
                  <MdVerified className="text-violet-400"></MdVerified>
                  Instructor can post and manage classes
                </li>
                <li className="flex items-center gap-1">
                  <MdVerified className="text-violet-400"></MdVerified>Admin can
                  manage users, classes, set roles.
                </li>
              </ul>
              <div className="flex gap-2 md:mt-2 mt-1 text-sm md:text-base">
                <a
                  target="_blank"
                  href="https://craftopia-2b729.web.app/"
                  className="border-violet-300 bg-black/30 border-[1px] rounded-md px-2 py-1 text-violet-200 hover:text-white hover:bg-violet-700 flex items-center gap-1"
                  rel="noreferrer"
                >
                  <BsLink45Deg></BsLink45Deg>Live Link
                </a>
                <a
                  target="_blank"
                  href="https://github.com/opu183059/craftopia_Client"
                  className="border-violet-300 bg-black/30 border-[1px] rounded-md px-2 py-1 text-violet-200 hover:text-white hover:bg-violet-700 flex items-center gap-1"
                  rel="noreferrer"
                >
                  <AiFillGithub></AiFillGithub>Github Link
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* portfolio 2  */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="group relative overflow-hidden border-2 border-white/50 rounded-xl lg:mx-2 mx-4"
        >
          <div>
            <div className="group-hover:bg-black/70 w-full h-full absolute z-30 transition-all duration-300"></div>
            <Image
              fill
              src={img2}
              alt=""
              className="group-hover:scale-125 transition-all duration-500"
            />

            <div className="absolute -bottom-full left-1 md:left-10 z-50 md:group-hover:bottom-3 group-hover:bottom-1 transition-all duration-500">
              <h2 className="md:text-xl text-base uppercase text-violet-400 font-bold">
                TinyZoo
              </h2>
              <p className="text-sm md:text-base">
                A website to post and sell toys
              </p>
              <p className="text-sm md:text-base">Features,</p>
              <ul className="md:ml-2 text-sm md:text-base">
                <li className="hidden md:flex items-center gap-1">
                  <MdVerified className="text-violet-400"></MdVerified>Login
                  with email, password and google login
                </li>
                <li className="flex items-center gap-1">
                  <MdVerified className="text-violet-400"></MdVerified>Search
                  toy by Name or Category
                </li>
                <li className="flex items-center gap-1">
                  <MdVerified className="text-violet-400"></MdVerified>Post Toy
                  for sell
                </li>
                <li className="flex items-center gap-1">
                  <MdVerified className="text-violet-400"></MdVerified>Manage
                  (update, delete) the posted toy
                </li>
              </ul>
              <div className="flex gap-2 md:mt-2 mt-1 text-sm md:text-base">
                <a
                  target="_blank"
                  href="https://tinyzoo-aec49.web.app/"
                  className="border-violet-300 bg-black/30 border-[1px] rounded-md px-2 py-1 text-violet-200 hover:text-white hover:bg-violet-700 flex items-center gap-1"
                  rel="noreferrer"
                >
                  <BsLink45Deg></BsLink45Deg>Live Link
                </a>
                <a
                  target="_blank"
                  href="https://github.com/opu183059/TinyZoo_Client"
                  className="border-violet-300 bg-black/30 border-[1px] rounded-md px-2 py-1 text-violet-200 hover:text-white hover:bg-violet-700 flex items-center gap-1"
                  rel="noreferrer"
                >
                  <AiFillGithub></AiFillGithub>Github Link
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* portfolio 3  */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="group relative overflow-hidden border-2 border-white/50 rounded-xl lg:mx-2 mx-4"
        >
          <div>
            <div className="group-hover:bg-black/70 w-full h-full absolute z-30 transition-all duration-300"></div>
            <Image
              src={img4}
              alt=""
              className="group-hover:scale-125 transition-all duration-500"
            />

            <div className="absolute -bottom-full left-1 md:left-10 z-50 md:group-hover:bottom-3 group-hover:bottom-1 transition-all duration-500">
              <h2 className="md:text-xl text-base uppercase text-violet-400 font-bold">
                Campus Reserve
              </h2>
              <p className="text-sm md:text-base">
                You can search and book your fabourite Colleges
              </p>
              <p className="text-sm md:text-base">Features,</p>
              <ul className="md:ml-2 text-sm md:text-base">
                <li className="hidden md:flex items-center gap-1">
                  <MdVerified className="text-violet-400"></MdVerified>Google
                  Login, email-password login
                </li>
                <li className="flex items-center gap-1">
                  <MdVerified className="text-violet-400"></MdVerified>Update
                  user profile (Name, Image, Address)
                </li>
                <li className="flex items-center gap-1">
                  <MdVerified className="text-violet-400"></MdVerified>Search
                  and book college from admission page
                </li>
                <li className="flex items-center gap-1">
                  <MdVerified className="text-violet-400"></MdVerified>Give
                  review and add them on home screen
                </li>
              </ul>
              <div className="flex gap-2 md:mt-2 mt-1 text-sm md:text-base">
                <a
                  target="_blank"
                  href="https://campureserve.web.app/"
                  className="border-violet-300 bg-black/30 border-[1px] rounded-md px-2 py-1 text-violet-200 hover:text-white hover:bg-violet-700 flex items-center gap-1"
                  rel="noreferrer"
                >
                  <BsLink45Deg></BsLink45Deg>Live Link
                </a>
                <a
                  target="_blank"
                  href="https://github.com/opu183059/Campus_Reserve_Client"
                  className="border-violet-300 bg-black/30 border-[1px] rounded-md px-2 py-1 text-violet-200 hover:text-white hover:bg-violet-700 flex items-center gap-1"
                  rel="noreferrer"
                >
                  <AiFillGithub></AiFillGithub>Github Link
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* portfolio 4  */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="group relative overflow-hidden border-2 border-white/50 rounded-xl lg:mx-2 mx-4"
        >
          <div>
            <div className="group-hover:bg-black/70 w-full h-full absolute z-30 transition-all duration-300"></div>
            <Image
              src={img1}
              alt=""
              className="group-hover:scale-125 transition-all duration-500"
            />
            <div className="absolute -bottom-full left-1 md:left-10 z-50 md:group-hover:bottom-3 group-hover:bottom-1 transition-all duration-500">
              <h2 className="md:text-xl text-base uppercase text-violet-400 font-bold">
                HERO&apos;s Recipe
              </h2>
              <p className="text-sm md:text-base">
                A Website to access recipies around the world
              </p>
              <p className="text-sm md:text-base">Features,</p>
              <ul className="md:ml-2 text-sm md:text-base">
                <li className="flex items-center gap-1">
                  <MdVerified className="text-violet-400"></MdVerified>Google
                  Login, GitHub Login
                </li>
                <li className="flex items-center gap-1">
                  <MdVerified className="text-violet-400"></MdVerified>View
                  chef&apos;s full details
                </li>
                <li className="flex items-center gap-1">
                  <MdVerified className="text-violet-400"></MdVerified>View
                  Recipies and add to fabourite
                </li>
              </ul>

              <div className="flex gap-2 md:mt-2 mt-1 text-sm md:text-base">
                <a
                  target="_blank"
                  href="https://project-1-34a32.web.app/"
                  className="border-violet-300 bg-black/30 border-[1px] rounded-md px-2 py-1 text-violet-200 hover:text-white hover:bg-violet-700 flex items-center gap-1"
                  rel="noreferrer"
                >
                  <BsLink45Deg></BsLink45Deg> Live Link
                </a>
                <a
                  target="_blank"
                  href="https://github.com/opu183059/HerosRecipe_Client"
                  className="border-violet-300 bg-black/30 border-[1px] rounded-md px-2 py-1 text-violet-200 hover:text-white hover:bg-violet-700 flex items-center gap-1"
                  rel="noreferrer"
                >
                  <AiFillGithub></AiFillGithub>Github Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
