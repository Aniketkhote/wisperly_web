"use client";
import { hashtags, suggestions } from "@/utils/data";
import { Button } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";

const RightSidebar = () => {
  const [followedUsers, setFollowedUsers] = useState<Set<number>>(new Set());

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
    <div className="space-y-4">
      <div className="bg-white rounded-lg mr-5 text-center">
        <h3 className="font-bold text-gray-700 px-4 pt-3 text-start">
          Suggested
        </h3>
        <div className="space-y-1 text-sm pb-4 pt-2 px-2 text-start">
          {suggestions.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-md"
            >
              <Link
                href={`/profile/${user.name.replace(" ", "_").toLowerCase()}`}
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
        <Button className="text-indigo-500 border border-indigo-500 rounded-full px-4 py-1 mb-4 w-48">
          See more
        </Button>
      </div>
      <div className="bg-white rounded-lg mr-5 text-center">
        <h3 className="font-bold text-gray-700 px-4 pt-3 text-start">
          Top Hashtags
        </h3>
        <div className="space-y-1 text-sm pb-4 pt-2 px-2 text-start">
          {hashtags.map((hashtag) => (
            <div
              key={hashtag.tag}
              className="px-5 hover:bg-gray-50 p-2 rounded-md"
            >
              <h1 className="text-base font-semibold">{hashtag.tag}</h1>
              <p className="text-gray-500">{hashtag.postCount} Posts</p>
            </div>
          ))}
        </div>
        <Button className="text-indigo-500 border border-indigo-500 rounded-full px-4 py-1 mb-4 w-48">
          See more
        </Button>
      </div>
    </div>
  );
};

export default RightSidebar;
