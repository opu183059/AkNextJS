"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content: "",
    blogImage: "",
  });

  const router = useRouter();

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = toast.loading("Creating...");
    const response = await fetch("/api/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast.update(id, {
        render: "Blog created successfully!",
        type: "success",
        isLoading: false,
        autoClose: 100,
      });
      router.push("/dashboard/blog");
    } else {
      toast.update(id, {
        render: "Something went wrong, try again",
        type: "error",
        isLoading: false,
        autoClose: 100,
      });
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
          <input
            type="text"
            name="blogImage"
            value={formData.blogImage}
            onChange={handleChange}
            id="blogImage"
            className="block p-3 rounded py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-fuchsia-500 peer ps-2 text-sm lg:text-base"
            placeholder=" "
            required
          />
          <label
            htmlFor="blogImage"
            className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Image URL
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
        <button type="submit" className="btn2 ">
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
