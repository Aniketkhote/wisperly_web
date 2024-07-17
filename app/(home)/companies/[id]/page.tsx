"use client";

import { jobData } from "@/utils/data";
import { IJob } from "@/utils/types";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import CompanyJobCard from "../../components/CompanyJobCard";
import PostList from "../../components/PostList";

// Assume these are coming from an API or database
const companyData = {
  name: "TechInnovate Solutions",
  logo: "https://example.com/logo.png",
  banner: "https://example.com/banner.jpg",
  description:
    "Innovatech Solutions is a forward-thinking software development company dedicated to crafting innovative, robust, and scalable software solutions for businesses worldwide.",
  followers: 50000,
  employees: 5000,
  location: "San Francisco, CA",
  industry: "Information Technology",
  website: "https://techinnovate.com",
  founded: 2010,
  socialMedia: {
    linkedin: "https://linkedin.com/company/techinnovate",
    twitter: "https://twitter.com/techinnovate",
    facebook: "https://facebook.com/techinnovate",
    instagram: "https://instagram.com/techinnovate",
  },
};

interface IUpdate {
  id: number;
  content: string;
  likes: number;
  comments: number;
}

const CompanyHeader = () => (
  <header className="relative">
    <div className="relative rounded-t-lg h-36 bg-gradient-to-r from-purple-500 to-indigo-500">
      {/* Background image can be added here */}
      <Image
        src="/images/banner.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="w-full h-full rounded-t-lg"
      />
    </div>
    <div className="flex items-center justify-between mx-5">
      <img
        src="https://api.multiavatar.com/Skeleto81.png"
        className="relative w-20 h-20 -mt-12"
        alt="profile"
      />
    </div>
    <div className="flex justify-between items-center mb-8 mt-4 mx-5">
      <div>
        <h1 className="text-xl font-bold">{companyData.name}</h1>
        <p className="text-gray-600">{companyData.description}</p>
      </div>
      <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300">
        Follow
      </button>
    </div>
  </header>
);

const CompanyPage = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [updates, setUpdates] = useState<IUpdate[]>([]);
  const [jobs, setJobs] = useState<IJob[]>([]);

  useEffect(() => {
    // Simulating API calls
    fetchUpdates();
    fetchJobs();
  }, []);

  const fetchUpdates = () => {
    // Simulated API call
    setTimeout(() => {
      setUpdates([
        {
          id: 1,
          content: "We're excited to announce our new AI-powered platform!",
          likes: 1200,
          comments: 89,
        },
        {
          id: 2,
          content:
            'TechInnovate Solutions named in "Top 10 Tech Companies to Watch" by TechCrunch',
          likes: 3500,
          comments: 230,
        },
        {
          id: 3,
          content: "Join us at the upcoming Tech Summit 2024 in New York City",
          likes: 800,
          comments: 45,
        },
      ]);
    }, 1000);
  };

  const fetchJobs = () => {
    // Simulated API call
    setTimeout(() => {
      setJobs(jobData);
    }, 1500);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "about":
        return <AboutSection />;
      case "post":
        return <UpdatesSection updates={updates} />;
      case "jobs":
        return <JobsSection jobs={jobs} />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="flex">
      <div className="w-10/12">
        <div className="bg-white mr-5 rounded-lg">
          <CompanyHeader />

          <div className="flex space-x-4 mb-8 border-t rounded-b-lg">
            {["About", "Post", "Jobs"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-4 py-2 ${
                  activeTab === tab.toLowerCase()
                    ? "border-b-2 border-indigo-600 text-indigo-600"
                    : "text-gray-600 hover:text-indigo-600"
                } transition duration-300`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mr-5">{renderTabContent()}</div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="w-1/3 mr-5">
        <div className="bg-white p-4 rounded-lg">
          <h1></h1>
        </div>
      </div>
    </div>
  );
};

// AboutSection, UpdatesSection, and JobsSection components remain the same

const AboutSection = () => (
  <div className="bg-white p-4 rounded-lg">
    <p className="mb-2">
      <strong>Website:</strong>
      <a href={companyData.website} className="text-indigo-600 hover:underline">
        {companyData.website}
      </a>
    </p>
    <p className="mb-2">
      <strong>Industry:</strong> {companyData.industry}
    </p>
    <p className="mb-2">
      <strong>Company size:</strong> {companyData.employees} employees
    </p>
    <p className="mb-2">
      <strong>Headquarters:</strong> {companyData.location}
    </p>
    <p className="mb-2">
      <strong>Founded:</strong> {companyData.founded}
    </p>
  </div>
);

const UpdatesSection = ({ updates }: { updates: IUpdate[] }) => (
  <div className="space-y-6">
    {updates.map((update: IUpdate) => (
      <motion.div
        key={update.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <PostList />
      </motion.div>
    ))}
  </div>
);

const JobsSection = ({ jobs }: { jobs: IJob[] }) => (
  <div className="space-y-4 bg-white p-4 rounded-lg">
    {jobs.map((job: IJob) => (
      <motion.div
        key={job.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <CompanyJobCard job={job} bookmark={false} />
      </motion.div>
    ))}
  </div>
);

export default CompanyPage;
