"use client";
import { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 ng-untouched ng-pristine ng-valid border-2 border-white rounded-xl p-4 w-96"
    >
      <div className="space-y-2">
        <h2 className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text font-extrabold lg:text-3xl text-2xl text-center ">
          Login
        </h2>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="name"
          value={formData.name}
          onChange={handleChange}
          name="from_name"
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
          name="from_email"
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
        <input
          type="password"
          name="from_password"
          value={formData.password}
          onChange={handleChange}
          id="password"
          className="block p-3 rounded py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-fuchsia-500 peer ps-2 text-sm lg:text-base"
          placeholder=" "
          required
        />
        <label
          htmlFor="password"
          className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-fuchsia-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Password
        </label>
      </div>

      <button
        type="submit"
        className="btn10 btnContact cursor-pointer w-full justify-center"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
