import Link from "next/link";
import React from "react";
import { FaCog, FaHome, FaUser } from "react-icons/fa";

const DashboardSidebar = () => {
  return (
    <div className="min-h-screen p-4 border-r-2 border-gray-50">
      <ul className="space-y-4">
        <li>
          <Link
            href="/dashboard"
            className="flex items-center space-x-2 p-3 rounded-md"
          >
            <FaHome className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/user-info"
            className="flex items-center space-x-2 p-3 rounded-md"
          >
            <FaUser className="h-5 w-5" />
            <span>User Info</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/settings"
            className="flex items-center space-x-2 p-3 rounded-md"
          >
            <FaCog className="h-5 w-5" />
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
