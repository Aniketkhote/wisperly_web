"use client";

import { jobData } from "@/utils/data";
import { IJob } from "@/utils/types";
import JobCard from "../../components/JobCard";

const Jobs = () => {
  return (
    <div className="space-y-4">
      {jobData.map((job: IJob) => (
        <JobCard key={job.id} job={job} bookmark={false} />
      ))}
    </div>
  );
};

export default Jobs;
