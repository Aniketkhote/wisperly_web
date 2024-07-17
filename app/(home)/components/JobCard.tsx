"use client";

import { IJob } from "@/utils/types";
import Link from "next/link";
import { FaBookmark } from "react-icons/fa";

const JobCard = ({ job, bookmark }: { job: IJob; bookmark: boolean }) => {
  return (
    <div className="border rounded-lg border-gray-100 p-4 cursor-pointer">
      <Link href={`/jobs/${job.id}`}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex">
            <div className="h-12 w-12 p-1 rounded-md bg-gray-100">
              <img src={job.logo} alt={job.company} />
            </div>
            <div className="ml-2">
              <h2 className="text-md font-semibold">{job.title}</h2>
              <h4 className="text-sm">{job.location}</h4>
            </div>
          </div>

          <button
            className={`${
              bookmark ? "bg-indigo-200" : "bg-gray-200"
            } p-2 rounded`}
          >
            <FaBookmark
              className={`${
                bookmark ? "text-indigo-500" : "text-gray-500"
              }  h-3 w-3`}
            />
          </button>
        </div>
        <p className="text-gray-500 mb-2">{job.description}</p>
        <div className="flex flex-wrap mb-2">
          {job.tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="px-2 py-1 bg-indigo-50 font-medium text-gray-500 text-xs rounded mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default JobCard;
