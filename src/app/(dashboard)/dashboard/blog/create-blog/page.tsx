"use client";
import { useState } from "react";
import { toast } from "react-toastify";

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Blog Data:", formData);

    const response = await fetch("/api/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      toast.success("Blog created successfully!");
    } else {
      toast.error("Something went wrong, try again");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6 pt-2">
        <h4 className="my-2 text-xl">Create Blog</h4>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            value={formData.title}
            onChange={handleChange}
            name="title"
            id="title"
            className="block p-3 rounded py-2.5 px-0 w-full text-sm lg:text-base ps-2 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-fuchsia-500 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="title"
            className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Blog Title
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            id="author"
            className="block p-3 rounded py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-fuchsia-500 peer ps-2 text-sm lg:text-base"
            placeholder=" "
            required
          />
          <label
            htmlFor="author"
            className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Author Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            id="content"
            className="block p-3 rounded py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-fuchsia-500 peer ps-2 text-sm lg:text-base"
            placeholder=" "
            required
          />
          <label
            htmlFor="content"
            className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Blog Content
          </label>
        </div>
        <button type="submit" className="btn2 !rounded-md">
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
