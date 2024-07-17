"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";

const SettingSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-white p-4 my-5 ml-5 rounded-lg text-sm space-y-2">
      <Link
        className={`flex justify-items-center gap-3 p-3 text-gray-800 hover:text-white hover:bg-indigo-600 hover:rounded-lg ${
          pathname === "/setting" ? "bg-indigo-600 rounded-lg text-white" : ""
        }`}
        href="/setting"
      >
        <FaHome className="size-4" />
        <p>Account</p>
      </Link>
      <Link
        className={`flex justify-items-center gap-3 p-3 text-gray-800 hover:text-white hover:bg-indigo-600 hover:rounded-lg ${
          pathname === "/preferences"
            ? "bg-indigo-600 rounded-lg text-white"
            : ""
        }`}
        href="/preferences"
      >
        <FaHome className="size-4" />
        <p>Preferences</p>
      </Link>
    </div>
  );
};

export default SettingSidebar;
