import React from "react";

interface ProfileProps {
  name: string;
  username: string;
  avatarUrl: string;
  isVerified: boolean;
  followers: number;
  following: number;
  posts: number;
}

const SidebarProfileCard: React.FC<ProfileProps> = ({
  name,
  username,
  avatarUrl,
  isVerified,
  followers,
  following,
  posts,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src={avatarUrl}
            alt={name}
            className="w-20 h-20 rounded-full border-2 border-orange-500"
          />
          {isVerified && (
            <span className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          )}
        </div>
        <h2 className="text-lg font-bold mt-1">{name}</h2>
        <p className="text-gray-400">@{username}</p>
      </div>
      <div className="flex justify-between mt-4">
        <div className="text-center">
          <p className="font-bold">{posts.toLocaleString()}</p>
          <p className="text-sm text-gray-400">Posts</p>
        </div>
        <div className="text-center">
          <p className="font-bold">{followers.toLocaleString()}</p>
          <p className="text-sm text-gray-400">Followers</p>
        </div>
        <div className="text-center">
          <p className="font-bold">{following.toLocaleString()}</p>
          <p className="text-sm text-gray-400">Following</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarProfileCard;
