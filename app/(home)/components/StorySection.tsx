"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPlus } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

interface IStory {
  id: number;
  name: string;
  img: string;
}

const StorySection = () => {
  const [showAddStoryDialog, setShowAddStoryDialog] = useState(false);
  const [showViewStoryDialog, setShowViewStoryDialog] = useState(false);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const scrollRef = useRef(null);

  const stories: IStory[] = [
    {
      id: 1,
      name: "Justin Rosser",
      img: "https://api.multiavatar.com/Skeleto2.png",
    },
    {
      id: 2,
      name: "Davis Dorwart",
      img: "https://api.multiavatar.com/Skeleto3.png",
    },
    {
      id: 3,
      name: "Randy Saris",
      img: "https://api.multiavatar.com/Skeleto4.png",
    },
    {
      id: 4,
      name: "Charlie Press",
      img: "https://api.multiavatar.com/Skeleto5.png",
    },
    {
      id: 5,
      name: "Zaire Herwitz",
      img: "https://api.multiavatar.com/Skeleto6.png",
    },
    {
      id: 6,
      name: "Talan Philips",
      img: "https://api.multiavatar.com/Skeleto7.png",
    },
    {
      id: 7,
      name: "Corey Gouse",
      img: "https://api.multiavatar.com/Skeleto8.png",
    },
    {
      id: 8,
      name: "Emma Thompson",
      img: "https://api.multiavatar.com/Skeleto9.png",
    },
    {
      id: 9,
      name: "Olivia Parker",
      img: "https://api.multiavatar.com/Skeleto10.png",
    },
    {
      id: 10,
      name: "Liam O'Connor",
      img: "https://api.multiavatar.com/Skeleto11.png",
    },
    {
      id: 11,
      name: "Sophia Lee",
      img: "https://api.multiavatar.com/Skeleto12.png",
    },
    {
      id: 12,
      name: "Noah Patel",
      img: "https://api.multiavatar.com/Skeleto13.png",
    },
    {
      id: 13,
      name: "Ava Williams",
      img: "https://api.multiavatar.com/Skeleto14.png",
    },
    {
      id: 14,
      name: "Ethan Nakamura",
      img: "https://api.multiavatar.com/Skeleto15.png",
    },
    {
      id: 15,
      name: "Mia Tanaka",
      img: "https://api.multiavatar.com/Skeleto16.png",
    },
  ];

  const handleAddStory = () => {
    setShowAddStoryDialog(true);
  };

  const handleViewStory = (index: number) => {
    setActiveStoryIndex(index);
    setShowViewStoryDialog(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto p-6 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-shrink-0 cursor-pointer"
          onClick={handleAddStory}
        >
          <div className="relative w-12 h-12 rounded-full border-2 borderindigo500 overflow-hidden">
            <img
              src="https://api.multiavatar.com/Skeleto1.png"
              alt="Your Story"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <FaPlus className="text-white text-xs" />
            </div>
          </div>
          <p className="text-xs text-center mt-2 font-semibold w-14 truncate">
            Add Story
          </p>
        </motion.div>

        {stories.map((story, index) => (
          <motion.div
            key={story.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 cursor-pointer"
            onClick={() => handleViewStory(index)}
          >
            <div className="relative w-12 h-12 rounded-full border-2 borderindigo500 overflow-hidden">
              <img
                src={story.img}
                alt={story.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
            </div>
            <p className="text-xs text-center mt-2 w-14 truncate">
              {story.name}
            </p>
          </motion.div>
        ))}
      </div>

      {showViewStoryDialog && (
        <ViewStoryDialog
          stories={stories}
          activeIndex={activeStoryIndex}
          setActiveIndex={setActiveStoryIndex}
          onClose={() => setShowViewStoryDialog(false)}
        />
      )}
    </div>
  );
};

const ViewStoryDialog = ({
  stories,
  activeIndex,
  setActiveIndex,
  onClose,
}: {
  stories: IStory[];
  activeIndex: number;
  setActiveIndex: Function;
  onClose: any;
}) => {
  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setActiveIndex((prev: number) => Math.min(prev + 1, stories.length - 1)),
    onSwipedRight: () =>
      setActiveIndex((prev: number) => Math.max(prev - 1, 0)),
  });

  const story = stories[activeIndex];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div
        {...handlers}
        className="relative w-[30vw] max-w-lg h-[70vh] bg-gray-900 rounded-lg overflow-hidden"
      >
        <img
          src={story.img}
          alt={story.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src={story.img}
              alt={story.name}
              className="w-8 h-8 rounded-full border-2 border-white"
            />
            <span className="text-white font-medium">{story.name}</span>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 text-2xl"
          >
            &times;
          </button>
        </div>
        {activeIndex > 0 && (
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            onClick={() => setActiveIndex((prev: number) => prev - 1)}
          >
            <FaChevronLeft />
          </button>
        )}
        {activeIndex < stories.length - 1 && (
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            onClick={() => setActiveIndex((prev: number) => prev + 1)}
          >
            <FaChevronRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default StorySection;
