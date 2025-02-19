"use client";

import BlogCardDashboard from "@/components/blog/BlogCardDashboard";
import CustomLoader from "@/components/shared/CustomLoader";
import React, { useEffect, useState } from "react";

export type Tblog = {
  author?: string;
  content?: string;
  createdAt?: string;
  title?: string;
  updatedAt?: string;
  _id?: string;
  blogImage?: string;
};

const AdminBlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/blog");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <CustomLoader />;
  }

  return (
    <div className="mt-2">
      <h3>Recent Blogs</h3>
      {posts &&
        posts.map((post: Tblog) => (
          <BlogCardDashboard key={post?._id} blogData={post} />
        ))}
    </div>
  );
};

export default AdminBlogPage;
