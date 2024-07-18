"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBookmark,
  FaComment,
  FaEllipsisV,
  FaThumbsUp,
} from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

const Post = ({
  userImg,
  userName,
  date,
  text,
  postImg,
  likes,
  comments,
  shares,
}: {
  userImg: string;
  userName: string;
  date: string;
  text: string;
  postImg: string[];
  likes: string;
  comments: string;
  shares: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
    trackMouse: true,
  });

  const handleSwipe = (direction: string) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex === postImg.length - 1 ? 0 : prevIndex + 1
      );
    } else if (direction === "right") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? postImg.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div className="bg-white rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-4">
        <Link href={`/profile/${userName.replace(" ", "_").toLowerCase()}`}>
          <div className="flex items-center space-x-3">
            <img
              src={userImg}
              alt={userName}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2 className="text-sm font-semibold">{userName}</h2>
              <p className="text-xs text-gray-500">{date}</p>
            </div>
          </div>
        </Link>
        <FaEllipsisV className="text-gray-500" />
      </div>
      <div className="mb-4">{text}</div>
      {postImg.length > 0 && (
        <div className="relative mt-4" {...handlers}>
          <div className="relative">
            {postImg.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Post image ${index + 1}`}
                className={`w-full aspect-square object-cover rounded-lg transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  position: index === currentIndex ? "static" : "absolute",
                  top: 0,
                  left: 0,
                }}
              />
            ))}
          </div>

          <button
            onClick={() => handleSwipe("right")}
            hidden={postImg.length < 2}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => handleSwipe("left")}
            hidden={postImg.length < 2}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
          >
            <FaArrowRight />
          </button>
        </div>
      )}
      <div className="flex items-center justify-between mt-4 pt-2">
        <button className="flex items-center text-sm text-gray-600 hover:text-indigo-600">
          <FaThumbsUp />
          <span className="ml-1">{likes} Likes</span>
        </button>
        <button className="flex items-center text-sm text-gray-600 hover:text-indigo-600">
          <FaComment />
          <span className="ml-1">{comments} Comments</span>
        </button>
        <button className="flex items-center text-sm text-gray-600 hover:text-indigo-600">
          <FaBookmark />
          <span className="ml-1">{shares} Saved</span>
        </button>
      </div>
    </div>
  );
};

export default Post;
