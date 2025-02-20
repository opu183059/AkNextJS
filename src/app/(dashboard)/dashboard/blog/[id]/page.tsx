"use client";
import CustomLoader from "@/components/shared/CustomLoader";
import { useParams, useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { toast } from "react-toastify";

const SingleBlogPage = () => {
  const params = useParams();

  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content: "",
  });

  const router = useRouter();

  useEffect(() => {
    const fetchblog = async () => {
      try {
        const response = await fetch(`/api/blog/${params.id}`);
        const data = await response.json();
        setFormData({
          title: data?.blog?.title,
          author: data?.blog?.author,
          content: data?.blog?.content,
        });
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchblog();
  }, [params.id]);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = toast.loading("Updating...");
    const response = await fetch(`/api/blog/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      toast.update(id, {
        render: "Blog Updated successfully!",
        type: "success",
        isLoading: false,
        autoClose: 100,
      });
    } else {
      toast.update(id, {
        render: "Something went wrong, try again",
        type: "error",
        isLoading: false,
        autoClose: 100,
      });
    }
  };

  const handleDelete = async () => {
    if (!params.id) {
      toast.error("Invalid blog ID");
      return;
    }

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(`/api/blog/${params.id}`, {
        method: "DELETE",
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        toast.success("Blog deleted successfully!");
        router.push("/dashboard/blog");
      } else {
        toast.error(data.message || "Failed to delete the blog");
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error("Failed to delete the blog. Please check your connection.");
    }
  };

  if (loading) {
    return <CustomLoader />;
  }

  return (
    <div className="relative">
      <div className="absolute right-0 top-5">
        <button
          onClick={handleDelete}
          className="!flex !items-center gap-1 !bg-red-500 !border-red-500 !rounded-md btn2"
        >
          <BiTrash size={18} /> Delete
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6 pt-2">
        <h4 className="my-2 text-xl">Update Blog</h4>
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
        <button type="submit" className="btn2">
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default SingleBlogPage;
