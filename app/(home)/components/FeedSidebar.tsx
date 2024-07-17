"use client";
import Link from "next/link";
// components/RightSidebar.tsx
import { useState } from "react";

interface User {
  id: number;
  src: string;
  name: string;
  role: string;
}

const RightSidebar = () => {
  const [followedUsers, setFollowedUsers] = useState<Set<number>>(new Set());

  const suggestions: User[] = [
    {
      id: 1,
      src: "https://api.multiavatar.com/Skeleto81.png",
      name: "Roger Korsgaard",
      role: "UX Designer",
    },
    {
      id: 2,
      src: "https://api.multiavatar.com/Skeleto82.png",
      name: "Terry Torff",
      role: "Frontend Developer",
    },
    {
      id: 3,
      src: "https://api.multiavatar.com/Skeleto83.png",
      name: "Angel Bergson",
      role: "Product Manager",
    },
    {
      id: 4,
      src: "https://api.multiavatar.com/Skeleto84.png",
      name: "Lisa Chen",
      role: "Data Analyst",
    },
    {
      id: 5,
      src: "https://api.multiavatar.com/Skeleto85.png",
      name: "Mark Johnson",
      role: "Backend Developer",
    },
    {
      id: 6,
      src: "https://api.multiavatar.com/Skeleto86.png",
      name: "Sarah Williams",
      role: "Marketing Specialist",
    },
  ];

  const toggleFollow = (userId: number) => {
    setFollowedUsers((prevState) => {
      const newState = new Set(prevState);
      if (newState.has(userId)) {
        newState.delete(userId);
      } else {
        newState.add(userId);
      }
      return newState;
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md mr-5">
      <h3 className="font-bold text-gray-700 px-4 pt-3">Suggested</h3>
      <div className="space-y-1 text-sm pb-4 pt-2 px-2">
        {suggestions.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-md"
          >
            <Link
              href={`/profile/${user.id}`}
              className="flex items-center cursor-pointer"
            >
              <img
                src={user.src}
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <p className="text-sm font-semibold text-gray-700 overflow-ellipsis">
                  {user.name}
                </p>
                <p className="text-xs text-gray-500">{user.role}</p>
              </div>
            </Link>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFollow(user.id);
              }}
              className={`px-3 py-1 rounded-md text-sm transition-colors ${
                followedUsers.has(user.id)
                  ? "text-indigo-500 border border-indigo-500"
                  : "bg-indigo-500 text-white hover:bg-indigo-600"
              }`}
            >
              {followedUsers.has(user.id) ? "Following" : "Follow"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;