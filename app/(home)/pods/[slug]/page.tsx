"use client";

import { pods } from "@/utils/data";
import { IPod } from "@/utils/types";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const PodView = () => {
  const params = useParams<{ slug: string }>();

  const pod = pods.filter(
    (p) => p.name.replace(" ", "-").toLowerCase() == params.slug
  )[0];

  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "John Doe",
      content: "Hello everyone! Excited to be part of this pod.",
      likes: 5,
    },
    {
      id: 2,
      author: "Jane Smith",
      content:
        "Just finished an amazing book. Anyone interested in a discussion?",
      likes: 3,
    },
  ]);
  const [newPost, setNewPost] = useState("");

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      const newPostObj = {
        id: posts.length + 1,
        author: "Current User",
        content: newPost,
        likes: 0,
      };
      setPosts([newPostObj, ...posts]);
      setNewPost("");
    }
  };

  const handleLike = (postId: number) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <div className="flex items-start">
      <div className="bg-white rounded-lg w-10/12">
        <div className="relative">
          <img
            src={`/${pod.imageUrl}`}
            alt={pod.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-t-lg">
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
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            ></textarea>
            <div className="flex items-center justify-end">
              <button
                className="px-4 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition duration-300"
                onClick={handlePostSubmit}
              >
                Post
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="bg-gray-100 p-4 rounded">
                <p className="font-semibold">{post.author}</p>
                <p className="mt-2">{post.content}</p>
                <div className="mt-2 flex items-center">
                  <button
                    className="text-indigo-500 hover:text-indigo-600"
                    onClick={() => handleLike(post.id)}
                  >
                    Like
                  </button>
                  <span className="ml-2 text-gray-500">{post.likes} likes</span>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition duration-300 mt-6">
            Leave Pod
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg p-2 w-1/3 mx-5">
        <div className="space-y-1 text-sm">
          {pods.map((pod: IPod) => (
            <div
              key={pod.id}
              className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-md"
            >
              <Link
                href={`/pods/${pod.name.replace(" ", "-").toLowerCase()}`}
                className="flex items-center cursor-pointer"
              >
                <img
                  src={`/${pod.imageUrl}`}
                  alt={pod.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-3">
                  <p className="text-sm font-semibold text-gray-700 overflow-ellipsis">
                    {pod.name}
                  </p>
                  <p className="text-xs text-gray-500">{pod.members}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PodView;
