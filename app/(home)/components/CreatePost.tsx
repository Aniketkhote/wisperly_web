"use client";

import Image from "next/image";
import React, { ChangeEvent, useRef, useState } from "react";
import {
  FaBriefcase,
  FaCog,
  FaFileAlt,
  FaGlobe,
  FaImage,
  FaPlus,
  FaTimes,
  FaUsers,
} from "react-icons/fa";

type PostType = "text" | "image" | "video" | "document" | "job";

interface PostTypeOption {
  type: PostType;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

interface PublishOption {
  value: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const PostCreationBox: React.FC = () => {
  const [postContent, setPostContent] = useState<string>("");
  const [selectedType, setSelectedType] = useState<PostType>("text");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [publishTo, setPublishTo] = useState<string>("public");
  const [mediaFiles, setMediaFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const postTypes: PostTypeOption[] = [
    { type: "image", icon: FaImage, label: "Photo" },
    // { type: "video", icon: FaVideo, label: "Video" },
    { type: "document", icon: FaFileAlt, label: "Document" },
    { type: "job", icon: FaBriefcase, label: "Job" },
  ];

  const publishOptions: PublishOption[] = [
    { value: "public", label: "Public", icon: FaGlobe },
    { value: "group", label: "Group", icon: FaUsers },
    { value: "community", label: "Community", icon: FaCog },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Post content:", postContent);
    console.log("Post type:", selectedType);
    console.log("Publish to:", publishTo);
    console.log("Media files:", mediaFiles);
    setPostContent("");
    setSelectedType("text");
    setIsDialogOpen(false);
    setMediaFiles([]);
  };

  const openDialog = (type: PostType) => {
    setSelectedType(type);
    setIsDialogOpen(true);
    if (type === "image" || type === "video" || type === "document") {
      setTimeout(() => fileInputRef.current?.click(), 0);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setMediaFiles((prevFiles) => [
        ...prevFiles,
        ...Array.from(e.target.files!),
      ]);
    }
  };

  const removeFile = (index: number) => {
    setMediaFiles(mediaFiles.filter((_, i) => i !== index));
  };

  const addMoreFiles = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="bg-white rounded-lg p-4 max-w-2xl mx-auto mb-5 flex">
      <img
        src="https://api.multiavatar.com/Skeleto83.png"
        className="w-9 h-9 mr-3"
        alt=""
      />
      <div className="flex-1">
        <div
          className="w-full px-3 py-2 border border-gray-300 text-gray-600 rounded-lg cursor-text"
          onClick={() => openDialog("text")}
        >
          What do you want to talk about?
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-4">
            {postTypes.map(({ type, icon: Icon, label }) => (
              <button
                key={type}
                type="button"
                className={`flex items-center space-x-1 text-gray-600 hover:text-indigo-600 focus:outline-none ${
                  selectedType === type ? "text-indigo-600" : ""
                }`}
                onClick={() => openDialog(type)}
              >
                <Icon className="w-4 h-4 mr-1" />
                <span className="font-semibold">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <div className="flex items-center mb-4">
              <Image
                src="https://api.multiavatar.com/Skeleto81.png"
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full mr-3"
              />
              <div>
                <h3 className="font-bold pl-1">John Doe</h3>
                <select
                  value={publishTo}
                  onChange={(e) => setPublishTo(e.target.value)}
                  className="text-sm text-gray-600"
                >
                  {publishOptions.map(({ value, label, icon: Icon }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                rows={5}
                placeholder="What do you want to talk about?"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
              ></textarea>

              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept={
                  selectedType === "image"
                    ? "image/*"
                    : selectedType === "video"
                    ? "video/*"
                    : ".pdf,.doc,.docx"
                }
                multiple={true}
                onChange={handleFileChange}
              />

              {(selectedType === "image" ||
                selectedType === "video" ||
                selectedType === "document") && (
                <div className="mb-4">
                  <div className="grid grid-cols-3 gap-2">
                    {mediaFiles.map((file, index) => (
                      <div key={index} className="relative">
                        {selectedType === "image" ? (
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`Preview ${index}`}
                            className="w-full h-32 object-cover rounded"
                          />
                        ) : selectedType === "video" ? (
                          <video
                            src={URL.createObjectURL(file)}
                            className="w-full h-32 object-cover rounded"
                          />
                        ) : (
                          <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center">
                            <FaFileAlt className="text-4xl text-gray-600" />
                          </div>
                        )}
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                        >
                          <FaTimes />
                        </button>
                      </div>
                    ))}
                    {mediaFiles.length > 0 &&
                      (selectedType === "image" ||
                        selectedType === "video" ||
                        selectedType === "document") && (
                        <div
                          className="w-full h-32 border-2 border-dashed border-gray-300 rounded flex items-center justify-center cursor-pointer hover:border-indigo-600"
                          onClick={addMoreFiles}
                        >
                          <FaPlus className="text-4xl text-gray-400" />
                        </div>
                      )}
                  </div>
                </div>
              )}

              {selectedType === "job" && (
                <div>
                  <h3 className="font-bold mb-2">Create Job Posting</h3>
                  <input
                    type="text"
                    placeholder="Job Title"
                    className="w-full p-2 border border-gray-300 rounded mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Company"
                    className="w-full p-2 border border-gray-300 rounded mb-2"
                  />
                </div>
              )}

              <div className="flex justify-between items-center">
                <div className="flex space-x-4 mb-4">
                  {postTypes.map(({ type, icon: Icon, label }) => (
                    <button
                      key={type}
                      type="button"
                      className={`flex items-center space-x-1 text-gray-600 hover:text-indigo-600 focus:outline-none ${
                        selectedType === type ? "text-indigo-600" : ""
                      }`}
                      onClick={() => openDialog(type)}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-semibold">{label}</span>
                    </button>
                  ))}
                </div>
                <div className="flex">
                  <button
                    type="button"
                    onClick={() => setIsDialogOpen(false)}
                    className="px-4 py-1 text-gray-600 mr-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Post
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCreationBox;
