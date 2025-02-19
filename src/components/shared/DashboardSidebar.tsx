import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";

const DashboardSidebar = () => {
  return (
    <div className="p-4 rounded-xl bg-[#ca42ff]/5 min-h-[90vh]">
      <ul className="space-y-4">
        <li>
          <Link
            href="/dashboard"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-[#ca42ff]/50"
          >
            <FaUser className="h-5 w-5" />
            <span>User Info</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/blog/create-blog"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-[#ca42ff]/50"
          >
            <FaUser className="h-5 w-5" />
            <span>Create Blog</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
