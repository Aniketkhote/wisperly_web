"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaBookmark,
  FaBriefcase,
  FaHome,
  FaLayerGroup,
  FaPodcast,
  FaSuitcase,
  FaUsers,
} from "react-icons/fa";
import { FaShield } from "react-icons/fa6";
import Footer from "./Footer";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="mb-5">
      <div className="bg-white p-4 my-5 ml-5 rounded-lg text-sm space-y-2">
        <Link
          className={`flex justify-items-center gap-3 p-3 text-gray-800 hover:text-white hover:bg-indigo-600 hover:rounded-lg ${
            pathname === "/" ? "bg-indigo-600 rounded-lg text-white" : ""
          }`}
          href="/"
        >
          <FaHome className="size-4" />
          <p>Feed</p>
        </Link>
        <Link
          className={`flex justify-items-center gap-3 p-3 text-gray-800 hover:text-white hover:bg-indigo-600 hover:rounded-lg ${
            pathname === "/friends" ? "bg-indigo-600 rounded-lg text-white" : ""
          }`}
          href="/mynetwork"
        >
          <FaUsers className="size-4" />
          <p>Network</p>
        </Link>
        <Link
          className={`flex justify-items-center gap-3 p-3 text-gray-800 hover:text-white hover:bg-indigo-600 hover:rounded-lg ${
            pathname === "/companies"
              ? "bg-indigo-600 rounded-lg text-white"
              : ""
          }`}
          href="/companies"
        >
          <FaBriefcase className="size-4" />
          <p>Companies</p>
        </Link>
        <Link
          className={`flex justify-items-center gap-3 p-3 text-gray-800 hover:text-white hover:bg-indigo-600 hover:rounded-lg ${
            pathname === "/communities"
              ? "bg-indigo-600 rounded-lg text-white"
              : ""
          }`}
          href="/communities"
        >
          <FaLayerGroup className="size-4" />
          <p>Communities</p>
        </Link>
        <Link
          className={`flex justify-items-center gap-3 p-3 text-gray-800 hover:text-white hover:bg-indigo-600 hover:rounded-lg ${
            pathname === "/pods" ? "bg-indigo-600 rounded-lg text-white" : ""
          }`}
          href="/pods"
        >
          <FaShield className="size-4" />
          <p>Pods</p>
        </Link>
        <Link
          className={`flex justify-items-center gap-3 p-3 text-gray-800 hover:text-white hover:bg-indigo-600 hover:rounded-lg ${
            pathname === "/podcasts"
              ? "bg-indigo-600 rounded-lg text-white"
              : ""
          }`}
          href="/podcasts"
        >
          <FaPodcast className="size-4" />
          <p>Podcasts</p>
        </Link>
        <Link
          className={`flex justify-items-center gap-3 p-3 text-gray-800 hover:text-white hover:bg-indigo-600 hover:rounded-lg ${
            pathname.includes("/jobs")
              ? "bg-indigo-600 rounded-lg text-white"
              : ""
          }`}
          href="/jobs"
        >
          <FaSuitcase className="size-4" />
          <p>Job</p>
        </Link>
        <Link
          className={`flex justify-items-center gap-3 p-3 text-gray-800 hover:text-white hover:bg-indigo-600 hover:rounded-lg ${
            pathname === "/bookmark"
              ? "bg-indigo-600 rounded-lg text-white"
              : ""
          }`}
          href="/bookmark"
        >
          <FaBookmark className="size-4" />
          <p>Bookmark</p>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Sidebar;
