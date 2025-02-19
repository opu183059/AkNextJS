import { Tblog } from "@/app/(dashboard)/dashboard/blog/page";
import Link from "next/link";
import React from "react";

const BlogCardDashboard = ({ blogData }: { blogData: Tblog }) => {
  return (
    <Link href={`/dashboard/blog/${blogData?._id}`}>
      <div className="my-4 p-2 bg-purple-500/10 rounded-md hover:bg-purple-500/40">
        <div className="flex justify-between items-center">
          <p className="text-xl">{blogData?.title}</p>
          <p className="uppercase text-sm text-gray-400">
            - {blogData?.author}
          </p>
        </div>
        <p className="line-clamp-3">{blogData?.content}</p>
      </div>
    </Link>
  );
};

export default BlogCardDashboard;
