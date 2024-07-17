"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBookmark, FaSuitcase } from "react-icons/fa";

const JobRightSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="text-sm space-y-2">
      <Link
        className={`flex justify-items-center gap-3 p-3 text-gray-800 hover:text-white hover:bg-indigo-600 hover:rounded-lg ${
          pathname === "/jobs" ? "bg-indigo-600 rounded-lg text-white" : ""
        }`}
        href="/jobs"
      >
        <FaSuitcase className="size-4" />
        <p>All</p>
      </Link>
      <Link
        className={`flex justify-items-center gap-3 p-3 text-gray-800 hover:text-white hover:bg-indigo-600 hover:rounded-lg ${
          pathname === "/jobs/saved"
            ? "bg-indigo-600 rounded-lg text-white"
            : ""
        }`}
        href="/jobs/saved"
      >
        <FaBookmark className="size-4" />
        <p>Saved</p>
      </Link>
    </div>
  );
};

export default JobRightSidebar;
