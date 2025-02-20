"use client";
import BlogCard from "@/components/blog/BlogCard";
import CustomLoader from "@/components/shared/CustomLoader";
import { useEffect, useState } from "react";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchblogs = async () => {
      try {
        const response = await fetch("/api/blog", { cache: "force-cache" });
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchblogs();
  }, []);

  if (loading) {
    return <CustomLoader />;
  }

  return (
    <div className="container mx-auto pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {blogs &&
          blogs.map((blog, index) => (
            <BlogCard key={index} blogData={blog} index={index} />
          ))}
      </div>
    </div>
  );
};

export default BlogPage;
