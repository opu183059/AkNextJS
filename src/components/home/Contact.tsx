"use client";
import React, { useState } from "react";
import LottieAnimation from "../shared/LottieAnimation";
import animationData from "../../../public/143395-contact.json";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const id = toast.loading("Sending Message...");
    const response = await fetch("/api/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast.update(id, {
        render: "Message sent successfully!",
        type: "success",
        isLoading: false,
        autoClose: 1000,
      });
    } else {
      toast.update(id, {
        render: "Something went wrong, try again",
        type: "error",
        isLoading: false,
        autoClose: 1000,
      });
    }
  };

  return (
    <div
      className="container mx-auto lg:pt-16 min-h-screen justify-center"
      id="contact"
    >
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg lg:grid-cols-2 lg:px-12 xl:px-32">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="flex flex-col items-center justify-between"
        >
          <LottieAnimation animationData={animationData} />
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-2">
            <h2 className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text font-extrabold lg:text-5xl text-4xl">
              Let&apos;s connect
            </h2>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="name"
              value={formData.name}
              onChange={handleChange}
              name="name"
              id="name"
              className="block p-3 rounded py-2.5 px-0 w-full text-sm lg:text-base ps-2 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-fuchsia-500 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-fuchsia-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              id="email"
              className="block p-3 rounded py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-fuchsia-500 peer ps-2 text-sm lg:text-base"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-fuchsia-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <textarea
              rows={3}
              name="message"
              value={formData.message}
              onChange={handleChange}
              id="message"
              className="block p-3 rounded py-2.5 px-0 w-full text-sm lg:text-base ps-2 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-fuchsia-500 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="message"
              className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-fuchsia-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Message
            </label>
          </div>

          <button
            type="submit"
            className="btn10 btnContact cursor-pointer w-full justify-center"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
