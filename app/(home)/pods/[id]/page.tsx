"use client";

import { pods } from "@/utils/data";
import { useParams } from "next/navigation";

const PodView = () => {
  const params = useParams<{ id: string }>();

  const pod = pods.filter((p) => p.id == Number(params.id))[0];

  return (
    <div className="flex mx-5">
      <div className="bg-white rounded-lg w-10/12 mr-5">
        <div className="relative">
          <img
            src={pod.imageUrl}
            alt={pod.name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-3xl font-bold text-white">{pod.name}</h1>
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">{pod.description}</p>
            <p className="text-sm text-gray-500">{pod.members} members</p>
          </div>
          <div className="mb-6">
            <textarea
              className="w-full p-2 border rounded mb-2"
              rows={3}
              placeholder="Share your thoughts..."
            ></textarea>
            <div className="flex items-center justify-between">
              <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition duration-300">
                Post
              </button>
            </div>
          </div>

          <button className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition duration-300">
            Leave Pod
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg p-5 w-1/3 mx-5">Bookmark Sidebar</div>
    </div>
  );
};

export default PodView;
