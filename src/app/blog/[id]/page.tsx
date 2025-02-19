"use client";
import { Tblog } from "@/app/(dashboard)/dashboard/blog/page";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const SingleBlogPage = () => {
  const params = useParams();

  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState({} as Tblog);
  console.log(loading, blog);

  useEffect(() => {
    const fetchblog = async () => {
      try {
        const response = await fetch(`/api/blog/${params.id}`);
        const data = await response.json();
        setBlog({
          title: data?.blog?.title,
          author: data?.blog?.author,
          content: data?.blog?.content,
          blogImage:
            data?.blog?.blogImage ||
            "https://th.bing.com/th/id/OIP.D88OIDf5AHVHvHShFeHWUwHaEK?w=320&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        });
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchblog();
  }, []);

  return (
    <div className="container mx-auto mt-2">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">{blog.title}</h1>
        <h3 className="mt-1 text-gray-200 uppercase">- {blog.author}</h3>
        <Image
          src={
            blog.blogImage ||
            "https://th.bing.com/th/id/OIP.D88OIDf5AHVHvHShFeHWUwHaEK?w=320&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
          }
          alt={blog?.title || "Blog Image"}
          width={200}
          height={200}
          className="w-full mt-6 rounded-lg"
        />
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          hendrerit metus vel ipsum fermentum, nec pharetra justo egestas...
        </p>
        <Link
          href="/blog"
          className="text-blue-300 font-medium mt-6 inline-block hover:underline"
        >
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
};

export default SingleBlogPage;
