"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";
import { BiMessage } from "react-icons/bi";
import { FaBlog, FaUser } from "react-icons/fa";
import { IoCreate } from "react-icons/io5";

const DashboardSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="p-4 rounded-xl bg-[#ca42ff]/5 min-h-[90vh]">
      <ul className="space-y-4">
        <li>
          <Link
            href="/dashboard"
            className={`flex items-center space-x-2 p-3 rounded-md  ${
              pathname === "/dashboard"
                ? "bg-[#ca42ff]/50"
                : "hover:bg-[#ca42ff]/50"
            }`}
          >
            <FaUser size={18} />
            <span>User Info</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/blog"
            className={`flex items-center space-x-2 p-3 rounded-md  ${
              pathname === "/dashboard/blog"
                ? "bg-[#ca42ff]/50"
                : "hover:bg-[#ca42ff]/50"
            }`}
          >
            <FaBlog size={18} />
            <span>Blogs</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/blog/create-blog"
            className={`flex items-center space-x-2 p-3 rounded-md  ${
              pathname === "/dashboard/blog/create-blog"
                ? "bg-[#ca42ff]/50"
                : "hover:bg-[#ca42ff]/50"
            }`}
          >
            <IoCreate size={18} />
            <span>Create Blog</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/message"
            className={`flex items-center space-x-2 p-3 rounded-md  ${
              pathname === "/dashboard/message"
                ? "bg-[#ca42ff]/50"
                : "hover:bg-[#ca42ff]/50"
            }`}
          >
            <BiMessage size={18} />
            <span>Messages</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
